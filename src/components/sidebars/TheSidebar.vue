<template>
  <section
    v-bind:class="{
      'the-sidebar__box-component': true,
      'the-sidebar__box-component--open-sidebar': showSidebar === true
    }"
  >
    <header class="the-sidebar__box-header">
      <h2 class="the-sidebar__title">{{ $t("app.search.filter.title") }}</h2>
    </header>
    <section class="the-sidebar__box-content">
      <label for="q">Que buscar:</label>
      <input type="search" id="q" name="q" v-model="q" />
      <fieldset>
        <legend>Donde buscar:</legend>
        <label for="artists">{{ $t("app.section.artist.title") }}</label>
        <input type="checkbox" id="artists" name="artists" v-model="artists" />
        <label for="tracks">{{ $t("app.section.tracks.title") }}</label>
        <input type="checkbox" id="tracks" name="tracks" v-model="tracks" />
        <label for="albums">{{ $t("app.section.albums.title") }}</label>
        <input type="checkbox" id="albums" name="albums" v-model="albums" />
        <label for="playlists">{{ $t("app.section.playlists.title") }}</label>
        <input type="checkbox" id="playlists" name="playlists" v-model="playlists" />
      </fieldset>
    </section>
    <footer class="the-sidebar__box-controls"></footer>
  </section>
</template>

<script>
export default {
  name: "TheSidebar",
  data: function() {
    return {
      artists: true,
      tracks: true,
      albums: true,
      playlists: true,
      q: ""
    };
  },
  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    }
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
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-sidebar {
  &__box-component {
    display: inline-flex;
    width: 0%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    top: 0;
    right: 0;
    transition-property: width;
    transition-duration: 100ms;
    transition-delay: 50ms;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-between;
    &--open-sidebar {
      width: 40%;
      transition-property: width;
      transition-duration: 100ms;
      transition-delay: 50ms;
    }
  }
  &__box-header {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    border-bottom: 1px solid $primary-color;
  }
  &__title {
    color: $on-surface-color;
    @include subtitle-1;
  }
  &__box-content {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    color: $on-surface-color;
  }
  &__box-controls {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
  }
}
</style>
