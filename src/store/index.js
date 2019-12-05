import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: [],
  },
  mutations: {
    setStories(state, stories) {
      state.stories = stories;
    },
  },
  actions: {
    async getStories(context) {
      try {
        let response = await axios.get("/api/stories");
        context.commit('setStories', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addStory(context, data) {
      try {
        await axios.post("/api/stories", data);
      } catch (error) {
        console.log(error);
      }
    },
  }
});
