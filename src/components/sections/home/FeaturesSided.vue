<!--
  *
  = Pin Features Section Component
  = Includes Pin Features section component.
  *
-->

<template>
  <section id="features" class="home-section section--2">
    <div class="container xl-middle"
    >
      <div class="feature-wrapper wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
        <div class="col xl-6-12">
          <div class="section-content" data-aos="fade-right">
            <span class="section-icon">
              <IconPin />
            </span>
            <h2 class="section-title">
              Pin your
              <br />thoughts
            </h2>

            <p class="section-sub" data-aos-delay="100">
              You don't have to wait to see the changes you want on
              <br />a website until developers apply them for you.
              <br />Just do it yourself and see how does.
            </p>

            <div class="tabs">
              <ul class="nav nav-tabs">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title"> {{tab.title}}</div>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="col xl-6-12">
          <figure>
            <img src="/images/box5.png" alt />
          </figure>
        </div>
      </div>

      <div class="feature-wrapper wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
        <div class="col xl-6-12 aos-init">
          <figure>
            <img src="/images/box8.png" alt />
          </figure>
        </div>

        <div class="col xl-6-12" data-aos="fade-left"> 
          <div class="section-content left">
            <span class="section-icon orange">
              <IconSliders />
            </span>
            <h2 class="section-title">
              Visualize
              <br />your ideas
            </h2>

            <p class="section-sub">
              You don't have to wait to see the changes you want on
              a website until developers apply them for you.
              <br />Just do it yourself and see how does.
            </p>

            <div class="tabs">
              <ul class="nav nav-tabs">
                <li v-for="(tab, index) in tabs2" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">{{tab.title}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-wrapper wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
        <div class="col xl-6-12" data-aos="fade-right">
          <div class="section-content">
            <span class="section-icon green">
              <IconCopy />
            </span>
            <h2 class="section-title">
              Show the
              <br />difference
            </h2>

            <p class="section-sub">
              You don't have to wait to see the changes you want on
              <br />a website until developers apply them for you.
              <br />Just do it yourself and see how does.
            </p>
          </div>

          <div class="tabs">
            <ul class="nav nav-tabs">
              <li v-for="(tab, index) in tabs3" :class="{'active': show == index}">
                <a :href="tab.id" @click.prevent="show = index">
                  <div class="tab-title">{{tab.title}}</div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div class="col xl-6-12" data-aos="fade-left">
          <figure>
            <img src="/images/box5.png" alt />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import IconCopy from "@/components/atoms/icon-copy.vue";
import IconPin from "@/components/atoms/icon-pin.vue";
import IconFile from "@/components/atoms/icon-file.vue";
import IconSliders from "@/components/atoms/icon-sliders.vue";

export default {
  data: function() {
    return {
      show: 0,
      tabs: [
        {
          title: "Feedback on Live Website",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: " Feedback on Files",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
      ],
      tabs2: [
        {
          title: "Content Pin",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Style Pin",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
      ],
      tabs3: [
        {
          title: "Content Differences",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Style Differences",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
      ]
    };
  },
  components: {
    IconFile,
    IconCopy,
    IconSliders,
    IconPin
  }
};

</script>

<style lang="scss">
  section.section--2 {
    padding: 40px;
    img {
      width: 100%;
    }
  }

  .feature-wrapper {
    padding: 80px 0;
    figure {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px,
        rgba(0, 0, 0, 0.2) 0px 0px 1px;
      padding: 50px 0;
    }
  }
</style>
