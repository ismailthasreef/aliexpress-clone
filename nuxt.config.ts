// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components : false,
  pages : true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  runtimeConfig : {
      public :{
         stripePK : process.env.STRIPE_PK_KEY
      }
  },
  app : {
    head : {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script : [
        {src : 'https://js.stripe.com/v3/',defer : true}
      ]
    }
  }
})
