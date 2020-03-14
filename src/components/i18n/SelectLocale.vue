<template>
  <div class="select-locale__box-component">
    <select v-model="$root.$i18n.locale" class="select-locale__select-input">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectLocale",
  data() {
    return { langs: ["es", "en"] };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.select-locale {
  &__box-component {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  &__select-input {
    background: rgba(0, 0, 0, 1);
    border: none;
    color: $primary-color;
  }
  &__select-input:focus {
    outline: none;
    border: none;
  }
}
</style>
