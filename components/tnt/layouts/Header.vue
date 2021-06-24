<template lang='pug'>
header
  span.py-24
    NuxtLink(to='/') Free as in Beer
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
  & > span:first-of-type {
    @apply block w-min m-auto text-7xl sm:text-9xl text-black dark:text-white font-poster;
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