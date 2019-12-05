<template>
<div>
  <h1>Shared Stories</h1>
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
</template>

<script>
export default {
  name: 'home',
  computed: {
    stories() {
      return this.$store.state.stories;
    }
  },
  created() {
    this.$store.dispatch("getStories");
  }
}
</script>
