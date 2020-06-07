<!--
  *
  = Home Sections
  = Includes all the Home Sections
  *
-->

<template>

  <div>

    <Brands />

    <HowItWorks />

    <PinFeatures />

    <Features />

    <Collaboration />

  </div>

</template>

<script>

  import Brands from '~/components/organisms/Brands.vue'
  import HowItWorks from '~/components/organisms/HowItWorks.vue'
  import PinFeatures from '~/components/organisms/PinFeatures.vue'
  import Features from '~/components/organisms/Features.vue'
  import Collaboration from '~/components/organisms/Collaboration.vue'

	export default {
    components: {
      Brands,
      HowItWorks,
      PinFeatures,
      Features,
      Collaboration
    }
	};

</script>

<style lang="scss">

.home-section {
  position: relative;
  .col-relative {
    position: relative;
  }
  figure {
    box-shadow: 0px 10px 50px rgba(3,27,78,0.1);
    border-radius: 16px;
    img {
      border-radius: 16px;
      max-width: none;
    }
    &.full {
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      //width: 100%;
      &.float-right {
        left: 0;
      }
      &.float-left {
        right: 0;
      }
      &.pin {
        box-shadow: none;
        right: -90px;
        top: 0;
      }
    }
    &.section-vector {
      box-shadow: none;
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      right: 100px;
    }
  }
}

.section-content {
  .section-title {
    font-weight: 500;
    font-size: 55px;
    letter-spacing: -0.03em;
    color: $title-color;
    margin: 0;
    line-height: 1.1;
  }
  .section-sub {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.03em;
    color: $p-color;
    margin-top: 15px;
  }
  &.white {
    .section-title {
      color: #FFF;
    }
    .section-sub {
      color: rgba(255,255,255,0.8);
    }
  }
}

</style>
