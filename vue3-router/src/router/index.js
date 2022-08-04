import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Error404 from '../views/Error404.vue'
import EventDetails from '../views/event/Details.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventList from '../views/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  {
    path: '/event/:slug(.*)',
    redirect: to => ({ path: `/events/${to.params.slug}` })
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
    // alias: '/about'  // NOT SEO FRIENDLY!!
  },
  {
    path: '/about',
    redirect: { name: 'About' }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
