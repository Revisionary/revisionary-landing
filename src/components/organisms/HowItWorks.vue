<!--
  *
  = How It Works Section Component
  = Includes How It Works section component.
  *
-->

<template>
  <section id="how-it-works" class="home-section section--1">
    <div class="container xl-middle">
      <div class="wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-2">
        <div class="col xl-6-12">
          <div class="section-content">
            <h2 class="section-title">
              Easiest way
              <br />to share ideas
            </h2>

            <p class="section-sub">
              Put your live URL and start giving feedback on
              <br />any website! No need to download and install
              <br />anything to your computer or browser.
            </p>

            <div class="tabs">
              <ul class="nav nav-tabs">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span class="tab-icon">{{tab.icon}}</span>
                      {{tab.title}}
                    </div>
                    <div class="tab-content">{{tab.content}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col col-relative xl-6-12">
          <div class="tab-content">
            <div :id="tab.id" v-for="(tab, index) in tabs" v-if="show == index" :key="index">
              <figure class="full float-right">
                <img :src="tab.tabImage" alt />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      show: 0,
      tabs: [
        {
          title: "Start with URL",
          content:
            "Put your URL and start giving or receiving feedbacks, simple is that.",
          icon: "1",
          id: "#tab-1",
          tabImage: "/screens/pin-page.png"
        },
        {
          title: "Add Your Feedback",
          content:
            "Put your URL and start giving or receiving feedbacks, simple is that.",
          icon: "2",
          id: "#tab-2",
          tabImage: "asdf"
        },
        {
          title: "Collaborate with others",
          content:
            "Put your URL and start giving or receiving feedbacks, simple is that.",
          icon: "3",
          id: "#tab-3",
          tabImage: "asdf"
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
section.section--1 {
  background-color: #fff;
  .wrap {
    min-height: 900px;
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
