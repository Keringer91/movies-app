import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Movies from './components/Movies.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/movies" },
  { name: "movies", path: "/movies", component: Movies },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");