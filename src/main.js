import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RecipiesPage from './RecipiesPage.vue'
import HomePage from './HomePage.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/recipies/',
            name: 'recipies',
            component: RecipiesPage
        }
    ]
})

new Vue({
  render: h => h(App),
  router,
  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
    
}).$mount('#app')
