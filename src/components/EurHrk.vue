<template>
  <small-card>
    <h3>EUR/HRK converter</h3>
    <form>
      <div class="form-group row">
        <label for="eur" class="col-sm-4 col-form-label">EUR</label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="€"
            v-model.number="eur"
            @keyup="e2k"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="hrk" class="col-4 col-form-label">HRK</label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="kn"
            v-model.number="hrk"
            @keyup="k2e"
          />
        </div>
      </div>
    </form>
  </small-card>
</template>


<script>
export default {
  data() {
    return {
      eur: 1,
      hrk: 7.5,
    };
  },
  methods: {
    e2k() {
      this.hrk = this.eur * 7.5;
    },
    k2e() {
      this.eur = this.hrk / 7.5;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 32px;
  color: rgb(161, 12, 12);
}
</style>