import { defineAsyncComponent} from "vue";
import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import PersonalData from "../views/PersonalData.vue";
import NotFound from "../views/NotFound.vue";
import Converter from "../views/Converter.vue";

const Coding = () => import('../views/Coding.vue');

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/personaldata",
    component: PersonalData,
  },
  {
    path: "/converter",
    component: Converter,
  },
  {
    path: "/coding",
    component: Coding,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;