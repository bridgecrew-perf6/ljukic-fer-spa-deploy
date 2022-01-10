<template>
  <div v-if="isAuth">
    <div class="d-flex justify-content-between bg-dark border border-bottom border-light p-3">
        <h1>MegaApp</h1>
        <h2 class="d-flex">
            <div class="nav d-flex ml-5">
                <router-link to="/" class="mr-3">Home</router-link>
                <router-link to="/personaldata" class="mr-3">Personal data</router-link>
                <router-link to="/coding" class="mr-3">Coding</router-link>
                <router-link to="/converter" class="mr-3">Converter</router-link>
            </div>
            <div class="ml-5">Hello, {{ $store.getters.user }}!</div>
        </h2>
    </div>
    <router-view />
  </div>
  <div v-else class="d-flex justify-content-center p-5">
    <user-login class="mt-5"></user-login>
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue';
export default ({
  components: {
    UserLogin
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
})
</script>


<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ece2e2;
  background-color: rgb(51, 78, 51);
}
div.nav a.router-link-exact-active {
  background-color:rgb(235, 174, 224);
}
</style>
