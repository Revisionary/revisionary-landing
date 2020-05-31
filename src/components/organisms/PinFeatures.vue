<!--
  *
  = Pin Features Section Component
  = Includes Pin Features section component.
  *
-->

<template>

  <section class="home-section section--2">

    <div class="container xl-middle">

      <figure class="section-vector">

        <img src="assets/images/headline-vector.png" alt="">

      </figure>

      <div class="wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-2">

        <div class="col col-relative xl-5-12">

          <div class="tab-content">

            <div :id="tab.id" v-for="(tab, index) in tabs" v-if="show == index" :key="index">
              <figure class="full float-left">
                <img :src="tab.tabImage" alt="">
              </figure>
            </div>

          </div>

        </div>

        <div class="col col-relative xl-2-12">
        </div>

        <div class="col xl-5-12">

          <div class="section-content">

            <h2 class="section-title">Visualize your feedback <br> like never before</h2>

            <p class="section-sub">See your changes before developers apply <br> them for you. Do it yourself in seconds and see...</p>

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


  section.section--2 {
    background-color: $cloud-blue;
    .wrap {
      min-height: 1050px;
    }
  }

</style>
