import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['logo.svg'],
    manifest: {
      name: 'BaryoDev',
      short_name: 'BaryoDev',
      description: 'Official documentation and project showcase',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'logo.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
        {
          src: 'logo.svg',
          sizes: '512x512',
          type: 'image/svg+xml'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    }
  },
  title: "BaryoDev",
  description: "Official documentation and project showcase",
  appearance: false,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap' }],
    ['script', { src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' }],
    ['script', {}, `
      window.onload = function() {
        if (typeof kofiWidgetOverlay !== 'undefined') {
          kofiWidgetOverlay.draw('arnelirobles', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#d9534f',
            'floating-chat.donateButton.text-color': '#fff'
          });
        }
      };
    `]
  ],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BarakoCMS', link: '/barako-cms/' },
      { text: 'Libraries', link: '/libraries' },
      { text: 'Repositories', link: '/repos' },
      { text: 'NPM Packages', link: '/packages' },
      { text: 'NuGet Packages', link: '/nuget' },
      { text: 'Docker Hub', link: '/docker' }
    ],

    sidebar: {
      '/barako-cms/': [
        {
          text: 'BarakoCMS',
          items: [
            { text: 'Introduction', link: '/barako-cms/' },
            { text: 'Roadmap', link: '/barako-cms/roadmap' },
            { text: 'Versions', link: '/barako-cms/versions' }
          ]
        },
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/barako-cms/guide/introduction' },
            { text: 'Getting Started', link: '/barako-cms/guide/getting-started' },
            { text: 'Configuration', link: '/barako-cms/guide/configuration' },
            { text: 'Content Modeling', link: '/barako-cms/guide/content-modeling' },
            { text: 'Admin UI', link: '/barako-cms/guide/admin-ui' },
            { text: 'RBAC', link: '/barako-cms/guide/rbac' },
            { text: 'Testing', link: '/barako-cms/guide/testing' },
            { text: 'Observability', link: '/barako-cms/guide/observability' },
            { text: 'Troubleshooting', link: '/barako-cms/guide/troubleshooting' }
          ]
        },
        {
          text: 'Deployment',
          collapsed: false,
          items: [
            { text: 'Local', link: '/barako-cms/guide/local-deployment' },
            { text: 'Docker/Kubernetes', link: '/barako-cms/guide/kubernetes-deployment' },
            { text: 'Fly.io', link: '/barako-cms/guide/fly-io-deployment' },
            { text: 'Oracle Cloud', link: '/barako-cms/guide/oracle-cloud-deployment' },
            { text: 'Backup & Recovery', link: '/barako-cms/guide/backup-recovery' }
          ]
        },
        {
          text: 'Core Concepts',
          collapsed: true,
          items: [
            { text: 'Architecture', link: '/barako-cms/guide/architecture' },
            { text: 'Event Sourcing', link: '/barako-cms/core-concepts/event-sourcing' },
            { text: 'Concurrency', link: '/barako-cms/core-concepts/concurrency' },
            { text: 'Database Automation', link: '/barako-cms/guide/database-automation' }
          ]
        },
        {
          text: 'Workflows & Plugins',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/barako-cms/workflows/' },
            { text: 'Plugins', link: '/barako-cms/workflows/plugins' },
            { text: 'Plugin Development', link: '/barako-cms/plugin-development-guide' },
            { text: 'Examples', link: '/barako-cms/workflows/plugin-examples' }
          ]
        },
        {
          text: 'API & Reference',
          collapsed: true,
          items: [
            { text: 'Endpoints', link: '/barako-cms/api/endpoints' },
            { text: 'Error Codes', link: '/barako-cms/reference/error-codes' }
          ]
        },
        {
          text: 'Blog',
          collapsed: true,
          items: [
            { text: 'Index', link: '/barako-cms/blog/' },
            { text: 'Manifesto', link: '/barako-cms/blog/barako-manifesto' }
          ]
        }
      ],
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Repositories', link: '/repos' },
            { text: 'NPM Packages', link: '/packages' },
            { text: 'NuGet Packages', link: '/nuget' },
            { text: 'Docker Hub', link: '/docker' }
          ]
        }
      ]
    }
  }
}))
