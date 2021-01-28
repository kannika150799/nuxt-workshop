export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'workshop-nuxt-dog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    { src: '~/plugins/persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAXv1K_huY8MQLjbibNuXLcdUAjC2Nra8c',
          databaseURL: 'https://workshop-nuxtjs-dog-default-rtdb.firebaseio.com/',
          authDomain: 'workshop-nuxtjs-dog.firebaseapp.com',
          projectId: 'workshop-nuxtjs-dog',
          storageBucket: 'workshop-nuxtjs-dog.appspot.com',
          messagingSenderId: '198278113888',
          appId: '1:198278113888:web:54c66b4475646c3b09b105',
          measurementId: 'G-53JH6QMDE7'
        },
        services: {
          auth: true,
          ssr: {
            // Set 'credential' as described above.
            serverLogin: true
          },
          firestore: true,
          storage: true,
          database: true
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.thedogapi.com'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
