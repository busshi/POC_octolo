import { createRouter, createWebHistory } from "vue-router";
import TheClock from "../views/TheClock.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "clock",
      component: TheClock,
    },
  ],
});

export default router;
