<!--
  *
  = Features Section Component
  = Includes Features section component.
  *
-->

<template>
  <section class="home-section section--3">
    <div class="container xl-middle">
      <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-center xl-top xl-2">
        <div class="col xl-1-1">
          <div class="section-content white">
            <span class="section-icon">
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
    </div>
  </section>
</template>

<script>
import IconPlus from "~/components/atoms/icon-plus.vue";

export default {
  components: {
    IconPlus
  },

  data: function() {
    return {
      show: 0,
      tabs: [
        {
          title: "File Annotations",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/images/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: " Phasing",
          ctitle: "Versioning arrived to feedbacks2",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Device Screens",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png",
          tabTips: "asdf"
        },
        {
          title: "Dark Mode",
          ctitle: "Versioning arrived to feedbacks",
          content:
            "See your changes before developers apply them for you. Do it yourself in seconds and see how does it look before you send them!",
          icon: "icon-phase",
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
  padding: 120px 0;
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
    padding-left: 45px;
    width: 100%;
    text-align: center;
    .nav-tabs {
      width: 100%;
      border-bottom-color: rgba(255,255,255,0.15);
    }
  }
  figure {
    margin-top: 70px;
    img {
      width: 100%;
    }
  }
}
</style>
