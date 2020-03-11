import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
import { pathOr } from "ramda";
import { getSearch } from "@/api/spotifyApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {},
    lastSearch: null,
    lastFilter: {}
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
    requestSearch(state, filter) {
      state.result = [];
      state.lastSearch = moment();
      state.lastFilter = filter;
    },
    successSearch(state, payload) {
      state.result = payload.result;
    },
    failureSearch(state) {
      state.result = [];
    }
  },
  actions: {
    search({ commit }, filter) {
      commit("requestSearch", filter);
      getSearch(filter)
        .then(result => commit("successSearch", { result }))
        .catch(() => commit("failureSearch"));
    },
    research({ dispatch, state }) {
      dispatch("search", state.lastFilter);
    }
  },
  modules: {}
});
