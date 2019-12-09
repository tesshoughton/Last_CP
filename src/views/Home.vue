<template>
<div>
  <h1>Shared Stories</h1>
  <form>Filter by Tag: <input type="text" name="tagSearch"/></form>
  <div class="stories" v-if="stories.length > 0">
    <div v-for="story in stories" v-bind:key="story._id">
      <hr>
      <div class="story">
        <div class="problem">
          <p>{{story.problem}}</p>
          <p><i>-- {{story.name}}</i></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      stories: []
    }
  },
  created() {
    this.getStories();
  },
  methods: {
    async getStories() {
      try {
        let response = await axios.get("/api/stories");
        this.stories = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
