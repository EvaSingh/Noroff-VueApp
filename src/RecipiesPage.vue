<template>
    <div class="row">
        <div v-for="recipe in recipies" v-bind:key="recipe" class="col-sm-12">
            <Recipies v-bind:thumbnail="recipe.thumbnail"
                      v-bind:title="recipe.title"
                      v-bind:href="recipe.href" 
                      v-bind:ingredients="recipe.ingredients" 
            ></Recipies>
        </div>
        
    </div>
</template>

<script>
import Recipies from './components/RecipiesComponent.vue'
export default {
    name: 'Recipies',
    components:{
        Recipies
    },
    data(){
        return{
           recipies: []  
        }
    },
    beforeMount: function(){
        const app = this;
    
        fetch('http://www.recipepuppy.com/api/')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            app.recipies = result;
        })
    }   
}
</script>