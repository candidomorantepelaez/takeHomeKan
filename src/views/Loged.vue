<template>
  <div class="about">
    <h1>Logeado</h1>
    <p>Token: {{ access_token }}</p>
    <p>Type: {{ token_type }}</p>
    <p>Expires_in: {{ expires_in }}</p>
  </div>
</template>

<script>
import { getSearch } from "@/api/spotifyApi";

export default {
  name: "Loged",
  props: {
    access_token: {
      type: String,
      required: true
    },
    token_type: {
      type: String,
      required: true
    },
    expires_in: {
      type: String,
      required: true
    }
  },
  mounted() {
    getSearch();
  },
  data: function() {
    return {};
  }
};
</script>
