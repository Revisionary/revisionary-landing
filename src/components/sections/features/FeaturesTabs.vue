<!--
  *
  = Features Section Component
  = Includes Features section component.
  *
-->

<template>
  <section class="home-section section--3">
    <div class="container xl-middle">
      <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-center xl-top xl-2" style="display:none;">
        <div class="col xl-1-1">
          <div class="section-content white">
            <span class="section-icon white">
              <IconPlus />
            </span>

            <h2 class="section-title">Enrich your feedback process</h2>

            <p class="section-sub">
              See your changes before developers apply them for you. Do it yourself
              <br />in seconds and see how does it look before you send them!
            </p>
          </div>
        </div>

        <div class="col col-relative xl-1-1">
          <div class="tab-content">
            <div :id="tab.id" v-for="(tab, index) in tabs" v-if="show == index" :key="index">
              <figure class="full float-left">
                <img :src="tab.tabImage" alt />
              </figure>
            </div>
          </div>
        </div>

        <div class="col xl-1-1">
          <div class="tabs">
            <ul class="nav nav-tabs vertical white-skin">
              <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                <a :href="tab.id" @click.prevent="show = index">
                  <div class="tab-title">{{tab.title}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="feature-wrapper wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
        <div class="col xl-6-12 aos-init">
          <figure>
            <img src="/images/box8.png" alt />
          </figure>
        </div>

        <div class="col xl-6-12" data-aos="fade-left"> 
          <div class="section-content white left">
            <span class="section-icon white">
              <IconPlus />
            </span>
            <h2 class="section-title">
              Rediscover <br>
              feedbacks
            </h2>

            <p class="section-sub">
              You don't have to wait to see the changes you want on
              a website until developers apply them for you.
            </p>

            <div class="tabs">
              <ul class="nav nav-tabs white-skin">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span><component :is="tab.icon"></component></span>
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
  </section>
</template>

<script>
import IconPlus from "~/components/atoms/icon-plus.vue";

import IconPhase from "~/components/atoms/icon-phase.vue";
import IconTablet from "~/components/atoms/icon-tablet.vue";
import IconUsers from "~/components/atoms/icon-users.vue";

export default {
  components: {
    IconPlus,
    IconPhase,
    IconTablet,
    IconUsers
  },

  data: function() {
    return {
      show: 0,
      tabs: [
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
  methods: {
    navigate: function(e) {
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function(e) {
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    }
  }
};
</script>

<style lang="scss">
section.section--3 {
  padding: 40px 0;
  background-color: $light-blue;
  .tab-pane {
    h4 {
      font-weight: 500;
      font-size: 40px;
      letter-spacing: -0.03em;
      color: $title-color;
      margin: 0;
      line-height: 1.2;
    }
    p {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: -0.03em;
      color: $p-low;
    }
    figure.vector {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    figure.feature-image {
      position: relative;
      z-index: 9;
      img {
        //box-shadow: 0 10px 100px rgba(0,0,0,1);
        border-radius: 16px;
        box-shadow: rgba(3, 27, 78, 0.1) 0 2px 20px;
        width: 100%;
      }
    }
    .usage-tips {
      //background-color: rgba(0,0,0,0.1);
      //border-radius: 10px;
      padding: 0 20px;
      margin-top: 50px;
      border-left: 2px solid #e5e8ed;
      p {
        margin: 0;
        font-size: 18px;
        i {
          margin-right: 5px;
        }
      }
    }
  }
  .tabs {
    //padding-left: 45px;
    width: 100%;
    text-align: left;
    .nav-tabs {
      width: 100%;
      border-bottom-color: rgba(255,255,255,0.15);
    }
  }
  figure {
    img {
      width: 100%;
    }
  }
}
</style>
