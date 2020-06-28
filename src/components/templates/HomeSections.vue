<!--
  *
  = Home Sections
  = Includes all the Home Sections
  *
-->

<template>
  <div>
    <FeaturesSided />
    <Reviews />
    <CTA />
    <Footer />
  </div>
</template>

<script>
import FeaturesSided from "@/components/sections/home/FeaturesSided.vue";
import Reviews from "@/components/sections/home/Reviews.vue";
import CTA from "@/components/sections/home/CTA.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: {
    FeaturesSided,
    Reviews,
    CTA,
    Footer
  }
};
</script>

<style lang="scss">
.home-section {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  .col-relative {
    position: relative;
  }
}
.section-content {
  &.left {
    padding-left: 100px;
  }
  &.right {
    padding-right: 100px;
  }
  .section-title {
    font-weight: 600;
    font-size: 70px;
    letter-spacing: -0.0275em;
    color: #01060f;
    margin: 0;
    line-height: 1.05;
  }
  .section-sub {
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: rgba(1, 6, 15, 0.7);
    margin-top: 15px;
  }
  .section-cat {
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: rgba(1, 6, 15, 0.7);
  }
  .section-more {
    display: inline-block;
    margin: 20px auto 0;
    font-size: 23px;
    font-weight: 500;
    color: #026fc9;
    text-align: center;
    transition: 0.3s all;
    text-decoration: none;
    svg {
      fill: #026fc9;
    }
    &:hover {
      opacity: 0.6;
    }
  }
  &.white {
    .section-title {
      color: #fff;
    }
    .section-sub {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.section-features {
  margin-top: 10px;
  hr {
    width: 100px;
    margin: 0;
    margin: 30px 0;
    background-color: #ddd;
    border: none;
    border-bottom: 2px solid #d1d7e4;
    display: none;
  }
  .feature {
    display: inline-block;
    width: 100%;
    margin: 4px 0;
    span.icon-box {
      display: inline-block;
      background-color: #e4e6ea;
      width: 12px;
      height: 12px;
      line-height: 40px;
      border-radius: 2px;
      text-align: center;
      margin-right: 10px;
    }
    span.feature-title {
      font-size: 20px;
      color: #7a8492;
      letter-spacing: -0.015em;
    }
  }
}
</style>
