<template>
    <div class="row">
        <div v-for="recipe in recipies" v-bind:key="recipe" class="col-sm-12">
            <RecipiesComponent v-bind:thumbnail="recipe.thumbnail"
                               v-bind:title="recipe.title"
                               v-bind:href="recipe.href" 
                               v-bind:ingredients="recipe.ingredients" 
            ></RecipiesComponent>
            <router-view></router-view>
        </div> 
    </div>
</template>

<script>
import RecipiesComponent from './components/RecipiesComponent.vue'
    
export default {
    name: 'RecipiesPage',
    components:{
        RecipiesComponent
    },
    data(){
        return{
           recipies: []  
        }
    },
    beforeMount: function(){
        const app = this;
        const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'http://www.recipepuppy.com/api/';
        
            fetch(conversionUrl + url)
            .then(function(response) {
                return response.json();
            })
            .then(function(results) {
                app.recipies = results;
            })
    }   
}
</script>