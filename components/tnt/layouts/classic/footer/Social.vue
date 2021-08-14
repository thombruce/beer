<template lang='pug'>
.social(v-if='social')
  ul
    li(v-for='(item, i) in social' :key='i')
      a(:href='item.to' target='_blank')
        TntSimpleIcon(:icon='item.icon')
</template>

<script>
export default {
  data () {
    return {
      social: [
        {
          icon: 'facebook',
          title: 'Facebook',
          to: 'https://facebook.com/thombruce'
        },
        {
          icon: 'twitter',
          title: 'Twitter',
          to: 'https://twitter.com/thombruce'
        },
        {
          icon: 'github',
          title: 'GitHub',
          to: 'https://github.com/thombruce'
        },
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
  .social {
    @apply text-3xl;
    & ul {
      @apply flex justify-center;
      & li a {
        @apply block px-4;
      }
    }    
  }
</style>
