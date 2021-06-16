<template>
  <small-card>
    <router-link :to="'/recipes/' + id" class="mr-3">
      <img class="card-img-top" style="width: 190px;" :src="image">
    </router-link>

    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <span class="badge badge-primary">
        Cook/prep time: {{ cookTime }}/{{ prepTime }}
      </span>
      <span class="badge badge-secondary">Yield: {{ recipeYield }}</span>
      <span class="badge badge-success">Pusblished: {{ datePublished }}</span>
      <a :href="url" target="_blank" class="card-link">
        <span class="badge badge-success">{{ url.substring(0, 20) }}...</span>
      </a>
    </div>
    <details v-if="ingredients">
      <summary><h3>Ingredients</h3></summary>
      <ul class="list-group list-group-flush">
        <li v-for="ingredient in ingredients" :key="ingredient" class="list-group-item">{{ ingredient }} </li>
      </ul>
    </details>
    <button class="btn btn-danger" @click="deleteRecipe">Delete</button>
  </small-card>
</template>


<script>
export default {
  emits: ["deleteRecipe"], 
  props: [
    "id",
    "image",
    "name",
    "description",
    "cookTime",
    "prepTime",
    "recipeYield",
    "datePublished",
    "url",
    "ingredients"
  ],
  computed: {
    idUrl() { 
      return '/recipes' + this.id;
    }
  },
  methods: {
    deleteRecipe() {
      console.log("emitting delete recipe for ", this.id);
      this.$emit('deleteRecipe', { id: this.id });
    }
  }
};

</script>
<style scoped>
div.card-body .badge {
    white-space: pre-wrap;
}
</style>