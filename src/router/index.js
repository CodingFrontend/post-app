import VueRouter from "vue-router";

import Home from "/src/views/Home";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: { name: "Home" },
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { layout: "AppLayout" },
    },
  ],
  mode: "hash",
});

export default router;
