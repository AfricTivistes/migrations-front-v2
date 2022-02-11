const withDefaults = require('./utils/default.options')
const createPostsPage = require('./Pages/_posts')
const createPostPage = require('./Pages/_post')
const createPages = require('./Pages/_page')
const createCollectionPage = require('./Pages/_collection')

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
