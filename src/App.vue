<template>
  <div id="app">
    <nav>
      <router-link to='/movies'> Movies </router-link>
      <!-- <router-link to='/add'> Add new contact </router-link> -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 10px;
}
</style>
