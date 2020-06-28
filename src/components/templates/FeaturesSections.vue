<!--
  *
  = Features Sections
  = Includes all the Features
  *
-->

<template>
  <div>
    <div class="features-nav">
      <div class="container">
        <ul>
          <li>
            <a href="#">Annotations</a>
          </li>
          <li>
            <a href="#">Visualizing</a>
          </li>
          <li>
            <a href="#">Differences</a>
          </li>
          <li>
            <a href="#">Phasing</a>
          </li>
          <li>
            <a href="#">Device Screens</a>
          </li>
          <li>
            <a href="#">Collaboration</a>
          </li>
        </ul>
      </div>
    </div>

    <FeaturesSided />
  </div>
</template>

<script>
import FeaturesSided from "~/components/sections/features/FeaturesSided.vue";
export default {
  components: {
    FeaturesSided
  }
};
</script>

<style lang="scss" scoped>
.features-nav {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  ul {
    display: flex;
    height: 55px;
    line-height: 55px;
    li {
      flex: 1;
      list-style-type: none;
      font-size: 16px;
      text-align: center;
      a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
      }
    }
  }
}
</style>