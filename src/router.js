import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Header2 from "./layout/Header2.vue";
import Home from "./views/Home.vue";
import Guide from "./views/Guide.vue";
import About from "./views/About.vue";
import Faq from "./views/Faq.vue";
import HowTo from "./views/HowTo.vue";
import Price from "./views/Price.vue";
import Signup from "./views/Signup.vue";
import TeacherSignup from "./views/TeacherSignup.vue";
import Tutor from "./views/Tutor.vue";
import { auth } from "./firebaseConfig";

Vue.use(Router);

const routes = [
  {
    path: "/index",
    name: "index",
    components: { default: Index, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/",
    name: "home",
    components: { default: Home, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/about",
    name: "about",
    components: { default: About, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/faq",
    name: "faq",
    components: { default: Faq, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/guide",
    name: "guide",
    components: { default: Guide, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/howto",
    name: "howto",
    components: { default: HowTo, header: Header2, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/signup",
    name: "signup",
    components: { default: Signup, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/teacher-signup",
    name: "teacher-signup",
    components: {
      default: TeacherSignup,
      header: MainNavbar,
      footer: MainFooter,
    },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/tutor",
    name: "tutor",
    components: { default: Tutor, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/price",
    name: "price",
    components: { default: Price, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/landing",
    name: "landing",
    components: { default: Landing, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
  },
  {
    path: "/login",
    name: "login",
    components: { default: Login, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
    },
  },
  {
    path: "/profile",
    name: "profile",
    components: { default: Profile, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" },
    },
    meta: {
      requiresAuth: true,
    },
  },
];
const router = new Router({
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});
scrollBehavior: (to) => {
  if (to.hash) {
    return { selector: to.hash };
  } else {
    return { x: 0, y: 0 };
  }
};
export default router;
