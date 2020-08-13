<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="name">
                  <h3 class="title"></h3>
                  <br />
                  <h2>Tutor info page Page: (content Neeeded)</h2>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-dribbble">
                    <i class="fab fa-facebook"></i>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import { mapGetters } from "vuex";
export default {
  bodyClass: "profile-page",
  data() {
    return {};
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bgg1.jpg")
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
</style>
