<template>
    <div> 
        <h1>{{ msg }}</h1>
        <router-view></router-view>
        <router-link :to="/recipies/"> Click for recipies </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>