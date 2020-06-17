<!--
  *
  = Navigation Component
  = Includes navigation component.
  *
-->

<template>

  <header class="navbar is-transparent is-fixed-top">

    <div class="container">

      <div class="wrap">

        <div class="col xl-8-12">

          <div class="brand">
            <a href="#"><Logo /></a>
          </div>

          <nav class="navigation">
            <li class="nav-element"><nuxt-link :to="{ path: '/', hash:'#how-it-works'}">How It Works</nuxt-link></li>
            <li class="nav-element"><nuxt-link :to="{ path: '/', hash:'#features'}">Features</nuxt-link></a></li>
            <li class="nav-element"><a href="#">Pricing & Plans</a></li>
            <li class="nav-element"><a href="#">Support</a></li>
          </nav>

        </div>

        <div class="col xl-4-12 xl-right">

          <ul class="actions">
            <li class="nav-element"><a href="#">Sign in</a></li>
            <li class="nav-element" style="padding: 0;"><a class="btn-signup" href="#">Sign up free</a></li> 
          </ul>

        </div>

      </div>
    </div>

  </header>

</template>

<script>

	export default {
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      }),
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.querySelector("header");
          var nav_classes = navbar.classList;
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("active") === false) {
              nav_classes.toggle("active");
            }
          }
          else {
            if (nav_classes.contains("active") === true) {
              nav_classes.toggle("active");
            }
          }
        })
      })
    },
	};
</script>

<style lang="scss">

  header {
    //background-color: #101218;
    height: $header-fixed-height;
    line-height: $header-fixed-height;
    color: $color-light;
    display: block;
    position: relative;
    transition: 0.3s background-color;
    padding: 0 20px;
    margin: 0 auto;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, transparent 50%, #FFF 50%);
    -webkit-transition: background-position 0.3s;
    -moz-transition: background-position 0.3s;
    transition: background-position 0.3s;
    .container {
      max-width: 100%;
    }
    &:hover {
      background-position: 0 -100%;
       box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 0px 1px;
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
      box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 0px 1px;
      
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

  nav.navigation,
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
      color: #b3b9c1;
      font-weight: 400;
      text-decoration: none;
      transition: 0.2s all ease;
      letter-spacing: -0.012em;
      font-size: 15px;
      //border-bottom: 1px solid transparent;
      &:hover {
        color: #FFF;
        //border-bottom: 1px solid #FFF;
      }
      i {
        font-size: 19px;
        display: inline-block;
        margin-bottom: 3px;
        margin-left: 2px;
      }
    }
    .btn-signup {
      font-weight: 600;
      height: 40px;
      line-height: 40px;
      padding: 0 27px;
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

  .arrow {
    border: solid #969FAB;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    &.right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    &.left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }

    &.up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    &.down {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    } 
  }

</style>
