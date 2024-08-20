import Vue from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import VueRouter from "vue-router";
import { routes } from "./router/index.js";
Vue.use(VueRouter);
// Vue.config.productionTip = false;
export const eventBus = new Vue();
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
