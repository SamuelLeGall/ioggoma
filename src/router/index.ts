import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HOME",
    redirect: {
      name: "MAIN_MENU",
    },
  },
  {
    path: "/mainMenu",
    name: "MAIN_MENU",
    component: () => import("@components/modules/Menu/MainMenu.vue"),
  },
  {
    path: "/HelloWorld",
    name: "HELLO_WORLD",
    component: () => import("@components/HelloWorld.vue"),
  },
  //catch 404
  {
    path: "/:catchAll(.*)",
    name: "NOTFOUND",
    component: () => import("@components/UIElements/Error/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
