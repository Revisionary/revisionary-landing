<!--
  *
  = Collaboration Section Component
  = Includes Collaboration section component.
  *
-->

<template>
  <section class="home-section section--4">

    <div class="container xl-middle">

      <div class="wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-2">

        <div class="col xl-6-12">

          <div class="section-content white">

            <h2 class="section-title">Be on the same page</h2>

            <p class="section-sub">See your changes before developers apply <br> them for you. Do it yourself in seconds and see <br> how does it look before you send them!</p>

            <div class="feature-block">
              <div class="feature-title">
                <span class="feature-icon">
                  <CoffeeIcon />
                </span>
                Collaboration
              </div>
              <div class="feature-content">
                <p>See your changes before developers apply them <br>for you do it your.See your changes before <br>developers apply them for you.</p>
              </div>
            </div>

            <div class="feature-block">
              <div class="feature-title">
                <span class="feature-icon">
                  <CloudIcon />
                </span>
                Unify Environments
              </div>
              <div class="feature-content">
                <p>See your changes before developers apply them <br>for you do it your.See your changes before <br>developers apply them for you.</p>
              </div>
            </div>

          </div>

        </div>

        <div class="col col-relative xl-6-12">
          <figure class="full float-right">
            <img src="/collaboration.png" alt="">
          </figure>
        </div>


      </div>

    </div>

  </section>

</template>

<script>

import CoffeeIcon from '~/components/atoms/icon-coffee.vue'
import CloudIcon from '~/components/atoms/icon-cloud.vue'

export default {
  components: {
    CoffeeIcon,
    CloudIcon
  }
}
</script>

<style lang="scss" scoped>

  section.section--4 {
    background: $dark-blue;
    padding: 140px 0;
    figure {
      box-shadow: none;
    }
    .feature-block {
      display: inline-block;
      width: 100%;
      margin: 25px 0;
      .feature-title {
        font-weight: 500;
        font-size: 22px;
        letter-spacing: -0.03em;
        color: #fff;
        .feature-icon {
          display: inline-block;
          width: 39px;
          height: 39px;
          text-align: center;
          font-size: 19px;
          line-height: 40px;
          background-color: #3b455a;
          color: #ffffff;
          margin-right: 10px;
          border-radius: 10px;
          svg {
            vertical-align: text-top;
          }
        }
      }
      .feature-content {
        p {
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -.01em;
          color: rgba(255,255,255,0.5);
          font-weight: 400;
          margin-top: 12px;
        }
      }
    }
  }

</style>
