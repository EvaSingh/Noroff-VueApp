import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Recipies from './RecipiesPage.vue'
import Home from './HomePage.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/recipies',
            name: 'recipies',
            component: Recipies
        }
    ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
