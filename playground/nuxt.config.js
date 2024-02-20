export default defineNuxtConfig({
  css: ['~/styles/global.css'],
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  modules: ['../src/module'],
  typescript: {
    tsConfig: { compilerOptions: { baseUrl: '.' } },
  },
})
