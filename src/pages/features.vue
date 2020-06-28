<template>
  <div>

    <Headline />

    <FeaturesSections />

  </div>

</template>

<script>
import Headline from '~/components/sections/features/FeaturesHeadline.vue'
import FeaturesSections from '~/components/templates/FeaturesSections.vue'

export default {
  components: {
    Headline,
    FeaturesSections
  }
}
</script>

<style lang="scss">
</style>