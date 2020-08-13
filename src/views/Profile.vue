<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                </div>
                <div class="name">
                  <h3 class="title">{{user.data.displayName}}</h3>
                  <h6>{{user.data.email}}</h6>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-dribbble">
                    <i class="fab fa-dribbble"></i>
                  </md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-twitter">
                    <i class="fab fa-twitter"></i>
                  </md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-pinterest">
                    <i class="fab fa-pinterest"></i>
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
            <p>This page will contain basic infor about the student, pricing plan and links to the dashboard where he/she can book a lesson, pay for plans and talk to teachers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import { mapGetters } from "vuex";
export default {
  components: {},
  bodyClass: "profile-page",
  data() {
    return {};
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
