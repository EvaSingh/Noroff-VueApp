<template>
        <HomeComponent msg="Welcome to Recipelove!" />
   
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
    
export default {
  name: 'HomePage',
  components: {
      HomeComponent
  },
  data() {
      return {
          msg: 'welcome'
      }
      
  }
}
</script>