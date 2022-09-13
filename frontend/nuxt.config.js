export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hvilken vaskeuke er det?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      }
    ]
  },
  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/dayjs'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxtjs/firebase'
    '@nuxtjs/apollo'

  ],
  // firebase: {
  //   config: {
  //     apiKey: 'AIzaSyAdt-mgM6FBa-4jjMFlGTHNOsyqEn6Z0fg',
  //     authDomain: 'hvilken-vaskeuke-er-det.firebaseapp.com',
  //     databaseURL: 'https://hvilken-vaskeuke-er-det-default-rtdb.europe-west1.firebasedatabase.app',
  //     projectId: 'hvilken-vaskeuke-er-det',
  //     storageBucket: 'hvilken-vaskeuke-er-det.appspot.com',
  //     messagingSenderId: '184428787142',
  //     appId: '1:184428787142:web:0e91a58b5f7b3f438e6ec7',
  //     measurementId: 'G-Z79S0VEE5Y'
  //   },
  //   services: {
  //     messaging: {
  //       createServiceWorker: true,
  //       actions: [
  //         {
  //           action: 'goToVg',
  //           url: 'https://vg.no'
  //         }
  //       ]
  //     }

  //   }
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     name: 'Hvilken vaskeuke er det?',
  //     short_name: 'Vaskeuke',
  //     description: 'Nettside for å huske hva man skal vaske denne uken',
  //     lang: 'no',
  //     useWebmanifestExtension: false
  //   }
  // },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/api/graphql'
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
