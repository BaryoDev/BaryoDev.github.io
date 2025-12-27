---
layout: home

hero:
  name: "BaryoDev"
  text: "Builds better, not just builds"
  tagline: "A trusted name in software development. We craft open-source tools with uncompromising quality, performance, and reliability."
  actions:
    - theme: brand
      text: "Explore Projects"
      link: /repos
    - theme: alt
      text: "JavaScript Libraries"
      link: /libraries

---

<div class="custom-content">

## Why BaryoDev?

<div class="why-grid">
  <div class="why-card">
    <div class="why-icon">✅</div>
    <h3>Trusted</h3>
    <p>Production-tested, reliable code you can depend on</p>
  </div>
  <div class="why-card">
    <div class="why-icon">🏆</div>
    <h3>Quality</h3>
    <p>90%+ test coverage, comprehensive benchmarks</p>
  </div>
  <div class="why-card">
    <div class="why-icon">⚡</div>
    <h3>Performance</h3>
    <p>Measurably faster than alternatives</p>
  </div>
  <div class="why-card">
    <div class="why-icon">🎯</div>
    <h3>Thoughtful</h3>
    <p>Elegant solutions to real problems</p>
  </div>
</div>

## 🚀 Featured Projects

<div class="featured-projects">
  <div class="project-card">
    <h3>barakoCMS</h3>
    <p class="project-desc">Production-ready headless CMS for .NET 8</p>
    <div class="project-badges">
      <span class="badge">✅ Event-sourced</span>
      <span class="badge">✅ .NET 8</span>
    </div>
    <a href="https://github.com/BaryoDev/barakoCMS" target="_blank" class="project-link">View on GitHub →</a>
  </div>
  <div class="project-card">
    <h3>rnxjs</h3>
    <p class="project-desc">Zero-build JavaScript framework</p>
    <div class="project-badges">
      <span class="badge">✅ 1.2KB gzipped</span>
      <span class="badge">✅ Zero deps</span>
    </div>
    <a href="https://github.com/BaryoDev/rnxjs" target="_blank" class="project-link">View on GitHub →</a>
  </div>
  <div class="project-card">
    <h3>Verdict</h3>
    <p class="project-desc">Fastest Result pattern for .NET</p>
    <div class="project-badges">
      <span class="badge">✅ Zero-allocation</span>
      <span class="badge">✅ 3x faster</span>
    </div>
    <a href="https://github.com/BaryoDev/Verdict" target="_blank" class="project-link">View on GitHub →</a>
  </div>
</div>

## 🛠️ All Repositories
<RepoList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/repos" class="VPButton alt medium">View All Repositories</a>
</div>

## 📦 NPM Packages
<NpmList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/packages" class="VPButton alt medium">View All NPM Packages</a>
</div>

## 🛠️ NuGet Packages
<NugetList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/nuget" class="VPButton alt medium">View All NuGet Packages</a>
</div>

</div>

<style>
.custom-content {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

h2 {
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  border-top: none;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.why-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8f9ff);
  border: 1px solid #e8eaed;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
}

.why-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.why-card h3 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #667eea;
  border: none;
}

.why-card p {
  margin: 0;
  color: #5f6368;
  line-height: 1.6;
}

.featured-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.project-card {
  padding: 2rem;
  background: white;
  border: 2px solid #667eea;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.project-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  color: #667eea;
  border: none;
}

.project-desc {
  color: #5f6368;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.badge {
  padding: 0.25rem 0.75rem;
  background: #10b981;
  color: white;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.project-link:hover {
  color: #5568d3;
}

@media (max-width: 768px) {
  .why-grid, .featured-projects {
    grid-template-columns: 1fr;
  }
}
</style>
