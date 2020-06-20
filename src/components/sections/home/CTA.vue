<template>
  <div>
    <section class="home-section cta-box">
      <div class="container xl-middle relative">
        <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-center xl-middle xl-1">
          <h5>Forever free, for everyone.</h5>
          <p>See your changes before developers apply them for you.</p>
          <a class="button button-white" href="#">Get Started — Free Forever</a>
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
  padding: 110px 0;
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
    display: inline-block;
    border-radius: 100px;
    min-height: 65px;
    line-height: 65px;
    text-align: center;
    width: auto;
    padding: 0 40px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s all;
    margin: 40px 0 0 0;
    background: #0363f3;
    font-size: 18px;
    letter-spacing: -0.015em;
    color: #ffffff;
    font-weight: 600;
    border: none;
  }
}
</style>