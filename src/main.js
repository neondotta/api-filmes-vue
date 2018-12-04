import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

import Home from './pages/Home.vue'

const NotFound404 = {template: '<p>Página não encontrada!</p>'};

const routes = [
    { path: '/', component: Home }
];

const router = new VueRouter({
   routes
});

const app = new Vue({
    router
}).$mount('#app')
