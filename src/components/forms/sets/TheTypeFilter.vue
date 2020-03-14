<template>
  <fieldset class="the-type-filter__box-set">
    <legend class="the-type-filter__legend">{{ $t(label) }}</legend>
    <div class="the-type-filter__input">
      <TheCheckbox
        :value="data.artist"
        label="app.section.artist.title"
        name="artists"
        @input="value => onChange('artist', value)"
      />
    </div>
    <div class="the-type-filter__input">
      <TheCheckbox
        :value="data.track"
        label="app.section.tracks.title"
        name="tracks"
        @input="value => onChange('track', value)"
      />
    </div>
    <div class="the-type-filter__input">
      <TheCheckbox
        :value="data.album"
        label="app.section.albums.title"
        name="albums"
        @input="value => onChange('album', value)"
      />
    </div>
    <div class="the-type-filter__input">
      <TheCheckbox
        :value="data.playlist"
        label="app.section.playlists.title"
        name="playlists"
        @input="value => onChange('playlist', value)"
      />
    </div>
  </fieldset>
</template>

<script>
import TheCheckbox from "@/components/forms/basic/TheCheckbox";
import { filter, isNil, join, merge, objOf, mapObjIndexed } from "ramda";

export default {
  name: "TheTypeFilter",
  components: {
    TheCheckbox
  },
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    data: function() {
      return {
        artist: this.value.includes("artist"),
        track: this.value.includes("track"),
        album: this.value.includes("album"),
        playlist: this.value.includes("playlist")
      };
    }
  },
  methods: {
    generate: function(key, value) {
      const newValue = mapObjIndexed(
        (value, key) => (value === true ? key : null),
        merge(this.data, objOf(key)(value))
      );
      const state = [
        newValue.album,
        newValue.artist,
        newValue.playlist,
        newValue.track
      ];
      const values = filter(obj => !isNil(obj), state);
      return join(",", values);
    },
    onChange: function(key, value) {
      const newValue = this.generate(key, value);
      console.log(newValue);
      this.$emit("input", newValue);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-type-filter {
  &__box-set {
    @include basic-box;
    width: 100%;
    margin-top: 1rem;
  }
  &__legend {
    margin-bottom: 1rem;
  }
  &__input {
    @include basic-box;
    width: 50%;
    padding: 0 1rem 1rem 0;
  }
}
</style>
