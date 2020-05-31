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

            <h2 class="section-title">All-in-one dashboard <br>for your feedbacks</h2>

            <p class="section-sub">Intuitive dashboard helps you track all of your <br>projects, feedbacks and team in one place.</p>

            <div class="tabs" v-cloack>
              <ul class="nav nav-tabs">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span class="tab-icon">{{tab.icon}}</span>
                      {{tab.title}}
                    </div>
                    <div class="tab-content">
                      {{tab.content}}
                    </div>
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
                <img :src="tab.tabImage" alt="">
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
  data: function () {
    return {
      show: 0,
      tabs: [
        {
          title: 'Start with URL',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: '1',
          id: '#tab-1',
          tabImage: '/screens/dashboard.png',
        },
        {
          title: 'Add Your Feedback',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: '2',
          id: '#tab-2',
          tabImage: 'asdf',
        },
        {
          title: 'Collaborate with others',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: '3',
          id: '#tab-3',
          tabImage: 'asdf',
        },
        {
          title: 'Organize everything',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: '4',
          id: '#tab-4',
          tabImage: 'asdf',
        },
      ]
    }
  },
  methods: {
    navigate: function(e){
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function(e){
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    }
  }
}
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
      font-size: 42px;
      letter-spacing: -0.03em;
      color: $title-color;
      margin: 0;
      line-height: 1.2;
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

  section.section--1 {
    .wrap {
      min-height: 1050px;
    }
  }

</style>
