<template>
  <section
    v-bind:class="{
      'app__box-component': true,
      'app__box-component--open-sidebar': showSidebar === true
    }"
  >
    <TheLayer v-if="showSidebar" />
    <router-view />
  </section>
</template>

<script>
import TheLayer from "@/components/theLayer/TheLayer";

export default {
  components: {
    TheLayer
  },
  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/mixins.scss";

.app {
  &__box-component {
    @include background-image("./assets/background_home.jpg");
    &--open-sidebar {
      overflow: hidden;
      height: 100vh;
    }
  }
}
</style>
