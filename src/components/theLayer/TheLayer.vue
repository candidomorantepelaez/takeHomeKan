<template>
  <section class="the-layer__box-component" v-on:click="onClose"></section>
</template>

<script>
export default {
  name: "TheLayer",
  methods: {
    onClose: function() {
      this.$store.dispatch("closeSidebar");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-layer {
  &__box-component {
    width: 100%;
    height: 100vh;
    background-color: rgba(29, 29, 29, 0.9);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
