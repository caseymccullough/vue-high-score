<template>
  <form v-on:submit.prevent>
    <div class="field">
      <label for="userName">User Name</label>
      <input id="userName" name="userName" type="text" v-model="userScore.userName" />
    </div>
    <div class="field">
      <label for="score">Score</label>
      <input id="score" name="score" type="text" v-model="userScore.score" />
    </div>
    <div class="actions">
      <button type="submit" v-on:click="saveScore()">Save Score</button>
    </div>
  </form>
  
</template>

<script>
import ScoresService from '../services/ScoresService'

export default {

    data() {
        return {
            userScore: {
                userName: '',
                score: 0
            }
        };
    },
    methods: {
        saveScore() {
            this.userScore.userName = this.userScore.userName.toUpperCase();
            ScoresService.create(this.userScore)
            .then(response => {
                console.log (response.status);
                if (response.status === 201 || response.status === 200){
                    this.$router.push ({name: 'home'});
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
form {
  padding: 20px;
  font-size: 16px;
  width: 500px;
}
form * {
  box-sizing: border-box;
  line-height: 1.5;
}
.field {
  display: flex;
  flex-direction: column;
}
.field label {
  margin: 4px 0;
  font-weight: bold;
}
.field input,
.field textarea {
  padding: 8px;
}
.field textarea {
  height: 300px;
}
.actions {
  text-align: right;
  padding: 10px 0;
}

</style>