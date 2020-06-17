<!--
  *
  = Pin Features Section Component
  = Includes Pin Features section component.
  *
-->

<template>
  <section id="features" class="home-section section--2">
    <div class="container xl-middle">
      <div class="feature-wrapper wrap xl-flexbox xl-gutter-0 xl-left xl-middle xl-2">
        <div class="col xl-6-12">
          <div class="section-content">
            <span class="section-icon red">
              <IconFile />
            </span>
            <h2 class="section-title">
              Collaborate
              <br />with others
            </h2>

            <p class="section-sub">
              You don't have to wait to see the changes you want on
              <br />a website until developers apply them for you.
              <br />Just do it yourself and see how does.
            </p>

            <div class="section-features">
              <hr />
              <div class="feature">
                <span class="icon-box"></span>
                <span class="feature-title">Different types of pins</span>
              </div>
              <div class="feature">
                <span class="icon-box"></span>
                <span class="feature-title">Works on all types of websites</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col xl-6-12">
          <figure>
            <img src="/box5.png" alt />
          </figure>
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
  }
};
</script>

<style lang="scss">
section.section--2 {
  padding: 60px;
  img {
    width: 100%;
  }
}

.feature-wrapper {
  padding: 80px 0;
  figure {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px,
      rgba(0, 0, 0, 0.2) 0px 0px 1px;
    padding: 50px 0;
  }
}
</style>
