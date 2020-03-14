<template>
  <div class="the-search-bar-data-box__box-component">
    <div class="the-search-bar-data-box__title-box">
      <p class="the-search-box-data-box__title">{{ $t("app.title") }}</p>
    </div>
    <div class="the-search-bar-data-box__icon-box" v-on:click="sendResearch">
      <p class="the-search-bar-data-box__icon">
        <font-awesome-icon :icon="['fas', 'redo']" />
      </p>
    </div>
    <div class="the-search-bar-data-box__info-box">
      <p class="the-search-bar-data-box__icon">{{ lastSearch }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TheSearchBarDataBox",
  computed: {
    lastSearch: function() {
      const date = moment(this.$store.state.lastSearch);
      if (date.isValid()) {
        return `${this.$t("app.searchbar.search.lastsearch")} ${date.format(
          "HH:mm"
        )}`;
      }
      return "";
    }
  },
  methods: {
    sendResearch: function() {
      this.$store.dispatch("research");
    }
  }
};
</script>

<style lang="scss">
.the-search-bar-data-box {
  &__box-component {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__icon-box {
    margin-left: 1rem;
    cursor: pointer;
  }
  &__info-box {
    margin-left: 1rem;
  }
}
</style>
