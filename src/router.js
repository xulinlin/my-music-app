import Vue from "vue";
import Router from "vue-router";
import Find from "./views/Find/Find.vue";
import Friend from "./views/Friend/Friend.vue";
import Mine from "./views/Mine/Mine.vue";
import User from "./views/User/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Find",
      component: Find
    },
    {
      path: "/Friend",
      name: "Friend",
      component: Friend
    },
    {
      path: "/Mine",
      name: "Mine",
      component: Mine
    },
    {
      path: "/User",
      name: "User",
      component: User
    }
  ]
});
