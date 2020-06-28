<!--
  *
  = Headline Component
  = Includes headline component including @Navigation component.
  *
-->

<template>
  <section class="headline">
    <div class="overlay"></div>

    <navigation />

    <div class="container xl-middle">
      <div class="wrap wrap-headline xl-flexbox xl-center">
        <div class="col xl-1-1">
          <h1>
            A big step up
            <br />for your project
          </h1>

          <p>
            Revisionary makes it super easy to invite your clients and teammates
            <br />to leave useful comments directly on your live websites.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from "~/components/organisms/Navigation.vue";
import IconPlay from "~/components/atoms/icon-play.vue";
import IconArrow from "~/components/atoms/icon-arrow-right.vue";

export default {
  components: {
    Navigation,
    IconPlay,
    IconArrow
  }
};
</script>

<style lang="scss" scoped>
section.headline {
  position: relative;
  background-color: #010610;
  .wrap-headline {
    padding: 120px 0;
  }
  & > .container {
    position: relative;
  }
  h1 {
    font-size: 94px;
    font-weight: 700;
    margin: 0 0 20px 0;
    line-height: 1;
    color: #fff;
    letter-spacing: -0.0275em;
  }
  p {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.004em;
  }
  video {
    width: 100%;
    border-radius: 2px;
    object-fit: cover;
  }
  .introduction {
    padding: 80px 0 200px 0;
    p {
      font-size: 28px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    a {
      display: inline-block;
      margin: 31px auto 0;
      font-size: 23px;
      font-weight: 500;
      color: #66bbff;
      text-align: center;
      transition: 0.3s all;
      text-decoration: none;
      svg {
        fill: #66bbff;
        margin-left: 5px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
