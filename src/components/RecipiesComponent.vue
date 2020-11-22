<template>
    <div class="card">
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4"><img :src="thumbnail"><br></div>
            <div class="col-sm-4"></div>
        </div>
        <div class="card-body">
            <h2>{{title}}</h2>
            <b>Ingredients: </b>{{ingredients}}<br>
            <b>Link: </b><a :href="href" target="_blank">Click here</a><br>   
        </div>   
    </div>
</template>

<script>
export default {
 name: 'RecipiesComponent',
   props: ['thumbnail','href','title','ingredients'], 
}
</script>