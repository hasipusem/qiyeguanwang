import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@netlify/nuxt', '@pinia/nuxt', '@nuxt/image'],
  routeRules: {
    '/contact': { redirect: { to: '/process#consultation', statusCode: 301 } }
  },
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }
      ],
      meta: [
        { name: 'theme-color', content: '#0B1F33' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  image: { format: ['webp', 'avif'] },
  typescript: { strict: true }
})
