<template>
  <section class="wellcome__box-component">
    <div class="wellcome__box-title">
      <h1 class="wellcome__title">{{ $t("app.title") }}</h1>
      <p class="wellcome__subtitle">{{ $t("app.subtitle") }}</p>
      <div class="wellcome__box-control">
        <a v-bind:href="url" class="wellcome__enlace-control">{{
          $t("app.action.enter")
        }}</a>
      </div>
    </div>
  </section>
</template>

<script>
import { generateUrlAuthenticate } from "@/sideEffects/envData";

export default {
  name: "Wellcome",
  data: function() {
    return {
      url: generateUrlAuthenticate()
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.wellcome__box-title {
  position: absolute;
  top: 100px;
  left: 100px;
  color: $on-background-color;
}

.wellcome__title {
  @include title-1;
}

.wellcome__subtitle {
  @include title-3;
}

.wellcome__box-control {
  @include basic-box;
  margin-top: 10px;
}

.wellcome__enlace-control {
  @include primary-button;
}

.wellcome__enlace-control:hover {
  @include primary-button-hover;
}
</style>
