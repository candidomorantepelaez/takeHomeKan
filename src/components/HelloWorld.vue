<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a
      href="https://accounts.spotify.com/authorize?client_id=511bba20b6f34234bffa81820246a2bb&response_type=token&redirect_uri=http:%2F%2Flocalhost:8080%2Floged"
      rel="noopener"
      >login</a
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
