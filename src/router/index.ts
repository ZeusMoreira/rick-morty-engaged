import { createRouter, createWebHistory } from 'vue-router'
import CharacterList from '../pages/CharacterList.vue'
import CharacterDetail from '../pages/CharacterDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: CharacterList },
  { path: '/character/:id', name: 'CharacterDetail', component: CharacterDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
