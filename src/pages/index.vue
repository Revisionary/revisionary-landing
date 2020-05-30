<template>
  <div class="container">
    <div>

      <logo />
      <h1 class="title">Revisionary App</h1>
      <h2 class="subtitle">Revisionary App Landing Page</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <nuxt-link class="button--grey" to="contact">Contact</nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
</style>
