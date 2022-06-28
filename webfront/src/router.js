import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/ListProvince")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;