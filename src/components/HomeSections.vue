<!--
  *
  = Home Sections
  = Includes all the Home Sections
  *
-->

<template>
  <div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Reviews />
  </div>
</template>

<script>
import Section0 from "@/components/organisms/HowItWorks.vue";
import Section1 from "@/components/sections/Section1.vue";
import Section2 from "@/components/sections/Section2.vue";
import Section3 from "@/components/sections/Section3.vue";

import Reviews from "@/components/organisms/Reviews.vue";

export default {
  components: {
    Section0,
    Section1,
    Section2,
    Section3,
    Reviews
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
  }
  .section-title {
    font-weight: 400;
    font-size: 64px;
    letter-spacing: -0.035em;
    color: $title-color;
    margin: 0;
    line-height: 1.1;
  }
  .section-sub {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.015em;
    color: $p-color;
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
  .section-category {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    color: #c1cad6;
    margin-bottom: 10px;
    display: inline-block;
  }
}

.section-features {
  hr {
    width: 100px;
    margin: 0;
    margin: 30px 0;
    background-color: #ddd;
    border: none;
    border-bottom: 2px solid #d1d7e4;
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
      color: #5b6987;
      letter-spacing: -0.015em;
    }
  }
}
</style>
