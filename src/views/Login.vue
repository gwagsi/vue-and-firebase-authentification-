<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            :class="{ 'signup-form': !showLoginForm }"
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <form v-if="showLoginForm" @submit.prevent>
              <login-card header-color="primary">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model.trim="loginForm.email" type="email" id="email"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model.trim="loginForm.password" id="password"></md-input>
                </md-field>
                <md-button slot="footer" @click="login()" class="md-simple md-primary md-lg">Login</md-button>
              </login-card>
              <md-button class="md-primary md-round md-lg">Forgot Password</md-button>
              <md-button
                @click="toggleForm()"
                class="md-rounded-pill md-round md-primary md-lg"
              >Register</md-button>
            </form>
            <form v-else @submit.prevent>
              <login-card header-color="primary">
                <h4 slot="title" class="card-title">Register</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>First Name...</label>
                  <md-input v-model.trim="signupForm.name"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model.trim="signupForm.email" type="email"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model.trim="signupForm.password"></md-input>
                </md-field>
                <md-button
                  slot="footer"
                  @click="signup()"
                  class="md-simple md-primary md-lg"
                >Get Started</md-button>
              </login-card>

              <br />
              <md-button class="md-primary md-round md-lg">Forgot Password</md-button>
              <md-button
                @click="toggleForm()"
                class="md-rounded-pill md-round md-primary md-lg"
              >Login</md-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import firebase from "../firebaseConfig";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        email: "",
        password: ""
      },
      showLoginForm: true,
      showPasswordReset: false
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name
      });
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/login.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
