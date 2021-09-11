import { createWebHistory, createRouter } from 'vue-router'
import coaches from './components/CoachesList.vue'

import FormCoach from './components/ContactWithCoach/FormCoach.vue'
import RequestsFromStudent from './components/RequestsFromStudent.vue'
import Auth from './pages/auth/UserAuth.vue'

const routes = [
  {
    path: '/coaches',
    name: 'coaches',
    component: coaches,
    children: [
      { name: 'FormCoach', path: ':coacheId', component: FormCoach }
    ]
  },
  {
    path: '/request',
    name: 'request',
    component: RequestsFromStudent
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/:notFound(.*)',
    redirect: '/coaches'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
