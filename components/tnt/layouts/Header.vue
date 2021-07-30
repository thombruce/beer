<template lang='pug'>
header
  div
    NuxtLink(to='/')
      NuxtImg(v-if='$colorMode.value === `dark`' src='/freeasinbeer_dark.png' width='400px')
      NuxtImg(v-else src='/freeasinbeer.png' width='400px')      
  div
    nav
      ul
        li(v-for='(item, i) in items' :key='i')
          NuxtLink(:to='item.to')
            span {{ item.title }}
    TntUIDarkmodeToggle
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
    & > nav {
      & ul {
        @apply flex;
        & li a {
          @apply block px-3 md:px-4;
        }
      }
    }
    & > button, & > a, & > span:not(:first-of-type) {
      @apply block px-4;
    }
  }
}
</style>