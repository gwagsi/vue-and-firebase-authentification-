<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">LEARNING PACK.</h1>
            <h4>Making you better at speaking, listenning and writing english.</h4>
            <br />
            <md-button href="/#/login" class="md-primary md-lg" target="_blank">
              <i class="fas fa-fingerprint"></i> Get Started
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">What Is Learning Pack?</h2>
              <h4 class="description">
                Learning Pack is the one of the best online English school where
                you can take English conversation lessons from your computer,
                smartphone or tablet with your own service anytime, anywhere .
              </h4>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <img src="https://img.icons8.com/nolan/128/clock.png" />
                  </div>
                  <h4 class="info-title">24hrs Online Tutoring</h4>
                  <p>Find a tutor Whenever and wherever</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <img src="https://img.icons8.com/color/128/000000/talk-skin-type-7.png" />
                  </div>
                  <h4 class="info-title">Native And Non-Native Tutors</h4>
                  <p>
                    Our Tutors are experienced individuals from over the world
                    who are ready to help you with you english
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <img src="https://img.icons8.com/color/128/000000/exam.png" />
                  </div>
                  <h4 class="info-title">Test Prep</h4>
                  <p>Preparing for a test?, don't boder we got you covered.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <img src="https://img.icons8.com/doodle/128/000000/books.png" />
                  </div>
                  <h4 class="info-title">Free Learning Materials</h4>
                  <p>
                    From Business English to TOEFL to Conversation, there’s
                    something for everyone
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <img src="https://img.icons8.com/cute-clipart/128/000000/price-tag-euro.png" />
                  </div>
                  <h4 class="info-title">Reasonable Prices</h4>
                  <p>25 minute classes at affordable prices</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <img src="https://img.icons8.com/color/128/000000/free-shipping.png" />
                  </div>
                  <h4 class="info-title">Free Trial</h4>
                  <p>Get a free trial to taste our services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Get All These Benefits Starting At $33/month!</h2>
          <div class="md-size-50 md-small-size-70 md-xsmall-size-100 fa-3x">
            <md-button href="/singin" class="md-primary md-lg" target>
              <i class="fas fa-spinner fa-spin"></i> Get Started
            </md-button>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
            <h2 class="title text-center">We have Learning Materials for Every Skill Level!</h2>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover md-solid>
                      <md-card-media md-ratio="1:1">
                        <img :src="img1" alt="img1" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">For Beginners</span>
                          <span
                            class="md-subhead"
                          >Basic conversation, grammar, vocabulary practice. Lessons for those just starting to learn!</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover md-solid>
                      <md-card-media md-ratio="1:1">
                        <img :src="img2" alt="img2" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">For Kids</span>
                          <span
                            class="md-subhead"
                          >Alphabet, Let’s Go ... Popular English materials for kids</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover>
                      <md-card-media md-ratio="1:1">
                        <img :src="img3" alt="img3" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">Business</span>
                          <span class="md-subhead">Practice useful English for office workers</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover md-solid>
                      <md-card-media md-ratio="1:1">
                        <img :src="img4" alt="img4" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">Speaking Test</span>
                          <span
                            class="md-subhead"
                          >Familiarize yourself with TOEIC Speaking, TOEFL Speaking test</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover md-solid>
                      <md-card-media md-ratio="1:1">
                        <img :src="img5" alt="img5" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">TRAVEL AND CULTURE</span>
                          <span class="md-subhead">Learn phrases you will need when traveling abroad</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <md-card md-with-hover>
                    <md-card-media-cover>
                      <md-card-media md-ratio="1:1">
                        <img :src="img6" alt="img6" />
                      </md-card-media>

                      <md-card-area>
                        <md-card-header>
                          <span class="md-title">DISCUSSION</span>
                          <span
                            class="md-subhead"
                          >Perfect your english while discussing with a tutor</span>
                        </md-card-header>

                        <md-card-actions>
                          <md-button href="/#/login" target>Learn More</md-button>
                        </md-card-actions>
                      </md-card-area>
                    </md-card-media-cover>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-size-50 md-small-size-70 md-xsmall-size-100 fa-3x text-center">
        <md-button href="/singin" class="md-primary md-lg" target>GET A FREE TRIAL LESSON</md-button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  name: "MediaCover",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg1.jpg")
    },
    img1: {
      type: String,
      default: require("@/assets/img/home/img1.jpg")
    },
    img2: {
      type: String,
      default: require("@/assets/img/home/img2.jpg")
    },
    img3: {
      type: String,
      default: require("@/assets/img/home/img3.jpg")
    },
    img4: {
      type: String,
      default: require("@/assets/img/home/img4.jpg")
    },
    img5: {
      type: String,
      default: require("@/assets/img/home/img5.jpg")
    },
    img6: {
      type: String,
      default: require("@/assets/img/home/img6.jpg")
    }
  },

  data() {
    return {
      name: null,
      email: null,
      message: null
    };
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

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
