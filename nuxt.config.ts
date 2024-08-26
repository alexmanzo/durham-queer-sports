// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  compatibilityDate: "2024-08-26",
  eslint: {
    config: {
      stylistic: true
    }
  }
})