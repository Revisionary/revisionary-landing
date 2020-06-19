<template>
  <section class="home-section section--5">
    <div class="container xl-middle">
      <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-1">
        <div class="col xl-1-1">
          <div class="section-content white">
            <h2 class="section-title">Improve the work flow</h2>
          </div>

          <div class="wrap xl-flexbox xl-gutter-40 xl-left xl-middle xl-1 xl-mt-20">
            <div class="col xl-4-12">
              <div class="feature-block">
                <div class="feature-title">
                  <span class="feature-icon">
                    <IconFile />
                  </span>
                  Replace Tools
                </div>
                <div class="feature-content">
                  <p>See your changes before developers apply them for you do it your.See your changes before developers apply them for you.</p>
                </div>
              </div>
            </div>

            <div class="col xl-4-12">
              <div class="feature-block">
                <div class="feature-title">
                  <span class="feature-icon">
                    <IconFile />
                  </span>
                  Save Time
                </div>
                <div class="feature-content">
                  <p>See your changes before developers apply them for you do it your.See your changes before developers apply them for you.</p>
                </div>
              </div>
            </div>

            <div class="col xl-4-12">
              <div class="feature-block">
                <div class="feature-title">
                  <span class="feature-icon">
                    <IconFile />
                  </span>
                  Finalize Faster
                </div>
                <div class="feature-content">
                  <p>See your changes before developers apply them for you do it your.See your changes before developers apply them for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-left xl-middle xl-1">
        <img src="/collaboration.png">
        <div class="col col-relative xl-1-1" style="display: none;">
          <div class="review-slider">
            <client-only>
              <vue-tiny-slider v-bind="tinySliderOptions">
                <div class="review-box">
                  <div class="review-holder">
                    <img src="/avatar-1.png" alt />
                    <p>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</p>
                    <span class="reviewer">Ike Elimsa</span>
                    <span class="reviewer-position">Founder at Twelve12</span>
                  </div>
                </div>

                <div class="review-box">
                  <div class="review-holder">
                    <img src="/avatar-2.png" alt />
                    <p>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</p>
                    <span class="reviewer">Ike Elimsa</span>
                    <span class="reviewer-position">Founder at Twelve12</span>
                  </div>
                </div>

                <div class="review-box">
                  <div class="review-holder">
                    <img src="/avatar-3.png" alt />
                    <p>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</p>
                    <span class="reviewer">Ike Elimsa</span>
                    <span class="reviewer-position">Founder at Twelve12</span>
                  </div>
                </div>

                <div class="review-box">
                  <div class="review-holder">
                    <img src="/avatar-1.png" alt />
                    <p>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</p>
                    <span class="reviewer">Ike Elimsa</span>
                    <span class="reviewer-position">Founder at Twelve12</span>
                  </div>
                </div>

                <div class="review-box">
                  <div class="review-holder">
                    <img src="/avatar-2.png" alt />
                    <p>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</p>
                    <span class="reviewer">Ike Elimsa</span>
                    <span class="reviewer-position">Founder at Twelve12</span>
                  </div>
                </div>
              </vue-tiny-slider>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconFile from "@/components/atoms/icon-file.vue";
export default {
  components: {
    IconFile
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        }
      ]
    };
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        //loop: false,
        swipeAngle: 45,
        items: 3,
        //center: true,
        gutter: 30,
        loop: false,
        mouseDrag: true,
        nav: false,
        controlsText: [
          "<i class='icon icon_arrow-left'></i>",
          "<i class='icon icon_arrow-right'></i>"
        ]
      }
    };
  }
};
</script>
  
<style lang="scss">
section.section--5 {
  background: #020b1d;
  padding: 140px 0;
  .section-title {
    h2 {
      font-weight: 500;
      font-size: 46px;
      letter-spacing: -0.03em;
      color: $title-color;
      margin: 0;
      line-height: 1.2;
    }
    p {
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: -0.03em;
      color: $p-low;
      margin-top: 15px;
    }
  }
  .feature-block {
    display: inline-block;
    width: 100%;
    margin: 35px 0;
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
        line-height: 37px;
        background-color: #FFF;
        color: #fff;
        margin-right: 10px;
        border-radius: 10px;
        vertical-align: middle;
        svg {
          vertical-align: middle;
          stroke: $title-color;
        }
      }
    }
    .feature-content {
      p {
        font-size: 18px;
        line-height: 1.6;
        letter-spacing: -0.01em;
        color: $p-low;
        font-weight: 400;
        margin-top: 12px;
      }
    }
  }
  .tns-ovh {
    overflow: visible;
  }
}
.tns-inner {
  padding: 40px 0;
}

.review-slider,
.tns-inner {
  overflow: visible;
}
.review-box {
  min-width: 550px;
}

.tns-controls {
  position: absolute;
  top: -74px;
  right: 0;
  button {
    background-color: transparent;
    padding: 0;
    height: 36px;
    line-height: 9.5;
    font-size: 24px;
    width: 40px;
    color: $light-blue;
    border: none;
    min-height: auto;
    //border: 1px solid $cloud-blue;
    //box-shadow: rgba(3,27,78,.1) 0 2px 4px;
    border-radius: 100px;
    //margin-left: 10px;

    &:disabled {
      box-shadow: none;
      color: $p-low;
    }
  }
}

.review-holder {
  background: rgba(255, 255, 255, 0.05);
  //border: 1px solid #dee3eb;
  border-radius: 2px;
  padding: 120px 70px;
  //box-shadow: rgba(3, 27, 78, 0.05) 0 2px 10px;
  p {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.03em;
    color: #535f72;
  }
  span {
    display: block;
    font-size: 18px;
    letter-spacing: -0.03em;
    color: #898989;
    &.reviewer {
      font-weight: 500;
      font-size: 20px;
      color: #000;
    }
  }
}

.section-divider {
  padding: 100px 0;
  .line {
    width: 100%;
    height: 2px;
    background-color: $cloud-blue;
  }
}
</style>
