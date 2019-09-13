import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css";
import "./assets/fonts/iconic/css/material-design-iconic-font.min.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/animsition/css/animsition.min.css";
import "./assets/css/util.min.css";
import "./assets/css/main.css";



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
