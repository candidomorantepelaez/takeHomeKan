<template>
  <section class="the-section__box-component">
    <div class="the-section__box-info">
      <div class="the-section__box-title">
        <p class="the-section__title">{{ $t(title) }}</p>
      </div>
      <div class="the-section__box-count">
        <p class="the-section__count">{{ count }} {{ $t("app.section.text.result") }}</p>
      </div>
    </div>
    <div class="the-section__box-data">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSection",
  props: {
    title: String,
    count: Number,
    children: Array
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-section {
  &__box-component {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 2rem;
    width: 50%;
  }
  &__box-info {
    width: 100%;
    display: inline-flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    color: $on-background-color;
    padding: 0 2rem;
    border-bottom: 1px solid $primary-color;
  }
  &__box-data {
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
