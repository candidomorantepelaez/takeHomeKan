import Vue from "vue";
import Vuex from "vuex";
import { pathOr } from "ramda";
import { getSearch } from "@/api/spotifyApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {}
  },
  getters: {
    getAlbums: state => {
      return pathOr([], ["result", "data", "albums", "items"], state);
    },
    getArtists: state => {
      return pathOr([], ["result", "data", "artists", "items"], state);
    },
    getPlaylists: state => {
      return pathOr([], ["result", "data", "playlists", "items"], state);
    },
    getTracks: state => {
      return pathOr([], ["result", "data", "tracks", "items"], state);
    }
  },
  mutations: {
    requestSearch(state) {
      state.result = [];
    },
    successSearch(state, payload) {
      state.result = payload.result;
    },
    failureSearch(state) {
      state.result = [];
    }
  },
  actions: {
    search({ commit }, { textSearch }) {
      commit("requestSearch");
      getSearch(textSearch)
        .then(result => commit("successSearch", { result }))
        .catch(() => commit("failureSearch"));
    }
  },
  modules: {}
});
