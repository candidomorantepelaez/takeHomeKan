<template>
  <section class="the-target__box-component">
    <div class="the-target__box-image">
      <img class="the-target__image" :src="image" />
    </div>
    <div class="the-target__box-data">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheTarget",
  props: {
    image: String
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-target {
  &__box-component {
    width: 20rem;
    height: 10rem;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    background-color: $surface-color;
    color: $on-surface-color;
    margin: 1rem;
    border-radius: 5px;
  }
  &__box-image {
    width: 8rem;
    height: 10rem;
    box-sizing: border-box;
    display: inline-block;
    padding: 1rem;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__box-data {
    width: 12rem;
    height: 10rem;
    box-sizing: border-box;
    display: inline-block;
    padding: 1rem;
  }
}
</style>
