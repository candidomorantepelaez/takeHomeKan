<template>
  <div class="target-album-data__box-component">
    <h2 class="target-album-data__title">{{ getName }}</h2>
    <p class="target-album-data__artist">{{ getNameArtist }}</p>
    <p class="target-album-data__date">{{ getReleaseDate }}</p>
  </div>
</template>

<script>
import { isNil, isEmpty } from "ramda";

export default {
  name: "TargetAlbumData",
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    getName: function() {
      return String(this.album.name);
    },
    getReleaseDate: function() {
      return String(this.album.release_date);
    },
    getArtist: function() {
      if (isNil(this.album.artists) || isEmpty(this.album.artists)) {
        return {};
      }
      return this.album.artists[0];
    },
    getNameArtist: function() {
      const artist = this.getArtist();
      return String(artist.name);
    }
  }
};
</script>

<style lang="scss">
.target-album-data {
  &__box-component {
    width: 100%;
  }
}
</style>
