import { createApp } from "vue";
import App from "./App.vue";
// import store from "./store";
import router from "./router";
import RecipeCard from './components/RecipeCard.vue';
import TempConverter from './components/TempConverter.vue';

const app = createApp(App);
app.use(router);
app.component('recipe-card', RecipeCard);
app.component('temp-converter', TempConverter);
app.mount("#app");
