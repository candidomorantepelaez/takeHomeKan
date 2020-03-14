<template>
  <div class="the-primary-button__box-button">
    <button @click="onClick" class="the-primary-button__button">{{ $t(label) }}</button>
  </div>
</template>

<script>
export default {
  name: "ThePrimaryButton",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick: function() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-primary-button {
  &__box-button {
    @include basic-box;
    width: 100%;
  }

  &__button {
    @include primary-button;
    &:hover {
      @include primary-button-hover;
    }
  }
}
</style>
