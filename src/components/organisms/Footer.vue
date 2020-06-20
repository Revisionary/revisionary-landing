<template>
  <div>
    <footer>
      <div class="container xl-middle">
        <div class="main-wrap wrap xl-flexbox xl-gutter-24 xl-left xl-top xl-between">
          <div class="col">
            <span class="footer-nav-title">Company</span>
            <ul class="footer-nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <span class="footer-nav-title">Product</span>
            <ul class="footer-nav">
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#">Release Notes</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <span class="footer-nav-title">Use Cases</span>
            <ul class="footer-nav">
              <li>
                <a href="#">For Designers</a>
              </li>
              <li>
                <a href="#">For Agencies</a>
              </li>
              <li>
                <a href="#">For Corporations</a>
              </li>
              <li>
                <a href="#">For Startups</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <span class="footer-nav-title">Resources</span>
            <ul class="footer-nav">
              <li>
                <a href="#">Comparisons</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <span class="footer-nav-title">Connect</span>
            <ul class="footer-nav">
              <li>
                <a href="#">
                  <i class="icon icon_facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon icon_twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon icon_linkedin"></i> Linkedin
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon icon_angellist"></i> AngelList
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div class="bottom">
      <div class="container">
        <div class="wrap xl-gutter-24">
          <div class="col xl-8-12">
            <ul class="legal-nav">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div class="col xl-4-12 xl-right">
            <span class="copyright">© 2020 Revisionary.com, Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #fff;
  color: $color-light;
  padding: 100px 0 50px 0;
  border-top: 1px solid rgba(0,0,0,.05);
}

.footer-nav-title {
  font-weight: 500;
  font-size: 15px;
  //letter-spacing: -0.02em;
  color: $title-color;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 10px;
}

.footer-nav {
  list-style-type: none;
  padding: 0;
  li {
    a {
      display: inline-block;
      font-size: 16px;
      letter-spacing: -0.005em;
      color: $p-low;
      text-decoration: none;
      padding: 7px 0;
      transition: 0.3s all;
      i {
        background: rgba(255, 255, 255, 0.1);
        color: $p-low;
        width: 24px;
        height: 24px;
        vertical-align: middle;
        border-radius: 8px;
        line-height: 25px;
        text-align: center;
        margin-right: 10px;
        font-size: 12px;
      }
    }
    &:hover {
      a {
        color: $title-color;
      }
    }
  }
}

.bottom {
  background-color: #FFF;
  height: 90px;
  line-height: 90px;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  .brand {
    display: inline-block;
    img {
      vertical-align: middle;
      width: 160px;
    }
  }
}

.legal-nav {
  display: inline-block;
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    a {
      display: inline-block;
      font-size: 16px;
      letter-spacing: -0.005em;
      color: $p-low;
      text-decoration: none;
      padding: 0 12px;
      transition: 0.3s all;
    }
    &:hover {
      a {
        color: $title-color;
      }
    }
    &:first-child {
      a {
        padding-left: 0;
      }
    }
  }
}

.copyright {
  font-size: 16px;
  letter-spacing: -0.005em;
  color: $p-low;
}
</style>