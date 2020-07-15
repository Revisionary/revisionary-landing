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
            Gather feedback &
            <br />perfect any website
          </h1>

          <p>
            Revisionary makes it super easy to invite your clients and teammates
            <br />to leave useful comments directly on your live websites.
          </p>

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
          autoplay
          poster="/images/video-poster.png"
          src="https://s3.amazonaws.com/pastel.prod/assets/how-it-works-video.mp4"
          width="1260"
          height="650"
          class="jsx-2617039366"
        ></video>
      </div>
    </div>

    <div class="container">
      <div class="wrap xl-flexbox xl-gutter-50 xl-center xl-middle">
        <Brands />
        <div class="col xl-7-12 introduction">
          <p>Revisionary is a web-based feedback tool designed to make the most powerful feedbacking tool accessible to everyone. And with an extensive collection of tools for editing and retouching photos, creating graphic designs, painting, drawing vector graphics, and adding stunning effects, it’s the only image editor you’ll need.</p>
          <a href="#">
            How It Works
            <IconArrow />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from "~/components/organisms/Navigation.vue";
import IconPlay from "~/components/atoms/icon-play.vue";
import IconArrow from "~/components/atoms/icon-arrow-right.vue";
import Brands from "@/components/sections/premade/Brands.vue";
export default {
  components: {
    Navigation,
    IconPlay,
    IconArrow,
    Brands
  }
};
</script>

<style lang="scss" scoped>
section.headline {
  position: relative;
  background-color: #040404;
  .wrap-headline {
    padding: 100px 0;
  }
  & > .container {
    position: relative;
  }
  h1 {
    font-size: 94px;
    font-weight: 500;
    margin: 20px 0;
    line-height: 1;
    color: #fff;
    letter-spacing: -0.0275em;
  }
  p {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.004em;
  }
  video {
    width: 100%;
    border-radius: 2px;
    object-fit: cover;
  }
  .introduction {
    padding: 80px 0 200px 0;
    p {
      font-size: 26px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      letter-spacing: -0.01em;
    }
    a {
      display: inline-block;
      margin: 31px auto 0;
      font-size: 23px;
      font-weight: 500;
      color: #66bbff;
      text-align: center;
      transition: 0.3s all;
      text-decoration: none;
      svg {
        fill: #66bbff;
        margin-left: 5px;
      }
      &:hover {
        opacity: 0.7;
      }
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
    text-decoration: none;
    transition: 0.3s all;
    margin: 5px 0;
    font-weight: 600;
    svg {
      margin: 0 5px;
      vertical-align: middle;
      path {
        stroke: rgba(255, 255, 255, 0.7);
      }
    }
    &.btn-start {
      background: #0363f3;
      font-size: 18px;
      letter-spacing: -0.01em;
      color: #ffffff;
      &:hover {
        background: #024bb9;
      }
    }
    &.btn-watch {
      font-size: 18px;
      letter-spacing: -0.01em;
      color: rgba(255, 255, 255, 0.4);
      svg {
        path {
          stroke: rgba(255, 255, 255, 0.4);
        }
      }
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
</style>
