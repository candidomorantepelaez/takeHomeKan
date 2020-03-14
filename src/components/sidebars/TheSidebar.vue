<template>
  <section
    v-bind:class="{
      'the-sidebar__box-component': true,
      'the-sidebar__box-component--open-sidebar': showSidebar === true
    }"
  >
    <header class="the-sidebar__box-header">
      <h2 class="the-sidebar__title">{{ $t("app.search.filter.title") }}</h2>
    </header>
    <section class="the-sidebar__box-content">
      <TheSearchInput v-model="q" label="app.search.filter.search" name="q" />
      <p
        v-if="qError"
        class="the-sidebar__validation"
      >{{ $t("app.forms.validations.required", { field: $t("app.search.filter.search") }) }}</p>
      <TheTypeFilter v-model="type" label="app.search.filter.type" />
      <p
        v-if="typeError"
        class="the-sidebar__validation"
      >{{ $t("app.forms.validations.required", { field: $t("app.search.filter.type") }) }}</p>
    </section>
    <footer class="the-sidebar__box-controls">
      <ThePrimaryButton label="app.action.search" @onClick="sendSearch" />
    </footer>
  </section>
</template>

<script>
import TheTypeFilter from "@/components/forms/sets/TheTypeFilter";
import TheSearchInput from "@/components/forms/basic/TheSearchInput";
import ThePrimaryButton from "@/components/forms/basic/ThePrimaryButton";
import { isNil, isEmpty } from "ramda";

export default {
  name: "TheSidebar",
  components: {
    TheTypeFilter,
    TheSearchInput,
    ThePrimaryButton
  },
  data: function() {
    return {
      type: "album,artist,playlist,track",
      q: "",
      qError: false,
      typeError: false
    };
  },
  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    }
  },
  methods: {
    sendSearch: function() {
      const self = this;
      this.qError = isNil(self.q) || isEmpty(self.q);
      this.typeError = isNil(self.type) || isEmpty(self.type);
      if (this.qError === true || this.typeError === true) {
        return;
      }
      self.$store.dispatch("search", {
        q: self.q,
        limit: 3,
        type: self.type
      });
      self.$store.dispatch("closeSidebar");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";

.the-sidebar {
  &__box-component {
    display: none;
    width: 0%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    top: 0;
    right: 0;
    transition-property: width;
    transition-duration: 100ms;
    transition-delay: 50ms;
    &--open-sidebar {
      display: inline-flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: space-between;
      width: 40%;
      transition-property: display;
      transition-duration: 100ms;
      transition-delay: 50ms;
    }
  }
  &__box-header {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    border-bottom: 1px solid $primary-color;
  }
  &__title {
    color: $on-surface-color;
    @include subtitle-1;
  }
  &__box-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    color: $on-surface-color;
  }
  &__box-controls {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
  }
  &__validation {
    @include overline;
    color: $error-color;
  }
}
</style>
