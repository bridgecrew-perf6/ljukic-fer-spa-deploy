<template>
  <small-card>
    <h3>Please login with your username</h3>
    <form @submit.prevent="login">
      <div class="form-group row">
        <label for="celsius" class="col-sm-4 col-form-label">Enter here:</label>
        <div class="col-8">
          <input
            class="form-control"
            v-model.trim="username"
          />
        </div>
      </div>
      <button class="btn btn-success" type="submit">Login</button>
    </form>
  </small-card>
</template>


<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    login() {
      this.$store.commit('setUser', this.username);
    }
  },
};
</script>
