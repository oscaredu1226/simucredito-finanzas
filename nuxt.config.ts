// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2025-07-15',
    devtools: {enabled: false},
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:8080/api',   //'https://simu-credito-platform-6n2e.onrender.com/api'
        }
    },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss']
})
