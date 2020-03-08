import Vue from "vue";
import VueRouter from "vue-router";
import extractParamsFromHash from "@/functions/extractParamsFromHash";
import Home from "@/views/Home.vue";
import Wellcome from "@/views/Wellcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "wellcome",
    component: Wellcome
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    props: route => {
      const props = extractParamsFromHash(route.hash);
      localStorage.setItem("at", props.access_token);
      localStorage.setItem("tt", props.token_type);
      localStorage.setItem("ei", props.expires_in);
      return {
        access_token: props.access_token,
        token_type: props.token_type,
        expires_in: props.expires_in
      };
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
