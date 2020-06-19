<template>
  <div>
    <section class="home-section cta-box">
      <div class="container xl-middle relative">
        <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-center xl-middle xl-1">
          <h5>Forever free, for everyone.</h5>
          <p>See your changes before developers apply them for you.</p>
          <a class="button button-white" href="#">Get Started Now</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cta-box {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 160px 0;
  & > .container {
    position: relative;
  }
  h5 {
    font-weight: 500;
    font-size: 64px;
    color: #031c4e;
    margin: 0;
    letter-spacing: -0.045em;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.015em;
    color: #7a8492;
    margin-top: 12px;
  }
  .button-white {
    background: #ffffff;
    border-radius: 100px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: #0363f3;
    display: inline-block;
    border: none;
    height: 55px;
    line-height: 55px;
    width: auto;
    padding: 0 35px;
    margin-top: 40px;
  }
}
</style>