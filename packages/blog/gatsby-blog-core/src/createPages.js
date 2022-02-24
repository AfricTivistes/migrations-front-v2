const withDefaults = require('./utils/default.options')
const createPostsPage = require('./Pages/_posts')
const createPostPage = require('./Pages/_post')
const createArticlePage = require('./Pages/_article')
const createPages = require('./Pages/_page')
const createCollectionPage = require('./Pages/_collection')
const createCollectionArticle = require('./Pages/_collectionArticle')

module.exports = async (helpers, pluginOptions) => {
  pluginOptions = withDefaults(pluginOptions)

  /**
   * Posts (home) page
   */
  await createPostsPage(helpers, pluginOptions, {
    template: require.resolve('./templates/posts')
  })

  /**
   * Single post pages
   */
  await createPostPage(helpers, pluginOptions, {
    template: require.resolve('./templates/post')
  })

  /**
   * Single article pages
   */
  await createArticlePage(helpers, pluginOptions, {
    template: require.resolve('./templates/article')
  })

  /**
   * Single post pages
   */
  await createPages(helpers, pluginOptions, {
    template: require.resolve('./templates/page')
  })

  /**
   * Category posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.category'),
    slugField: 'category___slug'
  })

  /**
   * Category posts pages
   */
  await createCollectionArticle(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.article'),
    slugField: 'categories___nodes___slug'
  })

  /**
   * Tag posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.tag'),
    slugField: 'tags___slug'
  })

  /**
   * Author posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.author'),
    slugField: 'author___slug'
  })
}
