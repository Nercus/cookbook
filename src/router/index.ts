import PageHome from "../pages/PageHome.vue";
import PageEditor from "../pages/PageEditor.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  { redirect: "home", path: "/" },
  { path: "/", component: PageHome },
  { path: "/editor", component: PageEditor },
]




const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
