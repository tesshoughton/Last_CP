<template>
<div>
  <h1>Add Your Story</h1>
  <form v-if="creating" @submit.prevent="addStory">
    <input v-model="addedName" placeholder="Name">
    <p></p>
    <textarea v-model="addedProblem"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for sharing your story! Your story will now be posted for others to view.</p>
    <p><a @click="toggleForm" href="#">Submit another story</a></p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      addedName: '',
      addedProblem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addStory() {
      try {
        await axios.post("/api/stories", {
          name: this.addedName,
          problem: this.addedProblem
        });
        this.addedName = "";
        this.addedProblem = "";
        this.creating = false;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>