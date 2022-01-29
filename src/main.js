import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue' 
import Studies from './views/Studies.vue' 
import Experience from './views/Experience.vue' 
import Portfolio from './views/Portfolio.vue' 

Vue.config.productionTip = false

// enable vue-router plugin
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/studies', component: Studies },
  { path: '/experience', component: Experience },
  { path: '/portfolio', component: Portfolio },
];

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
