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

      <div class="wrap wrap-headline xl-flexbox xl-center xl-paddingy-20">

        <div class="col xl-1-1">

          <h1>

            <div class="block">

              <span>Your </span>

              <span>ultimate</span>

              <span>visual </span>

              <span>feedback</span>

              <span>toolkit</span>

            </div>


          </h1>

          <div class="block">

            <span>

              <p>Revisionary makes it super easy to invite your clients and teammates <br> to leave useful comments* directly on your live websites.</p>

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
                <a class="btn btn-watch" href="#"><Play /> Watch in Action</a>
              </div>

            </div>

          </div>


        </div>

      </div>

      <figure>

        <img src="assets/images/headline-vector.png" alt="">

      </figure>

    </div>

  </section>

</template>

<script>

  import Navigation from '~/components/organisms/Navigation.vue';
  import Play from '~/components/atoms/Play.vue';

	export default {
		components: {
      Navigation,
      Play
		},
	};

</script>

<style lang="scss">

  section.headline {
    position: relative;
    background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80') center center/cover no-repeat;
    background-color: #101218;
    background-blend-mode: color-dodge;
    .wrap-headline {
      height: calc(100vh - 80px - 100px);
    }
    & > .container {
      position: relative;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg,rgba(2,11,29,.8) 15%,rgba(2,11,29,.99) 60%);
    }
    h1 {
      font-size: 68px;
      font-weight: 500;
      margin: 17px 0;
      line-height: 1.1;
      color: #FFF;
      letter-spacing: -0.04em;
    }
    p {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.03em;
    }
    figure {
      position: absolute;
      right: -180px;
      top: 330px;
    }
  }

  .headline-actions {
    margin-top: 30px;
    .btn {
      display: inline-block;
      border-radius: 100px;
      min-height: 65px;
      line-height: 65px;
      text-align: center;
      padding: 0 40px;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s all;
      margin: 5px 0;
      i {
        margin: 0 5px;
      }
      &.btn-start {
        background: #0363F3;
        font-size: 20px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        font-weight: 600;
        &:hover {
          background: #024bb9;
        }
      }
      &.btn-watch {
        font-size: 18px;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.7);
        &:hover {
          color: #FFF;
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
      &:nth-child(2) {
        animation-delay: 0.35s;
      }
      &:nth-child(3) {
        animation-delay: 0.5s;
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
