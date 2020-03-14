<template>
  <div class="the-search-input__box-field">
    <label class="the-search-input__label" :for="name">{{ $t(label) }}</label>
    <input
      class="the-search-input__input"
      :placeholder="$t('app.searchbar.search.placeholder')"
      type="search"
      :id="name"
      :name="name"
      :value="value"
      @input="onChange"
      autofocus
    />
  </div>
</template>

<script>
export default {
  name: "TheSearchInput",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onChange: function(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-search-input {
  &__box-field {
    @include basic-box;
    width: 100%;
    margin: 1rem 0;
  }
  &__label {
    @include basic-box;
    width: 100%;
    margin-bottom: 1rem;
  }
  &__input {
    @include basic-box;
    width: 100%;
    border: none;
    border-bottom: 1px solid $primary-color;
    padding: 0.5rem;
    border-radius: 4px 4px 0 0;
    background-color: $surface-color;
    color: $on-surface-color;
  }
}
</style>
