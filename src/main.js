import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Movies from './components/Movies.vue'
import AddMovie from './components/AddMovie.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/movies" },
  { name: "movies", path: "/movies", component: Movies },
  { name: "add", path: "/add", component: AddMovie },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");