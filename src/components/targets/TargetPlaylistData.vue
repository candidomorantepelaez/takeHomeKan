<template>
  <div class="target-playlist-data__box-component">
    <h2 class="target-playlist-data__title">{{ getName }}</h2>
    <p class="target-playlist-data__artist">{{ getOwner }}</p>
    <p class="target-playlist-data__date">{{ getCountTracks }} {{$t("app.section.text.artist")}}</p>
  </div>
</template>

<script>
import { pathOr } from "ramda";

export default {
  name: "TargetPlayListData",
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  computed: {
    getName: function() {
      return String(this.playlist.name);
    },
    getOwner: function() {
      return pathOr("", ["owner", "id"], this.playlist);
    },
    getCountTracks: function() {
      return pathOr(0, ["tracks", "total"], this.playlist);
    }
  }
};
</script>

<style lang="scss">
.target-playlist-data {
  &__box-component {
    width: 100%;
  }
}
</style>
