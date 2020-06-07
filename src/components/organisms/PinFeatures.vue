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
              <figure class="full float-left pin">
                <img :src="tab.tabPin" alt="">
              </figure>
            </div>

          </div>

        </div>

        <div class="col col-relative xl-1-12">
        </div>

        <div class="col xl-5-12" style="padding-left: 60px">

          <div class="section-content white">

            <h2 class="section-title">Your feedback, <br> visualized.</h2>

            <p class="section-sub">See your changes before developers apply <br> them for you. Do it yourself in seconds and see...</p>

            <div class="tabs">
              <ul class="nav nav-tabs white-skin">
                <li v-for="(tab, index) in tabs" :class="{'active': show == index}">
                  <a :href="tab.id" @click.prevent="show = index">
                    <div class="tab-title">
                      <span class="tab-icon">
                        <component :is="tab.icon"></component>
                      </span>
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

// Icons
import IconFile from '~/components/atoms/icon-file.vue'
import IconSliders from '~/components/atoms/icon-sliders.vue'
import IconMove from '~/components/atoms/icon-move.vue'
import IconDocs from '~/components/atoms/icon-docs.vue'

export default {
  components: {
    IconFile,
    IconSliders,
    IconMove,
    IconDocs,
  },
  data: function () {
    return {
      show: 0,
      tabs: [
        {
          title: 'Change the live content',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: 'icon-file',
          id: '#tab-1',
          tabImage: '/screens/pin-page.png',
          tabPin: '/screens/pin.png',
        },
        {
          title: 'Style in live',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: 'icon-sliders',
          id: '#tab-2',
          tabImage: 'asdf',
        },
        {
          title: 'Move or change everything',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: 'icon-move',
          id: '#tab-3',
          tabImage: 'asdf',
        },
        {
          title: 'See the content differences',
          content: 'Put your URL and start giving or receiving feedbacks, simple is that.',
          icon: 'icon-docs',
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
    background-color: #0363F3;
    .wrap {
      min-height: 1050px;
    }
  }

</style>
