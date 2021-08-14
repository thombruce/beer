<template lang='pug'>
.copyright
  | &copy;
  |
  a(href='https://thombruce.com/') Thom Bruce
  |
  | 2021 - {{ new Date().getFullYear() }}
</template>

<style lang='postcss' scoped>
.copyright {
  @apply pt-4 text-center text-sm;
  & a {
    @apply link;
  }
}
</style>
