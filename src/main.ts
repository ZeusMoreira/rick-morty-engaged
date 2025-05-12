import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo/client'

const app = createApp(App)

app.use(router)
app.use(Quasar)

app.provide(DefaultApolloClient, apolloClient)

app.mount('#app')
