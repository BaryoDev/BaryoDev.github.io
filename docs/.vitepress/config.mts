import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      { text: 'Repositories', link: '/repos' },
      { text: 'NPM Packages', link: '/packages' },
      { text: 'NuGet Packages', link: '/nuget' },
      { text: 'Docker Hub', link: '/docker' }
    ],

    sidebar: [
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
})
