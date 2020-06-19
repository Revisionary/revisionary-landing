<!--
  *
  = How It Works Section Component
  = Includes How It Works section component.
  *
-->

<template>

  <section id="how-it-works" class="home-section section--6">

    <div class="container xl-middle">

      <div class="wrap xl-flexbox xl-gutter-24 xl-center xl-middle xl-2">

        <div class="col xl-1-1">

          <div class="section-content">
            <span class="section-category">How It Works</span>
            <h2 class="section-title">Easiest way to share ideas</h2>

            <p class="section-sub">Put your live URL and start giving feedback on  any website! No need to <br>download and install anything to your computer or browser.</p>

          </div>

        </div>

        <div class="col xl-4-12 feature-1">
          <div class="features">
            <img src="/testicon.png" alt="">
            <h4>1. Start with URL</h4>
            <p>Put your live URL and start giving feedback on  any website</p>
          </div>
        </div>

        <div class="col xl-4-12 feature-2">
          <div class="features">
            <img src="/testicon2.png" alt="">
            <h4>2. Add your feedback</h4>
            <p>Put your live URL and start giving feedback on  any website</p>
          </div>
        </div>

        <div class="col xl-4-12 feature">
          <div class="features">
            <img src="/testicon3.png" alt="">
            <h4>3. Collaborate</h4>
            <p>Put your live URL and start giving feedback on  any website</p>
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
          tabImage: '/screens/dashboard-3.png',
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


  section.section--6 {
    .wrap {
      padding: 120px 0 0 0;
    }
    .features {
      margin: 70px 0;
      h4 {
        font-size: 24px;
        font-weight: 500;
        color: $title-color;
        margin: 0;
        letter-spacing: -0.02em;
      }
      p {
        font-size: 18px;
        padding: 0 30px;
        color: $p-low;
        margin-top: 10px;
      }
      img {
        width: 220px;
        margin-bottom: 25px;
      }
    }
    .feature-1 {
      position: relative;
      &:before {
        content: "";
        display: block;
        width: 160px;
        height: 40px;
        background: url('https://www.shipbob.com/wp-content/themes/ShipBob/assets/svg/dotted-line.svg') no-repeat center;
        background-size: 160px 40px;
        position: absolute;
        right: -17%;
        z-index: 2;
        top: 25%;
        opacity: 0.6;
      }
    }
    .feature-2 {
      position: relative;
      &:before {
        content: "";
        display: block;
        width: 160px;
        height: 40px;
        background: url('https://www.shipbob.com/wp-content/themes/ShipBob/assets/svg/dotted-line.svg') no-repeat center;
        background-size: 160px 40px;
        position: absolute;
        right: -17%;
        z-index: 2;
        right: -20%;
        top: 35%;
        -webkit-transform: rotate(180deg) scale(-1, 1);
        -ms-transform: rotate(180deg) scale(-1, 1);
        transform: rotate(180deg) scale(-1, 1);
        opacity: 0.6;
      }
    }
  }

</style>
