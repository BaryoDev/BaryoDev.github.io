---
layout: home

hero:
  name: "BaryoDev"
  text: "The Developer from the Baryo"
  tagline: "Crafting open source code in free time, bringing solutions from the baryo to the world."
  actions:
    - theme: brand
      text: "Explore Repositories"
      link: /repos

---

<div class="custom-content">

## 🛠️ Featured Repositories
<RepoList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/repos" class="VPButton alt medium">View All Repositories</a>
</div>

## 🛠️ NuGet Packages
<NugetList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/nuget" class="VPButton alt medium">View All NuGet Packages</a>
</div>

## 📦 NPM Packages
<NpmList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/packages" class="VPButton alt medium">View All NPM Packages</a>
</div>

## 🐋 Docker Hub
<DockerList :limit="6" />

<div style="text-align: center; margin: 2rem 0;">
  <a href="/docker" class="VPButton alt medium">View All Docker Hub Images</a>
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
</style>
