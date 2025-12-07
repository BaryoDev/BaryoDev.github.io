import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BaryoDev",
  description: "Official documentation and project showcase",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'Team', link: '/team' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BaryoDev' }
    ]
  }
})
