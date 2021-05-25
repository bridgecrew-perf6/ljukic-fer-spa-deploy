<template>
  <div class="d-flex justify-content-between bg-light border border-bottom border-dark p-3">
      <h1>My cookbook (Vue ver02)</h1>
      <h2 class="d-flex">
          <div class="nav d-flex ml-5">
              <router-link to="/" class="mr-3">Recipes</router-link>
              <router-link to="/calculator" class="mr-3">Calculator</router-link>
          </div>
      </h2>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div.nav a.router-link-exact-active {
  background-color:gold;
}
</style>
