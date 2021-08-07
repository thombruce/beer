<template lang='pug'>
header
  div
    NuxtLink(to='/')
      NuxtImg(src='/freeasinbeer_dark.png' width='400px')
      // NuxtImg(v-else src='/freeasinbeer.png' width='400px')
  .navbar
    nav
      NuxtLink.btn.btn-ghost(v-for='(item, i) in items' :key='i' :to='item.to')
        span {{ item.title }}
    TntUIThemeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Products',
          to: '/products'
        },
        {
          title: 'Credits',
          to: '/credits'
        }
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
header {
  @apply flex flex-col justify-center py-5 px-4;
  & > div:first-of-type {
    @apply m-auto;
  }
  & > div {
    @apply flex justify-center;
  }
}
</style>