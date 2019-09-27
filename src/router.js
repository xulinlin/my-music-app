import Vue from "vue";
import Router from "vue-router";
import Find from "./views/Find/Find.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Find",
      component: Find
    }
  ]
});
