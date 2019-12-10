<template>
<div>
  <h1>Shared Stories</h1>
  <form>Filter by Tag: <input type="text" v-model="tagSearch" placeholder="#example"/></form>
  <div class="stories" v-if="foundStories.length > 0">
    <div v-for="story in foundStories" v-bind:key="story._id">
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
        stories: [],
        tagSearch: ""
      };
    },
    created() {
      this.getStories();
    },
    computed: {
      foundStories() {
        if (this.tagSearch == "") {
          return this.stories;
        }
        let found = [];
        for (var i = 0; i < this.stories.length; i++) {
          if (this.stories[i].taggedWords.includes(this.tagSearch)) {
            found.push(this.stories[i]);
          }
        }
        return found;
        //return this.stories.filter(story => story.taggedWords.find(this.tagSearch));
      }
    },
    methods: {
      async getStories() {
        try {
          let response = await axios.get("/api/stories");
          this.stories = response.data;
        }
        catch (error) {
          console.log(error);
        }
      },
    }
  }
</script>
