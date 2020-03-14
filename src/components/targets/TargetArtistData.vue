<template>
  <div class="target-artist-data__box-component">
    <h2 class="target-artist-data__title">{{ getName }}</h2>
    <p class="target-artist-data__artist">{{ getFollowers }} {{$t("app.section.text.followers")}}</p>
    <p class="target-artist-data__date">{{ getPopularity }} {{$t("app.section.text.popularity")}}</p>
  </div>
</template>

<script>
import { pathOr } from "ramda";

export default {
  name: "TargetArtistData",
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    getName: function() {
      return String(this.artist.name);
    },
    getFollowers: function() {
      return pathOr(0, ["followers", "total"], this.artist);
    },
    getPopularity: function() {
      return Number(this.artist.popularity);
    }
  }
};
</script>

<style lang="scss">
.target-artist-data {
  &__box-component {
    width: 100%;
  }
}
</style>
