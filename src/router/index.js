import { createRouter, createWebHistory } from "vue-router";
import Recipes from "../views/Recipes.vue";
import Calculator from "../views/Calculator.vue";

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;



  // {
  //   path: "/calculator",
  //   name: "Calculator",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Calculator.vue"),
  // },