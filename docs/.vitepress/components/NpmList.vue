<template>
  <div class="npm-grid">
    <div v-if="loading" class="loading">Loading packages...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-for="pkg in filteredPackages" :key="pkg.package.name" class="npm-card">
      <h3 class="npm-title">
        <a :href="pkg.package.links.npm" target="_blank">{{ pkg.package.name }}</a>
      </h3>
      <p class="npm-description">{{ pkg.package.description }}</p>
      <div class="npm-meta">
        <span class="npm-version">v{{ pkg.package.version }}</span>
        <span class="npm-downloads">📥 {{ formatNumber(pkg.downloads || 0) }} (last month)</span>
        <span class="npm-updated">Updated {{ formatDate(pkg.package.date) }}</span>
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

const packages = ref([])
const loading = ref(true)
const error = ref(null)

const filteredPackages = computed(() => {
  return props.limit > 0 ? packages.value.slice(0, props.limit) : packages.value
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

onMounted(async () => {
  try {
    // Searching for packages by author:arnelirobles
    const response = await fetch('https://registry.npmjs.org/-/v1/search?text=author:arnelirobles&size=20')
    if (!response.ok) throw new Error('Failed to fetch NPM packages')
    const data = await response.json()
    
    // Fetch download counts for each package
    const packagesWithStats = await Promise.all(data.objects.map(async (pkg) => {
      try {
        const statsResponse = await fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg.package.name}`)
        const statsData = await statsResponse.json()
        return { ...pkg, downloads: statsData.downloads || 0 }
      } catch (e) {
        return { ...pkg, downloads: 0 }
      }
    }))
    
    packages.value = packagesWithStats
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.npm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 1rem 0;
}

.npm-card {
  padding: 1.5rem;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.npm-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.npm-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #EA4335; /* Google Red for NPM packages */
  border-top: none;
}

.npm-title a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.npm-title a:hover {
  text-decoration: underline;
}

.npm-description {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.npm-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #70757a;
}

.npm-version {
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
