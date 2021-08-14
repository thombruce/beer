<template lang='pug'>
div
  NuxtLink(to='/')
    NuxtImg(src='/freeasinbeer_dark.png' width='400px')
    // NuxtImg(v-else src='/freeasinbeer.png' width='400px')
</template>

<script>
export default {
  data () {
    return {
      title: this.$nuxt.$options.head.title
    }
  }
}
</script>

<style lang='postcss' scoped>
div {
  @apply m-auto;
}
</style>
