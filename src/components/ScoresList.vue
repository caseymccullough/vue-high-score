<template>
  <table id="scores-table">
      <tr v-for="score in scores" v-bind:key="score.id">
          <td class="score-value">{{ score.score}} </td>
          <td class="score-user">{{score.userName}} </td>
      </tr>
  </table>
</template>

<script>
import scoresService from '../services/ScoresService';

export default {
    data() {
        return {
            scores: []
        }
    },
    created() {
        scoresService.list().then(response => {
            this.scores = response.data;
        });
    },
    methods: {

    }

}
</script>

<style>
#scores-table{
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    background-color: lightgray;
    border: darkgray 2px solid;
}

tr{
    background-color: white;
}

.score-value {
    color: blue;
}

.score-user{
    color: red;
}

</style>