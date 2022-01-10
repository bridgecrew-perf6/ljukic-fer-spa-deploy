import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import PersonalDataComponent from './components/PersonalDataComponent.vue';
import SmallCard from './components/SmallCard.vue';
import EurHrk from './components/EurHrk.vue';

const CodingComponent = defineAsyncComponent(() => import('./components/CodingComponent.vue'));

const app = createApp(App);
app.use(store);
app.use(router);
app.component('personal-data-component', PersonalDataComponent);
app.component('small-card', SmallCard);
app.component('eur-hrk', EurHrk);
app.component('coding-component', CodingComponent);
app.mount("#app");