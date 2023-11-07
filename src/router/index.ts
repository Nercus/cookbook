import PageHome from "../pages/PageHome.vue";
import PageEditor from "../pages/PageEditor.vue";
import PageNotFound from "../pages/PageNotFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  { redirect: "/", path: "/home" },
  { path: "/", component: PageHome },
  { path: "/editor", component: PageEditor },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]




const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
