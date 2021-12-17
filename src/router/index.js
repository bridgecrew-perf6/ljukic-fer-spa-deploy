import { defineAsyncComponent} from "vue";
import {
  createRouter,
  createWebHistory
} from "vue-router";
import Recipes from "../views/Recipes.vue";
import Calculator from "../views/Calculator.vue";
import NotFound from "../views/NotFound.vue";
// import Disco from "../views/Disco.vue";

//const Disco = defineAsyncComponent(() => import('../views/Disco.vue'));
// https://v3.vuejs.org/guide/migration/async-components.html#_3-x-syntax
// Vue Router supports a similar mechanism for asynchronously loading route components, 
// known as lazy loading. Despite the similarities, this feature is distinct from Vue's support for
// async components. 
// You should not use defineAsyncComponent when configuring route components with Vue Router. 
// You can read more about this in the Lazy Loading Routes (opens new window)section of the Vue Router documentation.
const Disco = () => import('../views/Disco.vue');

const routes = [
  {
    path: "/",
    component: Recipes,  // mogli smo i redirect: "/recipes"
  },
  {
    path: "/recipes/:id?",  // postoji i alias:"/"
    component: Recipes,
    props: true // sada će router postaviti id u komponenti Recipes
  },
  {
    path: "/calculator",
    component: Calculator,
  },
  {
    path: "/disco",
    component: Disco,
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



  // {
  //   path: "/calculator",
  //   name: "Calculator",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Calculator.vue"),
  // },