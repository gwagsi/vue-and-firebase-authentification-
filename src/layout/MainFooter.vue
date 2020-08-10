<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/#/">Learning Pack</a>
          </li>
          <li>
            <a href="/#/about">About Us</a>
          </li>
          <li>
            <a href="/#/blog">Blog</a>
          </li>
          <li>
            <a href="/#/tutor">Join Our Team</a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with
        <md-icon>favorite</md-icon>by
        <a href="https://www.feyins.com" target="_blank">FEYINS</a>
        And
        <a href="https://www.gwagsig.com" target="_blank">Gwagsi Glenn</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
