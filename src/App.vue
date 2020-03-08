<template>
  <section class="app__box-component">
    <router-view />
  </section>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

.app__box-component {
  @include background-image("./assets/background_home.jpg");
}
</style>
