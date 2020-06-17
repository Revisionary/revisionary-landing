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

      <div class="wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">

        <div class="col xl-6-12">

          <div class="section-content">

            <span class="section-category">Features</span>

            <h2 class="section-title">Your feedback, <br> visualized.</h2>

            <p class="section-sub">You don't have to wait to see the changes you want on <br> a website until developers apply them for you. Just do it <br> yourself and see how does it look beforehand.</p>

          </div>

        </div>

        <div class="col xl-6-12">

          <img src="/box4.png" alt="">

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
          tabImage: '/box4.png',
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
    padding: 140px;
    img {
      width: 100%;
    }
  }

</style>
