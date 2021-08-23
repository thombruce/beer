import tnt from './tnt.config.js'

import feed from './nuxt.feed.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // We could... create and import a tnt.json file and utilise its values here... and elsewhere throughout the file.
  env: {
    siteTitle: tnt.title,
    siteDescription: tnt.description,
    baseUrl: (process.env.NODE_ENV === 'production' ? tnt.url : 'http://localhost:3000'),
    siteImg: tnt.image
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: tnt.title,
    titleTemplate: `%s | ${tnt.title}`,
    htmlAttrs: {
      'data-theme': 'luxury'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: tnt.description },
      { hid: 'og:site_name', property: 'og:site_name', content: tnt.title },
      { hid: 'og:title', property: 'og:title', content: tnt.title },
      { hid: 'og:description', property: 'og:description', content: tnt.description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `${tnt.url}/` },
      { hid: 'og:image', property: 'og:image', content: `${tnt.url}${tnt.image}` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@thombruce/nuxt-tnt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/feed-module
    '@nuxtjs/feed',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Feed module configuration: https://content.nuxtjs.org/integrations#nuxtjsfeed
  feed: feed,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
