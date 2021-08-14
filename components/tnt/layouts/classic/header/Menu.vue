<template lang='pug'>
.navbar
  nav
    template(v-for='item in items')
      NuxtLink.btn.btn-ghost(:key='item.to' :to='item.to')
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
.navbar {
  @apply flex justify-center;
}
</style>
