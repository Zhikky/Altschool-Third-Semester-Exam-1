import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue"
import NotFoundComponent from "../components/ErrorPage/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    }
  ]
});

export default router
