// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false,
};

Vue.mixin({
  data() {
    return {
      NavbarStore,
    };
  },
});
import * as firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
