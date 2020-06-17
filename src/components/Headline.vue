<!--
  *
  = Headline Component
  = Includes headline component including @Navigation component.
  *
-->

<template>
  <section class="headline">
    <navigation />

    <div class="container xl-middle">
      <div class="wrap wrap-headline xl-flexbox xl-center">
        <div class="col xl-1-1">
          <h1>
            <div class="block" style="min-height: 117px;">
              <span>Work</span>

              <span>together.</span>

              <span>Visually.</span>
            </div>
          </h1>

          <div class="block">
            <span>
              <p>
                Revisionary makes it super easy to invite your clients and teammates
                <br />to leave useful comments* directly on your live websites.
              </p>
            </span>
          </div>

          <div class="headline-actions">
            <div class="block">
              <div class="start-now">
                <a class="btn btn-start" href="#">Get Started — Free Forever</a>
              </div>
            </div>

            <div class="block">
              <div class="watch-now">
                <a class="btn btn-watch" href="#">
                  <IconPlay />Watch in Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container lg">
      <div id="h-video" class="video-wrapper">
        <video
          loop
          muted
          playsinline
          poster="/video-poster.png"
          src="https://s3.amazonaws.com/pastel.prod/assets/how-it-works-video.mp4"
          width="1260"
          height="598"
          class="jsx-2617039366"
        ></video>
      </div>
    </div>

    <div class="container">
      <div class="wrap xl-flexbox xl-gutter-50 xl-center xl-middle xl-2">
        <div class="col xl-4-12">
          <a class="step step-1 active" href="#">
            <div class="step-progress"></div>
            <div class="step-content">
              <h4>1. Start with URL</h4>
              <p>Put your live URL and start giving feedback on any website or file.</p>
            </div>
          </a>
        </div>

        <div class="col xl-4-12">
          <a class="step step-2" href="#">
            <div class="step-progress"></div>
            <div class="step-content">
              <h4>2. Add your feedback</h4>
              <p>Point out the exact portion of any webite for your feedback.</p>
            </div>
          </a>
        </div>

        <div class="col xl-4-12">
          <a class="step step-3" href="#">
            <div class="step-progress"></div>
            <div class="step-content">
              <h4>3. Collaborate</h4>
              <p>Invite your collegues or clients to your project within minutes.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from "~/components/organisms/Navigation.vue";
import IconPlay from "~/components/atoms/icon-play.vue";
import Brands from "~/components/organisms/Brands.vue";

export default {
  components: {
    Navigation,
    IconPlay,
    Brands
  }
};
</script>

<style lang="scss">
section.headline {
  position: relative;
  background-color: #020b1d;
  overflow: hidden;
  .wrap-headline {
    padding: 100px 0 70px;
  }
  & > .container {
    position: relative;
  }
  h1 {
    font-size: 96px;
    font-weight: 500;
    margin: 12px 0;
    line-height: 1.1;
    color: #fff;
    letter-spacing: -0.035em;
  }
  p {
    font-size: 24px;
    color: #b3b9c1;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
  figure {
    position: absolute;
    right: -180px;
    top: 430px;
    opacity: 0.5;
    img {
      width: 350px;
    }
  }
  video {
    width: 100%;
    border-radius: 6px;
    object-fit: cover;
  }
}

.headline-actions {
  margin-top: 25px;
  .btn {
    display: inline-block;
    border-radius: 100px;
    min-height: 65px;
    line-height: 65px;
    text-align: center;
    padding: 0 40px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s all;
    margin: 5px 0;
    svg {
      margin: 0 5px;
      vertical-align: sub;
      path {
        stroke: rgba(255, 255, 255, 0.7);
      }
    }
    &.btn-start {
      background: #0363f3;
      font-size: 18px;
      letter-spacing: -0.015em;
      color: #ffffff;
      font-weight: 600;
      &:hover {
        background: #024bb9;
      }
    }
    &.btn-watch {
      font-size: 18px;
      letter-spacing: -0.02em;
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: #fff;
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
}

.block {
  position: relative;
  overflow: hidden;
  span {
    animation-name: slideInUp;
    animation-duration: 0.7s;
    animation-fill-mode: both;
    display: inline-block;
    animation-delay: 0.1s;
    position: relative;
    &:nth-child(2) {
      animation-delay: 0.35s;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
      &:before {
        content: "";
        width: 298px;
        height: 32px;
        display: inline-block;
        position: absolute;
        bottom: -20px;
        background-image: url("/line.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        z-index: -1;
      }
    }
    &:nth-child(4) {
      animation-delay: 0.65s;
    }
    &:nth-child(5) {
      animation-delay: 0.75s;
    }
  }
  .start-now,
  .watch-now {
    animation-name: fadeIn;
    animation-duration: 0.7s;
    animation-fill-mode: both;
    animation-delay: 0.6s;
  }
  .watch-now {
    animation-delay: 0.8s;
  }
}

.step {
  display: inline-block;
  opacity: 0.7;
  transition: 0.3s all;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    transform: translate(0, -5px);
    opacity: 1;
  }
  &.active {
    opacity: 1;
    .step-progress {
      &:before {
        content: "";
        width: 0;
        height: 4px;
        background-color: #fff;
        position: absolute;
        left: 0;
        animation-name: progressBar;
        animation-duration: 15s;
        animation-fill-mode: both;
        animation-timing-function: linear;
        border-radius: 100px;
      }
    }
    .step-content {
      h4 {
        color: #fff;
      }
    }
  }
}

.step-progress {
  margin: 50px 0 25px 0;
  display: inline-block;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  position: relative;
}

.step-content {
  margin: 0 0 70px 0;
  text-align: left;
  h4 {
    font-size: 22px;
    font-weight: 500;
    color: #a6abb1;
    margin: 0 0 10px 0;
    letter-spacing: -0.02em;
  }
  p {
    font-size: 18px !important;
    padding-right: 15px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 20px;
    letter-spacing: -0.01em !important;
  }
  img {
    width: 220px;
    margin-bottom: 25px;
  }
}
</style>
