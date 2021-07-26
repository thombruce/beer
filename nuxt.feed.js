import tnt from './tnt.config.js'

import { $content } from '@nuxt/content'

export default [
  {
    path: '/feed.json', // The route to your feed.
    async create(feed) {
      const posts = await $content('', { deep: true })
        .where({ $and: [{ draft: { $ne: true } }, { dir: { $in: ['/products'] } }, { redirect: { $type: 'undefined' } }] })
        .sortBy('date', 'desc')
        .fetch()
        .catch(() => {})

      posts.forEach(post => {
        const url = `${tnt.url}${post.path}`

        feed.addItem({
          title: post.title,
          id: url,
          link: url,
          // author: post.authors,
          date: new Date(post.date),
          description: post.description,
          // content: post.body
        })
      })
    }, // The create function (see below)
    cacheTime: 1000 * 60 * 15, // How long should the feed be cached
    type: 'json1', // Can be: rss2, atom1, json1
    // data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
  }
]
