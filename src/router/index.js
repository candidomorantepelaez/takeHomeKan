import Vue from "vue";
import VueRouter from "vue-router";
import extractParamsFromHash from "@/functions/extractParamsFromHash";
import Home from "@/views/Home.vue";
import Loged from "@/views/Loged.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/loged",
    name: "Loged",
    component: Loged,
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
