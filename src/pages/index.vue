<template>
  <div>

    <Headline />

    <HomeSections />

  </div>

</template>

<script>
import Headline from '~/components/templates/HomeHeadline.vue'
import HomeSections from '~/components/templates/HomeSections.vue'

export default {
  components: {
    Headline,
    HomeSections
  }
}
</script>

<style lang="scss">
</style>
