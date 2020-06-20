<!--
  *
  = Headline Component
  = Includes headline component including @Navigation component.
  *
-->

<template>
  <section class="headline">
    <div class="overlay"></div>

    <navigation />

    <div class="container xl-middle">
      <div class="wrap wrap-headline xl-flexbox xl-center">
        <div class="col xl-1-1">
          <h1>
            <div class="block" style="min-height: 110px;">
              <span>Gather</span>

              <span>feedback.</span>

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
          poster="/images/video-poster.png"
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
          <a class="step step-1" href="#">
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

export default {
  components: {
    Navigation,
    IconPlay
  }
};

</script>

<style lang="scss">
section.headline {
  position: relative;
  background-color: #020b1d;
  .wrap-headline {
    padding: 100px 0 70px;
  }
  & > .container {
    position: relative;
  }
  h1 {
    font-size: 84px;
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
    letter-spacing: -0.015em;
    margin-top: -10px;
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
  .step {
    display: inline-block;
    transition: 0.3s all;
    text-decoration: none;
    opacity: 0.6;
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
          color: #b3b9c1;
        }
      }
    }
  }

  .step-progress {
    margin: 45px 0 25px 0;
    display: inline-block;
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    position: relative;
  }

  .step-content {
    margin: 0 0 120px 0;
    text-align: left;
    h4 {
      font-size: 24px;
      font-weight: 500;
      color: #FFF;
      margin: 0 0 10px 0;
      letter-spacing: -0.02em;
    }
    p {
      font-size: 20px;
      line-height: 1.5;
      letter-spacing: -0.015em;
      color: #b3b9c1;
      margin-top: 0;
    }
    img {
      width: 220px;
      margin-bottom: 25px;
    }
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
        position: absolute;
        display: block;
        width: 100%;
        height: .3em;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='236' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.8 8.3l16.8-.6L35 7.1l15-.7c2.2-.1 4.5-.3 6.8-.3l10-.2h5.5l10.3.2 15.4.6L129.5 8l15.5.8 15.4.7c9.7.4 19.4.7 29 1.3l8 .5 8.9.7 7.7.7 3.2.3 3.7.5 5.2.6 6.6 1.2.6.1a2.3 2.3 0 002.3-1.6c.2-.6.1-1.3-.2-1.9-.2-.4-.8-1-1.3-1.1l-4.2-.8-4.2-.7A403.3 403.3 0 00212 7.7a2.4 2.4 0 001-2.4c-.2-.6-.6-1.2-1-1.5l-1.1-.5a33 33 0 00-2.6-.4l-2-.3-3.8-.2L195 2l-15.5-.5-15.4-.3L156 1h-24.4L115.8.8C106.1.7 96.2.6 86.4.7H71.8c-5.2 0-10.4 0-15.6.2L45.9 1l-5.9.1-9.4.4-6.2.3c-7.4.5-14.7 1-22 1.7-.5.1-.8.3-1.1.6-.5.4-.8 1-.8 1.6 0 1.3 1 2.5 2.3 2.5' fill='%230363f2' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: bottom;
        left: 0;
        bottom: -20px;
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

</style>
