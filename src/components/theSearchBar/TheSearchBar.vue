<template>
  <section class="the-search-bar__box-component">
    <div class="the-search-bar__surface-box">
      <TheSearchBarDataBox />
      <TheSearchBarControlsBox />
    </div>
  </section>
</template>

<script>
import TheSearchBarDataBox from "@/components/theSearchBar/TheSearchBarDataBox";
import TheSearchBarControlsBox from "@/components/theSearchBar/TheSearchBarControlsBox";

export default {
  name: "TheSearchBar",
  components: {
    TheSearchBarDataBox,
    TheSearchBarControlsBox
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-search-bar {
  &__box-component {
    @include basic-box;
    width: 100%;
    min-height: 7rem;
    padding: 2rem;
  }
  &__surface-box {
    box-sizing: border-box;
    background-color: $surface-color;
    color: $on-surface-color;
    width: 100%;
    min-height: 3rem;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
    border-radius: 5px;
  }
}
</style>
