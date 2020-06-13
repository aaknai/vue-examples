import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Pag1 from "./Pag1.vue";
import Pag2 from "./Pag2.vue";
import * as bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrapGrid from "bootstrap/dist/css/bootstrap-grid.min.css";
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router: new VueRouter({
    routes: [
      {
        path: "/",
        component: Home
      },
      {
        path: "/pag1",
        component: Pag1
      },
      {
        path: "/pag2",
        component: Pag2
      }
    ]
  }),
  render: h => h(App)
});
