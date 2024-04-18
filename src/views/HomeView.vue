<template>
  <div id="home">
    <header>
      <h2>Scores List</h2>
    </header>
    <scores-list />
    <router-link v-bind:to="{ name: 'create-score' }">
      <button>Add New Score</button>
    </router-link>
  </div>
</template>

<script>
import ScoresList from "../components/ScoresList.vue";

export default {
  components: {
    ScoresList,
  },
};
</script>

<style>
#home {
  text-align: center;
  background-color: lightgray;
}

button{
  margin: 15px;
}
</style>