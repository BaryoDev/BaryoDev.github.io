<template>
  <div class="nuget-grid">
    <div v-if="loading" class="loading">Loading NuGet packages...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-for="pkg in filteredPackages" :key="pkg.id" class="nuget-card">
      <h3 class="nuget-title">
        <a :href="'https://www.nuget.org/packages/' + pkg.id" target="_blank">{{ pkg.id }}</a>
      </h3>
      <p class="nuget-description">{{ pkg.description }}</p>
      <div class="nuget-meta">
        <span class="nuget-version">v{{ pkg.version }}</span>
        <span class="nuget-downloads">📥 {{ formatNumber(pkg.totalDownloads) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { resilientFetch } from 'resilient-fetcher'

const props = defineProps({
  limit: {
    type: Number,
    default: 0
  }
})

const packages = ref([])
const loading = ref(true)
const error = ref(null)

const filteredPackages = computed(() => {
  return props.limit > 0 ? packages.value.slice(0, props.limit) : packages.value
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

onMounted(async () => {
  try {
    const response = await resilientFetch('https://azuresearch-usnc.nuget.org/query?q=owner:arnelirobles&prerelease=false&semVerLevel=2.0.0', {
      retries: 3,
      retryDelay: 1000,
      timeout: 10000
    })
    if (!response.ok) throw new Error('Failed to fetch NuGet packages')
    const data = await response.json()
    packages.value = data.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.nuget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 1rem 0;
}

.nuget-card {
  padding: 1.5rem;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.nuget-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.nuget-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #004880; /* NuGet Blue */
  border-top: none;
}

.nuget-title a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.nuget-title a:hover {
  text-decoration: underline;
}

.nuget-description {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.nuget-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #70757a;
}

.nuget-version {
  background: #f1f3f4;
  padding: 2px 8px;
  border-radius: 12px;
  color: #3c4043;
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
