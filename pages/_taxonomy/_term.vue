<template lang='pug'>
article
  header
    h1 {{ term.title }}

  div
    article(v-for='article in articles')
      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div
        p {{ article.description }}
</template>

<script>
export default {
  async asyncData ({ $content, $taxonomies, params }) {
    const taxonomy = params.taxonomy

    const term = await $taxonomies(taxonomy, '', { deep: true }).find(params.term)

    const articles = await $content('', { deep: true })
      .where({
        $and: [
          { draft: { $ne: true } },
          { $or: [{ [taxonomy]: { $contains: term.title } }, { [taxonomy]: { $eq: term.title } }] }
        ]
      })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { term, articles }
  }
}
</script>
