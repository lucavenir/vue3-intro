import EventService from '@/services/EventService.js'
import GStore from '@/store'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Error404 from '../views/Error404.vue'
import EventDetails from '../views/event/Details.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventList from '../views/EventList.vue'
import NetworkError from '../views/NetworkError.vue'

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
    beforeEnter: async to => {
      try {
        const response = await EventService.getEvent(to.params.id)
        GStore.event = response.data
      } catch (error) {
        console.log(error)

        if (error.response && error.response.status == 404) {
          return {
            name: '404Resource',
            params: { resource: 'event' }
          }
        }

        return { name: 'NetworkError' }
      }
    },
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
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: Error404,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
