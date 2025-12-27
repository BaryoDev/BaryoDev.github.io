<template>
  <div class="library-showcase">
    <!-- Hero Section -->
    <div class="hero">
      <h1>BaryoDev JavaScript Libraries</h1>
      <p class="hero-description">
        A collection of lightweight, zero-dependency JavaScript utilities designed for modern web development.
        Try them out with live, interactive demos below!
      </p>
    </div>

    <!-- Library Grid with Interactive Demos -->
    <div class="libraries-grid">
      
      <!-- 1. tiny-time-ago -->
      <div class="lib-card published">
        <div class="lib-header">
          <h3>@arnelirobles/tiny-time-ago</h3>
          <span class="badge published">Published</span>
        </div>
        <p class="lib-desc">Lightweight relative time formatting with locale support</p>
        
        <div class="demo-box">
          <h4>✨ Live Demo</h4>
          <div class="demo-grid-compact">
            <div class="demo-compact">
              <span class="demo-label">Now:</span>
              <span class="demo-result">{{ timeAgo(now) }}</span>
            </div>
            <div class="demo-compact">
              <span class="demo-label">1 min ago:</span>
              <span class="demo-result">{{ timeAgo(oneMinuteAgo) }}</span>
            </div>
            <div class="demo-compact">
              <span class="demo-label">1 day ago:</span>
              <span class="demo-result">{{ timeAgo(oneDayAgo) }}</span>
            </div>
          </div>
        </div>

        <div class="code-box">
          <code>timeAgo(Date.now() - 60000) // "1 minute ago"</code>
        </div>

        <div class="install-box">
          <code>npm install @arnelirobles/tiny-time-ago</code>
          <button @click="copy('npm install @arnelirobles/tiny-time-ago', 'tiny-time-ago')" class="copy-btn">
            {{ copied === 'tiny-time-ago' ? '✓' : '📋' }}
          </button>
        </div>
      </div>

      <!-- 2. nano-clsx -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>nano-clsx</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Conditional className builder (alternative to clsx/classnames)</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <div class="demo-controls">
            <label><input type="checkbox" v-model="clsxDemo.active"> active</label>
            <label><input type="checkbox" v-model="clsxDemo.disabled"> disabled</label>
            <label><input type="checkbox" v-model="clsxDemo.primary"> primary</label>
          </div>
          <div class="demo-result-box">
            <strong>Result:</strong> <code>{{ clsxResult }}</code>
          </div>
        </div>

        <div class="code-box">
          <code>clsx('btn', { active: true, disabled: false })</code>
        </div>
      </div>

      <!-- 3. nano-slug -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>nano-slug</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">URL-safe slug generator with custom replacements</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <input 
            v-model="slugInput" 
            type="text" 
            placeholder="Enter text to slugify..."
            class="demo-input"
          />
          <div class="demo-result-box">
            <strong>Slug:</strong> <code>{{ slugResult }}</code>
          </div>
        </div>

        <div class="code-box">
          <code>slugify('Hello World!') // "hello-world"</code>
        </div>
      </div>

      <!-- 4. nano-safe-storage -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>nano-safe-storage</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Fault-tolerant localStorage with TTL and namespacing</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <div class="demo-controls">
            <input v-model="storageDemo.key" placeholder="Key" class="demo-input-sm" />
            <input v-model="storageDemo.value" placeholder="Value" class="demo-input-sm" />
            <button @click="storageSet" class="demo-btn">Set</button>
            <button @click="storageGet" class="demo-btn">Get</button>
          </div>
          <div v-if="storageDemo.result" class="demo-result-box">
            <code>{{ storageDemo.result }}</code>
          </div>
        </div>

        <div class="code-box">
          <code>storage.set('user', data, { ttl: 3600 })</code>
        </div>
      </div>

      <!-- 5. nano-human-bytes -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>nano-human-bytes</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Human-readable byte formatting</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <input 
            v-model.number="bytesInput" 
            type="range" 
            min="0" 
            max="10737418240" 
            step="1048576"
            class="demo-slider"
          />
          <div class="demo-result-box">
            <strong>{{ bytesInput.toLocaleString() }} bytes =</strong> <code>{{ formatBytes(bytesInput) }}</code>
          </div>
        </div>

        <div class="code-box">
          <code>formatBytes(1536) // "1.5 KB"</code>
        </div>
      </div>

      <!-- 6. tiny-debounce-throttle -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>tiny-debounce-throttle</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Debounce/throttle with cancel, flush, and RAF support</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <input 
            v-model="debounceInput" 
            @input="handleDebounceInput"
            placeholder="Type to see debounce..."
            class="demo-input"
          />
          <div class="demo-stats">
            <div>Input events: {{ debounceDemo.inputCount }}</div>
            <div>Debounced calls: {{ debounceDemo.debouncedCount }}</div>
          </div>
        </div>

        <div class="code-box">
          <code>const search = debounce(fn, 300)</code>
        </div>
      </div>

      <!-- 7. click-outside-lite -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>click-outside-lite</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Detect clicks outside elements (modals, dropdowns)</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <div class="click-outside-demo">
            <div 
              ref="clickOutsideBox"
              class="click-target"
              :class="{ active: clickOutsideActive }"
              @click="clickOutsideActive = true"
            >
              Click me, then click outside
            </div>
            <div v-if="clickOutsideActive" class="click-status">
              Box is active! Click outside to close.
            </div>
          </div>
        </div>

        <div class="code-box">
          <code>onClickOutside(ref, handleClose)</code>
        </div>
      </div>

      <!-- 8. deep-merge-lite -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>deep-merge-lite</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Deep merge with array strategies and cloneDeep</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <div class="merge-demo">
            <div class="merge-objects">
              <div>
                <strong>Object A:</strong>
                <code class="merge-code">{{ JSON.stringify(mergeDemo.objA, null, 2) }}</code>
              </div>
              <div>
                <strong>Object B:</strong>
                <code class="merge-code">{{ JSON.stringify(mergeDemo.objB, null, 2) }}</code>
              </div>
            </div>
            <div class="demo-result-box">
              <strong>Merged:</strong>
              <code class="merge-code">{{ JSON.stringify(mergeResult, null, 2) }}</code>
            </div>
          </div>
        </div>

        <div class="code-box">
          <code>merge({}, objA, objB)</code>
        </div>
      </div>

      <!-- 9. deep-clean-obj -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>deep-clean-obj</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Remove null, undefined, and empty values from objects</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <div class="clean-demo">
            <div>
              <strong>Before:</strong>
              <code class="merge-code">{{ JSON.stringify(cleanDemo.dirty, null, 2) }}</code>
            </div>
            <div class="demo-result-box">
              <strong>After clean():</strong>
              <code class="merge-code">{{ JSON.stringify(cleanResult, null, 2) }}</code>
            </div>
          </div>
        </div>

        <div class="code-box">
          <code>clean({ a: 1, b: null, c: '' }) // { a: 1 }</code>
        </div>
      </div>

      <!-- 10. resilient-fetcher -->
      <div class="lib-card">
        <div class="lib-header">
          <h3>resilient-fetcher</h3>
          <span class="badge coming-soon">Coming Soon</span>
        </div>
        <p class="lib-desc">Fetch wrapper with retry, timeout, and backoff</p>
        
        <div class="demo-box">
          <h4>✨ Interactive Demo</h4>
          <button @click="testResilientFetch" class="demo-btn-large" :disabled="fetchDemo.loading">
            {{ fetchDemo.loading ? 'Fetching...' : 'Test Fetch with Retries' }}
          </button>
          <div v-if="fetchDemo.attempts.length" class="fetch-attempts">
            <div v-for="(attempt, i) in fetchDemo.attempts" :key="i" class="fetch-attempt">
              Attempt {{ i + 1 }}: {{ attempt }}
            </div>
          </div>
        </div>

        <div class="code-box">
          <code>resilientFetch(url, { retries: 3, timeout: 5000 })</code>
        </div>
      </div>

    </div>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>🔗 Explore the Source</h2>
      <p>All libraries are open source and available on GitHub</p>
      <a href="https://github.com/BaryoDev/BaryoDev.Libraries.JavaScript" target="_blank" class="cta-btn">
        View on GitHub →
      </a>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { timeAgo } from '@arnelirobles/tiny-time-ago'

const copied = ref(null)

// tiny-time-ago demo
const now = ref(Date.now())
onMounted(() => {
  now.value = Date.now()
  // Update every second for live demo
  const interval = setInterval(() => {
    now.value = Date.now()
  }, 1000)
  onUnmounted(() => clearInterval(interval))
})

const oneMinuteAgo = computed(() => now.value - 60 * 1000)
const oneDayAgo = computed(() => now.value - 24 * 60 * 60 * 1000)

// nano-clsx demo
const clsxDemo = ref({ active: true, disabled: false, primary: true })
const clsxResult = computed(() => {
  const classes = ['btn']
  if (clsxDemo.value.active) classes.push('active')
  if (clsxDemo.value.disabled) classes.push('disabled')
  if (clsxDemo.value.primary) classes.push('primary')
  return classes.join(' ')
})

// nano-slug demo
const slugInput = ref('Hello World! This is a Test')
const slugResult = computed(() => {
  return slugInput.value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
})

// nano-safe-storage demo
const storageDemo = ref({ key: 'user', value: 'John Doe', result: '' })
const storageSet = () => {
  try {
    localStorage.setItem(`demo_${storageDemo.value.key}`, storageDemo.value.value)
    storageDemo.value.result = `✓ Stored: ${storageDemo.value.key} = "${storageDemo.value.value}"`
  } catch (e) {
    storageDemo.value.result = `✗ Error: ${e.message}`
  }
}
const storageGet = () => {
  try {
    const value = localStorage.getItem(`demo_${storageDemo.value.key}`)
    storageDemo.value.result = value ? `✓ Retrieved: "${value}"` : '✗ Key not found'
  } catch (e) {
    storageDemo.value.result = `✗ Error: ${e.message}`
  }
}

// nano-human-bytes demo
const bytesInput = ref(1536000)
const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

// tiny-debounce-throttle demo
const debounceInput = ref('')
const debounceDemo = ref({ inputCount: 0, debouncedCount: 0 })
let debounceTimeout = null
const handleDebounceInput = () => {
  debounceDemo.value.inputCount++
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    debounceDemo.value.debouncedCount++
  }, 300)
}

// click-outside-lite demo
const clickOutsideBox = ref(null)
const clickOutsideActive = ref(false)
onMounted(() => {
  const handleClickOutside = (e) => {
    if (clickOutsideBox.value && !clickOutsideBox.value.contains(e.target)) {
      clickOutsideActive.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => document.removeEventListener('click', handleClickOutside))
})

// deep-merge-lite demo
const mergeDemo = ref({
  objA: { name: 'John', age: 30, tags: ['dev'] },
  objB: { age: 31, city: 'NYC', tags: ['js'] }
})
const mergeResult = computed(() => {
  return {
    ...mergeDemo.value.objA,
    ...mergeDemo.value.objB,
    tags: [...(mergeDemo.value.objA.tags || []), ...(mergeDemo.value.objB.tags || [])]
  }
})

// deep-clean-obj demo
const cleanDemo = ref({
  dirty: { a: 1, b: null, c: '', d: undefined, e: 'valid', f: 0 }
})
const cleanResult = computed(() => {
  const obj = { ...cleanDemo.value.dirty }
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '')
  )
})

// resilient-fetcher demo
const fetchDemo = ref({ loading: false, attempts: [] })
const testResilientFetch = async () => {
  fetchDemo.value.loading = true
  fetchDemo.value.attempts = []
  
  for (let i = 1; i <= 3; i++) {
    fetchDemo.value.attempts.push(`Attempting... (${i}/3)`)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  
  fetchDemo.value.attempts.push('✓ Success!')
  fetchDemo.value.loading = false
}

// Copy to clipboard
const copy = async (text, id) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = id
    setTimeout(() => copied.value = null, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.library-showcase {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
  border: none;
}

.hero-description {
  font-size: 1.1rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
}

.libraries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.lib-card {
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.lib-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.lib-card.published {
  border: 2px solid #667eea;
  background: linear-gradient(to bottom, #fff, #f8f9ff);
}

.lib-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.lib-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #667eea;
  border: none;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge.published {
  background: #10b981;
  color: white;
}

.badge.coming-soon {
  background: #f59e0b;
  color: white;
}

.lib-desc {
  color: #5f6368;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.demo-box {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.demo-box h4 {
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  color: #2c3e50;
}

.demo-grid-compact {
  display: grid;
  gap: 0.5rem;
}

.demo-compact {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
  font-size: 0.85rem;
}

.demo-label {
  color: #70757a;
}

.demo-result {
  font-weight: 600;
  color: #667eea;
}

.demo-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.demo-controls label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
}

.demo-input, .demo-input-sm {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.demo-input-sm {
  flex: 1;
  margin-bottom: 0;
}

.demo-slider {
  width: 100%;
  margin-bottom: 0.5rem;
}

.demo-btn, .demo-btn-large {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
}

.demo-btn-large {
  width: 100%;
  padding: 0.75rem;
}

.demo-btn:hover, .demo-btn-large:hover {
  background: #5568d3;
}

.demo-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.demo-result-box {
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.demo-result-box code {
  color: #667eea;
  font-weight: 600;
}

.demo-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #5f6368;
}

.click-outside-demo {
  text-align: center;
}

.click-target {
  padding: 1.5rem;
  background: white;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.click-target.active {
  border-color: #667eea;
  background: #f0f4ff;
  border-style: solid;
}

.click-status {
  margin-top: 0.5rem;
  color: #667eea;
  font-size: 0.85rem;
  font-weight: 600;
}

.merge-demo, .clean-demo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.merge-objects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.merge-code {
  display: block;
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: pre;
  overflow-x: auto;
}

.fetch-attempts {
  margin-top: 0.75rem;
}

.fetch-attempt {
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
}

.code-box {
  background: #282c34;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  overflow-x: auto;
}

.code-box code {
  color: #abb2bf;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
}

.install-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
}

.install-box code {
  flex: 1;
  font-size: 0.8rem;
  color: #2c3e50;
}

.copy-btn {
  padding: 0.4rem 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.copy-btn:hover {
  background: #5568d3;
}

.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8eaed 100%);
  border-radius: 12px;
}

.cta-section h2 {
  margin-bottom: 0.5rem;
  border: none;
}

.cta-section p {
  color: #5f6368;
  margin-bottom: 2rem;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.cta-btn:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .libraries-grid {
    grid-template-columns: 1fr;
  }
  
  .merge-objects {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
}
</style>
