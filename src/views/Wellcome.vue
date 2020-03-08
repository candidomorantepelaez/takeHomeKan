<template>
  <section class="wellcome__box-component">
    <div class="wellcome__box-title">
      <h1 class="wellcome__title">TakeHomeKan</h1>
      <p class="wellcome__subtitle">buscador de musica</p>
      <div class="wellcome__box-control">
        <a
          href="https://accounts.spotify.com/authorize?client_id=511bba20b6f34234bffa81820246a2bb&response_type=token&redirect_uri=http:%2F%2Flocalhost:8080%2Fhome"
          class="wellcome__enlace-control"
        >enter</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Wellcome"
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
