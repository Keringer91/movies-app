<template>
  <div>
   <h3>All movies:</h3>
   <ul v-for="(movie, index) in movies" :key="index">
        <li>
            Title: {{ movie.title}} <br>
            Movie's ID: {{movie.id }}<br><br>
        </li>
    </ul>
 
  <br>
  <form v-on:submit.prevent>
    <input type="email" v-model="email"/>
    <input type="password" v-model="password"/>
    <button @click="login">Login</button>
  </form>
  </div>
</template>


<script>
import { movieService } from "../services/MovieService";
export default {
  name: "Movies",
  data() {
    return {
      movies: [],
      movie: {},
      email: '',
      password: ''
    };
  },
  methods: {

      login() {
        movieService.login({email: this.email, password: this.password}).then(response => {
          console.log('Login success', response)
          localStorage.setItem('token', response.data.token)
          this.$router.go();
        })
      },

  },
  mounted() {
    movieService.getAll().then(response => {
      this.movies = response.data;
    });
  }
};
</script>

<style scoped>
ul {
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
}
</style>