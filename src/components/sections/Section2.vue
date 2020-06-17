<!--
  *
  = Features Section Component
  = Includes Features section component.
  *
-->

<template>
  <section class="home-section section--3">
    <div class="container xl-middle">
      <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-2">
        <div class="col xl-1-1">
          <div class="section-content white">
            <span class="section-icon">
              <IconPhase />
            </span>

            <h2 class="section-title">Enrich your feedback process</h2>

            <p class="section-sub">
              See your changes before developers apply them for you. Do it yourself
              <br />in seconds and see how does it look before you send them!
            </p>
          </div>
        </div>

        <div class="col col-relative xl-9-12">
          <div class="tab-content">
            <div :id="tab.id" v-for="(tab, index) in tabs" v-if="show == index" :key="index">
              <figure class="full float-left">
                <img :src="tab.tabImage" alt />
              </figure>
            </div>
          </div>
        </div>

        <div class="col xl-3-12">
          <div class="tabs">
            <ul class="nav nav-tabs white-skin">
              <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                <a :href="tab.id" @click.prevent="show = index">
                  <div class="tab-title">{{tab.title}}</div>
                  <div class="tab-content">{{tab.content}}</div>
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
import IconPhase from "~/components/atoms/icon-phase.vue";

export default {
  components: {
    IconPhase
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
          tabImage: "/screens/pin-page.png",
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
  padding: 120px 0 250px 0;
  background-color: $light-blue;
  max-width: 1600px;
  width: 97%;
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
  .tab-vertical {
    .wrap {
      padding: 80px 0 0 0;
      .col-content {
        padding-left: 80px;
      }
    }
  }
  .tabs {
    margin-top: 100px;
  }
  figure {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px,
      rgba(0, 0, 0, 0.2) 0px 0px 1px;
    img {
      border-radius: 6px;
      max-width: none;
    }
    &.full {
      position: absolute;
      top: -140px;
      //width: 100%;
      &.float-right {
        left: 100px;
      }
      &.float-left {
        right: 100px;
      }
      &.pin {
        box-shadow: none;
        right: 30px;
        top: 0;
        left: auto;
      }
    }
  }
}
</style>
