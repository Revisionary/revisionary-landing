<!--
  *
  = Home Sections
  = Includes all the Home Sections
  *
-->

<template>
  <div>
    <FeaturesSided />
    <FeaturesTabs />
    <Reviews />
    <CTA />
    <Footer />
  </div>
</template>

<script>
import FeaturesSided from "@/components/sections/home/FeaturesSided.vue";
import FeaturesTabs from "@/components/sections/home/FeaturesTabs.vue";
import Reviews from "@/components/sections/home/Reviews.vue";
import CTA from "@/components/sections/home/CTA.vue"; 
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: {
    FeaturesSided,
    FeaturesTabs,
    Reviews,
    CTA,
    Footer,
  }
};
</script>

<style lang="scss">
.home-section {
  position: relative;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  .col-relative {
    position: relative;
  }
}
.section-content {
  &.left {
    padding-left: 100px;
  }
  .section-icon {
    display: inline-block;
    background-color: #e7f0f9;
    width: 70px;
    height: 70px;
    line-height: 65px;
    border-radius: 21px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 20px;
    svg {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      stroke: #047def;
    }
    &.blue {
    }
    &.orange {
      background-color: #f7e6dc;
      svg {
        stroke: #e6903a;
      }
    }
    &.green {
      background-color: #def7dc;
      svg {
        stroke: #8ee63a;
      }
    }
    &.red {
      background-color: #f9e7e7;
      svg {
        stroke: #e43d3d;
      }
    }
    &.white {
      background-color: rgba(255,255,255,0.15);
      svg {
        stroke: #FFF;
      }
    }
  }
  .section-title {
    font-weight: 500;
    font-size: 64px;
    letter-spacing: -0.045em;
    color: $title-color;
    margin: 0;
    line-height: 1.1;
  }
  .section-sub {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.015em;
    color: #7a8492;
    margin-top: 12px;
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
