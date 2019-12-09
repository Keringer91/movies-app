<template>
  <div>
    <h5>Add a new movie</h5>
    <form @submit.prevent>
            <label>Title:</label>
            <input v-model = "movie.title" type="text" id="title"><br><br>
            <label>Director:</label>
            <input v-model = "movie.director" type="text" id="director"><br><br>
            <label>Release date:</label>
            <input v-model = "movie.release_date" type="text" id="release_date"><br><br>
            <label>Duration:</label>
            <input v-model = "movie.duration" type="number" id="duration"><br><br>
            <label>Genre:</label>
            <input v-model = "movie.genre" type="text" id="genre"><br><br>
            <label>Image URL:</label>
            <input v-model = "movie.image_url" type="text" id="image_url"><br><br>
            
            <button @click="addNewMovie();" type="submit" value="Submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { movieService } from "../services/MovieService";
export default {
  name: "AddMovie",
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    addNewMovie() {
        movieService.add(this.movie).then(() => {
            // this.$router.push('/movies');
            this.movie = {};
        }).catch(e => {
          console.log(e)
        });
    },
  },
};
</script>

<style scoped>
</style>