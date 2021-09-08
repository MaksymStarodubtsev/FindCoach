import { createWebHistory, createRouter } from 'vue-router'
import coaches from './components/CoachesList.vue'

import FormCoach from './components/ContactWithCoach/FormCoach.vue'

const routes = [
  {
    path: '/coaches',
    name: 'coaches',
    component: coaches,
    children: [
      { name: 'FormCoach', path: ':coacheId', component: FormCoach }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
