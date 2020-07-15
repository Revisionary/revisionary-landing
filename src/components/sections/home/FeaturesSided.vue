<!--
  *
  = Pin Features Section Component
  = Includes Pin Features section component.
  *
-->

<template>
  <section id="features" class="home-section section--2">
    <div class="feature-wrapper">
      <div class="container">
        <div class="wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
          <div class="col xl-6-12">
            <div class="section-content right">
              <div class="section-cat">Annotations</div>
              <h2 class="section-title">
                Pin your
                <br />thoughts
              </h2>

              <p
                class="section-sub"
              >Sharing ideas about a project usually works trough an email or a static documents. With Revisionary, it's not the case. Simply create your project by entering your website's url, select the area you want to leave your comment, and that's all.</p>
              <a class="section-more" href="#">
                Start Now
                <IconArrow />
              </a>
            </div>
          </div>

          <div class="col xl-6-12">
            <figure>
              <img src="/images/box-1.png" alt />
            </figure>
            <div class="tabs">
              <ul class="nav nav-tabs mini-tabs">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span>
                        <component :is="tab.icon"></component>
                      </span>
                      {{tab.title}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-wrapper" style="background-color: #f7f7f9;">
      <div class="container">
        <div class="wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
          <div class="col xl-6-12">
            <figure>
              <img src="/images/box-2.png" alt />
            </figure>
            <div class="tabs">
              <ul class="nav nav-tabs mini-tabs">
                <li v-for="(tab, index) in tabs2" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span>
                        <component :is="tab.icon"></component>
                      </span>
                      {{tab.title}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col xl-6-12">
            <div class="section-content left">
              <div class="section-cat">Feedback visualising</div>
              <h2 class="section-title">
                Visualize
                <br />your ideas
              </h2>

              <p
                class="section-sub"
              >Have you ever revise your own revision? Indeed. Writing things sucks because every perspective sees that differently. Means, you can any website component's on live. Play with positions, texts, background images and much more...</p>
              <a class="section-more" href="#">
                Start Now
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-wrapper">
      <div class="container">
        <div class="wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
          <div class="col xl-6-12" data-aos="fade-right">
            <div class="section-content right">
              <div class="section-cat">Feedback differences</div>
              <h2 class="section-title">
                Show the
                <br />difference
              </h2>

              <p
                class="section-sub"
              >Have you ever revise your own revision? Indeed. Writing things sucks because every perspective sees that differently. Means, you can any website component's on live. Play with positions, texts, background images and much more...</p>
              <a class="section-more" href="#">
                Start Now
                <IconArrow />
              </a>
            </div>
          </div>

          <div class="col xl-6-12" data-aos="fade-left">
            <figure>
              <img src="/images/box-3.png" alt />
            </figure>
            <div class="tabs">
              <ul class="nav nav-tabs mini-tabs">
                <li v-for="(tab, index) in tabs3" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span>
                        <component :is="tab.icon"></component>
                      </span>
                      {{tab.title}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-wrapper">
      <div class="container">
        <div class="wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
          <div class="col xl-6-12">
            <figure>
              <img src="/images/box-1.png" alt />
            </figure>
            <div class="tabs">
              <ul class="nav nav-tabs mini-tabs">
                <li v-for="(tab, index) in tabs4" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span>
                        <component :is="tab.icon"></component>
                      </span>
                      {{tab.title}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col xl-6-12">
            <div class="section-content left">
              <div class="section-cat">Enchancers</div>
              <h2 class="section-title">
                Rediscover
                <br />feedbacks
              </h2>

              <p
                class="section-sub"
              >Sharing ideas about a project usually works trough an email or a static documents. With Revisionary, it's not the case. Simply create your project by entering your website's url, select the area you want to leave your comment, and that's all.</p>
              <a class="section-more" href="#">
                Start Now
                <IconArrow />
              </a>
            </div>
          </div>
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

import IconPhase from "~/components/atoms/icon-phase.vue";
import IconTablet from "~/components/atoms/icon-tablet.vue";
import IconUsers from "~/components/atoms/icon-users.vue";

import IconImage from "@/components/atoms/icon-image.vue";
import IconPDF from "@/components/atoms/icon-pdf.vue";

import IconArrow from "@/components/atoms/icon-arrow-right.vue";

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
          icon: "IconPin",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: " Feedback on Files",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconPDF",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        }
      ],
      tabs2: [
        {
          title: "Change the content",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconFile",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Adjust the style",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconSliders",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        }
      ],
      tabs3: [
        {
          title: "Content Differences",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconCopy",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Style Differences",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconImage",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        }
      ],
      tabs4: [
        {
          title: " Phasing",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconPhase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Device Screens",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconTablet",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Collaboration",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "IconUsers",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        }
      ]
    };
  },
  components: {
    IconFile,
    IconCopy,
    IconSliders,
    IconPin,
    IconImage,
    IconPDF,
    IconArrow,
    IconPhase,
    IconTablet,
    IconUsers
  }
};
</script>

<style lang="scss">
section.section--2 {
  padding: 60px 0 105px 0;
  img {
    width: 100%;
  }
}

.feature-wrapper {
  padding: 140px 0 185px 0;
  figure {
    background-color: #f5f5f7;
    //padding: 50px 0;
    img {
      border-radius: 4px;
      margin: 0;
      float: left;
    }
  }
  .col {
    position: relative;
    .nav-tabs {
      position: absolute;
      bottom: -45px;
    }
  }
}
</style>
