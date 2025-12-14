<template>
  <div class="docker-grid">
    <div v-if="loading" class="loading">Loading Docker images...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-for="repo in filteredRepos" :key="repo.name" class="docker-card">
      <h3 class="docker-title">
        <a :href="'https://hub.docker.com/r/arnelirobles/' + repo.name" target="_blank">{{ repo.name }}</a>
      </h3>
      <p class="docker-description">{{ repo.description || 'No description provided.' }}</p>
      <div class="docker-meta">
        <span class="docker-pulls">⬇️ {{ formatNumber(repo.pull_count) }} pulls</span>
        <span class="docker-stars">⭐ {{ repo.star_count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  limit: {
    type: Number,
    default: 0
  }
})

const repos = ref([])
const loading = ref(true)
const error = ref(null)

const filteredRepos = computed(() => {
  return props.limit > 0 ? repos.value.slice(0, props.limit) : repos.value
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

onMounted(async () => {
  try {
    const url = 'https://hub.docker.com/v2/repositories/arnelirobles/?page_size=20'
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    
    const response = await fetch(proxyUrl)
    if (!response.ok) throw new Error('Failed to fetch Docker Hub repositories')
    
    const data = await response.json()
    const parsedData = JSON.parse(data.contents) // AllOrigins wraps the response in a 'contents' field
    repos.value = parsedData.results
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.docker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 1rem 0;
}

.docker-card {
  padding: 1.5rem;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.docker-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.docker-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #2496ed; /* Docker Blue */
  border-top: none;
}

.docker-title a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.docker-title a:hover {
  text-decoration: underline;
}

.docker-description {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.docker-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #70757a;
}

.loading, .error {
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: #5f6368;
}

.error {
  color: #EA4335;
}
</style>
