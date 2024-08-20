// import { component } from "vue/types/umd";
import AboutUs from "../views/AboutUs.vue";
import HomeProduct from "../views/HomeProduct.vue";

export let routes = [
  {path:"/", component:HomeProduct},
  
  {path:"/about", component: AboutUs}
]
// import { createRouter, createWebHistory } from "vue-router";
// import { createRouter ,createWebHistory } from "vue-router";

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes: [
//     { path: "/aboutUs", component: AboutUs },
//     { path: "/", component: HomeProduct },
//   ],
// });
// export default router;
