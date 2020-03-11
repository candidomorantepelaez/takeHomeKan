<template>
  <div class="the-search-bar-data-box__box-component">
    <div class="the-search-bar-data-box__title-box">
      <p class="the-search-box-data-box__title">{{ $t("app.title") }}</p>
    </div>
    <div class="the-search-bar-data-box__icon-box">
      <p class="the-search-bar-data-box__icon">
        <font-awesome-icon :icon="['fas', 'redo']" />
      </p>
    </div>
    <div class="the-search-bar-data-box__info-box">
      <p class="the-search-bar-data-box__icon">Last search 16:45</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearchBarDataBox"
};
</script>

<style lang="scss">
.the-search-bar-data-box {
  &__box-component {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__icon-box {
    margin-left: 1rem;
    cursor: pointer;
  }
  &__info-box {
    margin-left: 1rem;
  }
}
</style>
