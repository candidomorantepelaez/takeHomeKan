import Vue from "vue";
import VueRouter from "vue-router";
import extractParamsFromHash from "@/functions/extractParamsFromHash";
import Home from "@/views/Home.vue";
import Wellcome from "@/views/Wellcome.vue";
import {
  checkSessionData,
  saveSessionData,
  checkSessionDataParams
} from "@/sideEffects/sessionData";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "wellcome",
    component: Wellcome,
    beforeEnter: (to, from, next) => {
      if (checkSessionData()) {
        next("/home");
      } else {
        next();
      }
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const params = extractParamsFromHash(to.hash);
      const haveSessionDataParams = checkSessionDataParams(params);
      const haveSessionDataStored = checkSessionData();
      if (haveSessionDataParams === false && haveSessionDataStored === false) {
        next("/");
      } else {
        if (haveSessionDataParams === true) {
          saveSessionData(params);
        }
        return next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
