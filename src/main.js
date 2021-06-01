import { createApp } from "vue";
import App from "./App.vue";
// import store from "./store";
import router from "./router";
import RecipeCard from './components/RecipeCard.vue';

const app = createApp(App);
app.use(router);
app.component('recipe-card', RecipeCard);
app.mount("#app");
