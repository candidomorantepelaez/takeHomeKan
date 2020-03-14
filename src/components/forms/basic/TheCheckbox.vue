<template>
  <div class="the-checkbox__box-component">
    <label class="the-checkbox__label" :for="name">
      {{ $t(label) }}
      <font-awesome-icon v-if="value === true" :icon="['fas', 'check']" />
    </label>
    <input
      class="the-checkbox__checkbox"
      type="checkbox"
      :id="name"
      :name="name"
      :checked="value"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: "TheCheckbox",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onChange: function(event) {
      this.$emit("input", event.target.checked);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-checkbox {
  &__box-component {
    @include basic-box;
    width: 100%;
  }
  &__label {
    @include primary-button;
    width: 100%;
    &:hover {
      @include primary-button-hover;
    }
  }
  &__checkbox {
    display: none;
  }
}
</style>
