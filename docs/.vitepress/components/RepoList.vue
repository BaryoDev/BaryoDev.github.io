<template>
  <div class="repo-grid">
    <div v-if="loading" class="loading">Loading repositories...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-for="repo in filteredRepos" :key="repo.id" class="repo-card">
      <h3 class="repo-title">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      </h3>
      <p class="repo-description">{{ repo.description || 'No description provided.' }}</p>
      <div class="repo-meta">
        <span v-if="repo.language" class="repo-lang">
          <span class="lang-dot" :style="{ backgroundColor: getLangColor(repo.language) }"></span>
          {{ repo.language }}
        </span>
        <span class="repo-stars">⭐ {{ repo.stargazers_count }}</span>
        <span class="repo-updated">Updated {{ formatDate(repo.updated_at) }}</span>
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
  const result = repos.value.filter(repo => !repo.fork)
  return props.limit > 0 ? result.slice(0, props.limit) : result
})

const getLangColor = (lang) => {
  const colors = {
    'C#': '#178600',
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'Python': '#3572A5'
  }
  return colors[lang] || '#8b949e'
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/orgs/BaryoDev/repos?sort=updated&direction=desc')
    if (!response.ok) throw new Error('Failed to fetch repositories')
    const data = await response.json()
    repos.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 1rem 0;
}

.repo-card {
  padding: 1.5rem;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.repo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.repo-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #4285F4;
  border-top: none;
}

.repo-title a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.repo-title a:hover {
  text-decoration: underline;
}

.repo-description {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.repo-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #70757a;
}

.repo-lang {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
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
