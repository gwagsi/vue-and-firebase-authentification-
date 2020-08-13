<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div v-if="!authenticated">
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
                    @click="facebookAuth"
                    class="md-just-icon md-simple md-white"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </md-button>
                  <md-button
                    slot="buttons"
                    @click="twitterAuth"
                    class="md-just-icon md-simple md-white"
                  >
                    <i class="fab fa-twitter"></i>
                  </md-button>
                  <md-button
                    slot="buttons"
                    class="md-just-icon md-simple md-white"
                    @click="googleAuth"
                  >
                    <i class="fab fa-google-plus-g"></i>
                  </md-button>
                  <p slot="description" class="description">Or Be Classical</p>
                  <md-field class="md-form-group" slot="inputs">
                    <md-icon>email</md-icon>
                    <label>Email...</label>
                    <md-input
                      v-model.trim="loginForm.email"
                      type="text"
                      placeholder="you@email.com"
                      id="email1"
                    ></md-input>
                  </md-field>
                  <md-field class="md-form-group" slot="inputs">
                    <md-icon>lock_outline</md-icon>
                    <label>Password...</label>
                    <md-input
                      v-model.trim="loginForm.password"
                      type="password"
                      placeholder="******"
                      id="password1"
                    ></md-input>
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
                    @click="facebookAuth"
                    class="md-just-icon md-simple md-white"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </md-button>
                  <md-button
                    slot="buttons"
                    @click="twitterAuth"
                    class="md-just-icon md-simple md-white"
                  >
                    <i class="fab fa-twitter"></i>
                  </md-button>
                  <md-button
                    slot="buttons"
                    class="md-just-icon md-simple md-white"
                    @click="googleAuth"
                  >
                    <i class="fab fa-google-plus-g"></i>
                  </md-button>
                  <p slot="description" class="description">Or Be Classical</p>
                  <md-field class="md-form-group" slot="inputs">
                    <md-icon>face</md-icon>
                    <label>First Name...</label>
                    <md-input
                      v-model.trim="signupForm.name"
                      type="text"
                      placeholder="Input Your Name"
                      id="name"
                    ></md-input>
                  </md-field>
                  <md-field class="md-form-group" slot="inputs">
                    <md-icon>email</md-icon>
                    <label>Email...</label>
                    <md-input
                      v-model.trim="signupForm.email"
                      type="text"
                      placeholder="you@email.com"
                      id="email2"
                    ></md-input>
                  </md-field>
                  <md-field class="md-form-group" slot="inputs">
                    <md-icon>lock_outline</md-icon>
                    <label>Password...</label>
                    <md-input
                      v-model.trim="signupForm.password"
                      type="password"
                      placeholder="min 6 characters"
                      id="password2"
                    ></md-input>
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
        <div v-else>You are loggedIn as {{firstName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import * as firebase from "firebase/app";
import "firebase/auth";

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
      showPasswordReset: false,
      user: {
        loggedIn: false,
        data: {}
      }
    };
  },

  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(
          user => {
            this.$router.replace("/profile");
          },
          error => {
            alert(error.message);
          }
        );
    },
    // login() {
    //   Firebase.auth()
    //     .signInWithEmailAndPassword(
    //       this.loginForm.email,
    //       this.loginForm.password
    //     )
    //     .then(data => {
    //       data.user
    //         .updateProfile({
    //           displayName: this.form.name
    //         })
    //         .then(() => {});
    //     })
    //     .catch(err => {
    //       this.error = err.message;
    //     });
    // },
    signup: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.signupForm.email,
          this.signupForm.password
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        })
        .then(
          user => {
            this.$router.replace("profile");
          },
          error => {
            alert(error.message);
          }
        );
    },
    googleAuth() {
      Firebase.googleAuth();
    },
    facebookAuth() {
      Firebase.facebookAuth();
    },
    twitterAuth() {
      Firebase.twitterAuth();
    },
    logout() {
      Firebase.logout();
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
    },
    authenticated() {
      return this.user.loggedIn;
    },
    firstName() {
      if (this.user.data.displayName) {
        return this.user.data.displayName.split(" ")[0];
      }
      return null;
    }
  }
};
</script>

<style lang="css"></style>
