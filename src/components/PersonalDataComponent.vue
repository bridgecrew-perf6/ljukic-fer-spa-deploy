<template>
  <small-card>
    <div id="vue-app">
        <h1>Personal data</h1>
        <label>Name: </label>
        <input type="text" v-model="name" />
        <span>Your name is {{ name }}</span>
      </div>
    <div>
        <div>
          <label>Age: </label>
          <input type="text" :value="age" />
        </div>
        <div>Your age is {{ age }}?</div>
      </div>
  </small-card>
  <small-card>
    <button v-on:click="a++">Calculate date</button>
    <p>In {{ a }} years it will be year {{ yearEnhanced }}</p>
    <p></p>
    <button v-on:click="resetYear">Reset</button>
  </small-card>
</template>


<script>
export default {
  data() {
    return {
      a: 1,
      year: 2022,
      eur: 1,
      hrk: 7.5,
      name: "Your name",
      age: "",
    };
  },

  computed: {
    yearEnhanced: function(){
            console.log('yearEnhanced');
            return this.a + this.year;
        },
    resetYear: function(){
      console.log('resetYear');
      return this.a=1;
    }
  },

  //lifecycle hook
  beforeCreate() {
    alert('Be careful with exposing your personal data!');
  },
  created() {

  },
  beforeMount(){

  },
  mounted(){

  },
  beforeUpdate(){
    alert('before update');
  },
  updated(){
    alert('updated');
  }
};
</script>