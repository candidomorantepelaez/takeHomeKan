<template>
  <div class="target-track-data__box-component">
    <h2 class="target-track-data__title">{{ getName }}</h2>
    <p class="target-track-data__artist">{{ getArtistName }}</p>
    <p class="target-track-data__date">{{ getReleaseDate }}</p>
  </div>
</template>

<script>
import { isNil, isEmpty, pathOr } from "ramda";

export default {
  name: "TargetTrackData",
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  computed: {
    getName: function() {
      return String(this.track.name);
    },
    getArtist: function() {
      if (isNil(this.track.artists) || isEmpty(this.track.artists)) {
        return {};
      }
      0;
      return this.track.artists[0];
    },
    getArtistName: function() {
      const artist = this.getArtist();
      return String(artist.name);
    },
    getReleaseDate: function() {
      return pathOr("", ["album", "release_date"], this.track);
    }
  }
};
</script>

<style lang="scss">
.target-track-data {
  &__box-component {
    width: 100%;
  }
}
</style>
