<template>
  <div class="the-search-bar-controls-box__box-component">
    <div class="the-search-bar-controls-box__icon-search-box">
      <div class="the-search-bar-controls-box__icon-search">
        <font-awesome-icon :icon="['fas', 'search']" />
        <input
          :placeholder="$t('app.searchbar.search.placeholder')"
          type="search"
          name="search"
          v-model="q"
          v-on:input="sendSearch"
        />
      </div>
    </div>
    <div class="the-search-bar-controls-box__icon-filter-box" v-on:click="openSidebar">
      <p class="the-search-bar-controls-box__icon-filter">
        <font-awesome-icon :icon="['fas', 'filter']" />
      </p>
    </div>
    <div class="the-search-bar-controls-box__icon-options-box">
      <p class="the-search-bar-controls-box__icon-options">
        <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearchBarControlsBox",
  data: function() {
    return {
      q: "",
      delayTimer: 0
    };
  },
  methods: {
    sendSearch: function() {
      const self = this;
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(function() {
        self.$store.dispatch("search", {
          q: self.q,
          limit: 3,
          type: "album,artist,playlist,track"
        });
      }, 500);
    },
    openSidebar: function() {
      this.$store.dispatch("openSidebar");
    }
  }
};
</script>

<style lang="scss">
.the-search-bar-controls-box {
  &__box-component {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  &__icon-search-box {
    margin-right: 1rem;
    cursor: pointer;
  }
  &__icon-filter-box {
    margin-right: 1rem;
    cursor: pointer;
  }
  &__icon-options-box {
    cursor: pointer;
  }
}
</style>
