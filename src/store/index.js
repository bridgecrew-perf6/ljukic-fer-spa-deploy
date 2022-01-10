import { createStore } from "vuex";

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(store, newUser) {
      store.user = newUser;
    }
  },
  getters: {
    user(store) {
      return `${store.user}`;
    },
    isAuth(store) {
      return !!store.user;
    }
  },
  modules: {},
});