import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutPage from "../views/AboutPage.vue";
import EventDetails from "../views/EventDetails.vue";
import EventListPage from "../views/EventListPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "event-list",
    component: EventListPage,
  },
  {
    path: "/events/:id",
    name: "event-details",
    component: EventDetails,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
