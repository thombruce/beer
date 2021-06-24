<template lang='pug'>
article
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .where({ $and: [{ draft: { $ne: true } }, { redirect: { $type: 'undefined' } }] })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
