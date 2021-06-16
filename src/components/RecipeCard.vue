<template>

  <small-card v-if="!editMode">
    <router-link :to="'/recipes/' + modelValue.id" class="mr-3">
      <img class="card-img-top" style="width: 190px;" :src="modelValue.image">
    </router-link>

    <div class="card-body">
      <h5 class="card-title">{{ modelValue.name }}</h5>
      <p class="card-text">{{ modelValue.description }}</p>
      <span class="badge badge-primary">
        Cook/prep time: {{ modelValue.cookTime }}/{{ modelValue.prepTime }}
      </span>
      <span class="badge badge-secondary">Yield: {{ modelValue.recipeYield }}</span>
      <span class="badge badge-success">Pusblished: {{ modelValue.datePublished }}</span>
      <a :href="modelValue.url" target="_blank" class="card-link">
        <span class="badge badge-success">{{ modelValue.url.substring(0, 20) }}...</span>
      </a>
    </div>
    <details v-if="modelValue.ingredients">
      <summary><h3>Ingredients</h3></summary>
      <ul class="list-group list-group-flush">
        <li v-for="ingredient in modelValue.ingredients" :key="ingredient" class="list-group-item">{{ ingredient }} </li>
      </ul>
    </details> 
    <button class="btn btn-danger" @click="deleteRecipe">Delete</button>
    <button v-if="canEdit" class="btn btn-primary" @click="editMode = true">Edit</button>
  </small-card>
  <div v-if="editMode" class="editForm">
    	<form @submit.prevent="submitChanges">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="name"  v-model="name">
        </div>
        
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
        </div>
        
        <button class="btn btn-success" type="submit">Save</button>
        <button class="btn btn-warning" @click.stop="exitSingleRecipe()">Cancel</button>
      </form>
      
  </div>
</template>


<script>
export default {
  emits: ["deleteRecipe", "update:modelValue"], 
  props: ["modelValue", "canEdit"],
  data() {
    return {
      editMode: false,
      name: this.modelValue.name,
      description: this.modelValue.description
    }
  },
  computed: {
    idUrl() { 
      return '/recipes' + this.id;
    }
  },
  methods: {
    deleteRecipe() {
      this.$emit('deleteRecipe', { id: this.id });
    },
    exitSingleRecipe() {
      this.$router.push({ path: '/recipes' });
    }, 
    submitChanges() {
      console.log("submitting changes");
      this.$emit('update:modelValue', { 
        id: this.modelValue.id, 
        image: this.modelValue.image, 
        name: this.name, 
        description: this.description, 
        cookTime: this.modelValue.cookTime, 
        prepTime: this.modelValue.prepTime, 
        recipeYield: this.modelValue.recipeYield, 
        datePublished: this.modelValue.datePublished, 
        url: this.modelValue.url, 
        ingredients: this.modelValue.ingredients
      });
      this.exitSingleRecipe();
    }
  }
};

</script>
<style scoped>
  div.card-body .badge {
      white-space: pre-wrap;
  }
  div.editForm {
    min-width: 500px;
    border: 0.2rem gray solid;
    border-radius: 3px;
    padding: 1.5rem;
  }
</style>