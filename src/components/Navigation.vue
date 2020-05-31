<template>

  <header>
    <div class="wrap">

      <div class="col xl-4-12">

        <div class="brand">
          <a href="#"><logo /></a>
        </div>

        <ul class="navigation">
          <li class="nav-element"><a href="#how-it-works">How It Works</a></li>
          <li class="nav-element"><a href="#">Features</a></li>
          <li class="nav-element"><a href="#">Use Cases</a></li>
          <li class="nav-element"><a href="#">Plans</a></li>
          <li class="nav-element"><a href="#"><i class="icon icon_more"></i></a></li>
        </ul>

      </div>

      <div class="col xl-4-12 xl-center">

        <ul class="live-preview">
          <li class="nav-element"><a href="#">
            <input class="tgl tgl-flat" id="cb4" type="checkbox"/>
            <label class="tgl-btn" for="cb4"></label>
            <label for="cb4">Live Preview</label>
          </a>
          </li>
        </ul>

      </div>

      <div class="col xl-4-12 xl-right">

        <ul class="actions">
          <li class="nav-element"><a href="#">Sign in</a></li>
          <li class="nav-element"><a class="btn-signup" href="#">Sign up free</a></li>
        </ul>

      </div>

    </div>

  </header>

</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		components: {
			Logo
		},
	};
</script>

<style lang="scss">

  @import "~/assets/style/config/variables";

  header {
    //background-color: #101218;
    height: $header-height;
    line-height: $header-height;
    color: $color-light;
    padding: 0 20px;
    display: block;
    position: relative;
    transition: 0.3s background-color;
    &.active {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      height: $header-fixed-height;
      line-height: $header-fixed-height;
      animation-name: slideInDown;
      animation-duration: 0.4s;
      animation-fill-mode: both;
      background: #FFF;
      box-shadow: rgba(3,27,78,0.1) 0px 2px 4px;
      .nav-element {
        a {
          color: $p-low;
          &:hover {
            color: $dark-blue;
          }
        }
        .btn-signup {
          background-color: $light-blue;
          color: #FFF;
          &:hover {
            color: #FFF;
          }
        }
      }
    }
    .brand {
      display: inline-block;
      svg {
        width: 34px;
        vertical-align: middle;
      }
    }
  }

  ul.navigation,
  ul.actions,
  ul.live-preview {
    display: inline-block;
    padding-left: 15px;
  }


  .nav-element {
    display: inline-block;
    padding: 0 10px;
    a {
      padding: 5px 0px;
      color: #969FAB;
      font-weight: 400;
      text-decoration: none;
      transition: 0.2s all ease;
      letter-spacing: -0.02em;
      //border-bottom: 1px solid transparent;
      &:hover {
        color: #FFF;
        //border-bottom: 1px solid #FFF;
      }
      i {
        vertical-align: middle;
        font-size: 22px;
      }
    }
    .btn-signup {
      font-weight: 500;
      height: 37px;
      line-height: 37px;
      padding: 0 25px;
      border-radius: 100px;
      margin-left: 5px;
      display: inline-block;
      background-color: rgba(255,255,255,0.1);
      color: #FFF;
      transition: 0.2s all ease;
      &:hover {
        background-color: #0363F3;
        color: #FFF;
      }
    }
  }
</style>
