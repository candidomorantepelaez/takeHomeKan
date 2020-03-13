<template>
  <section class="home__box-component">
    <TheSidebar />
    <TheSearchBar />
    <TheSection title="Albums" v-bind:count="getAlbums.length">
      <TheTarget v-for="album in getAlbums" :key="album.id" v-bind:image="getImage(album)">
        <TargetAlbumData v-bind:album="album" />
      </TheTarget>
    </TheSection>
    <TheSection title="Artists" v-bind:count="getArtists.length">
      <TheTarget v-for="artist in getArtists" :key="artist.id" v-bind:image="getImage(artist)">
        <TargetArtistData v-bind:artist="artist" />
      </TheTarget>
    </TheSection>
    <TheSection title="Playlists" v-bind:count="getPlaylists.length">
      <TheTarget
        v-for="playlist in getPlaylists"
        :key="playlist.id"
        v-bind:image="getImage(playlist)"
      >
        <TargetPlaylistData v-bind:playlist="playlist" />
      </TheTarget>
    </TheSection>
    <TheSection title="Tracks" v-bind:count="getTracks.length">
      <TheTarget v-for="track in getTracks" :key="track.id" v-bind:image="getImage(track.album)">
        <TargetTrackData v-bind:track="track" />
      </TheTarget>
    </TheSection>
  </section>
</template>

<script>
import TheSearchBar from "@/components/theSearchBar/TheSearchBar";
import TheSection from "@/components/sections/TheSection";
import TheTarget from "@/components/targets/TheTarget";
import TargetAlbumData from "@/components/targets/TargetAlbumData";
import TargetTrackData from "@/components/targets/TargetTrackData";
import TargetPlaylistData from "@/components/targets/TargetPlaylistData";
import TargetArtistData from "@/components/targets/TargetArtistData";
import TheSidebar from "@/components/sidebars/TheSidebar";

export default {
  name: "Home",
  components: {
    TheSearchBar,
    TheSection,
    TheTarget,
    TargetAlbumData,
    TargetTrackData,
    TargetPlaylistData,
    TargetArtistData,
    TheSidebar
  },
  data: function() {
    return {};
  },
  computed: {
    getAlbums() {
      return this.$store.getters.getAlbums;
    },
    getArtists() {
      return this.$store.getters.getArtists;
    },
    getPlaylists() {
      return this.$store.getters.getPlaylists;
    },
    getTracks() {
      return this.$store.getters.getTracks;
    }
  },
  methods: {
    getImage: function(object) {
      if (object && object.images && object.images[0]) {
        return object.images[0].url;
      }
      return "";
    }
  }
};
</script>

<style lang="scss">
.home {
  &__box-component {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
  }
  &__box-results {
    width: 100%;
    display: inline-flex;
    box-sizing: border-box;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
  }
}
</style>
