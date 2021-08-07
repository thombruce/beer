import tnt from './tnt.config.js'

import { $content } from '@nuxt/content'

export default [
  // Main feed - feed.json
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
          // content: post.body,
          image: `${tnt.url}${post.image ? post.image : tnt.image}`
        })
      })
    }, // The create function (see below)
    cacheTime: 1000 * 60 * 15, // How long should the feed be cached
    type: 'json1', // Can be: rss2, atom1, json1
    // data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
  },

  // Blog feed - blog.json
  {
    path: '/blog.json',
    async create(feed) {
      const posts = await $content('', { deep: true })
        .where({ $and: [{ draft: { $ne: true } }, { dir: { $in: ['/blog'] } }, { redirect: { $type: 'undefined' } }] })
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
    },
    cacheTime: 1000 * 60 * 15,
    type: 'json1'
  }
]
