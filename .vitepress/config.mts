import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "HAVEANIDEA.ME",
  description: "JunkCoin is Created in 2013 Revived 2024 made to be JUNK with the intention to fail",
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  vite:{
    server:{
      port: 5177,
    }
  },
  themeConfig: {
    logo: '/logo.png',
    darkModeSwitchLabel: 'auto',
    nav: [
      { text: 'HOME', link: '/' },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/HQXGpARVfJ' },
    ],
    footer: {
      message: 'This is a learning experiment project. The site is not liable for any risks.',
      copyright: 'Copyright © 2024-present haveanidea.me'
    }
  }
})
