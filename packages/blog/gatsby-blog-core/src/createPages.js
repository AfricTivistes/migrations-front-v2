const withDefaults = require('./utils/default.options')
const createPostsPage = require('./Pages/_posts')
const createArticlePage = require('./Pages/_article')
const createRessourcesPage = require('./Pages/_ressources')
const createPages = require('./Pages/_page')
const createCollectionPage = require('./Pages/_collection')
const createCollectionArticle = require('./Pages/_collectionArticle')
const createCollectionRessources = require('./Pages/_collectionRessources')

module.exports = async (helpers, pluginOptions) => {
  pluginOptions = withDefaults(pluginOptions)

  /**
   * Posts (home) page
   */
  await createPostsPage(helpers, pluginOptions, {
    template: require.resolve('./templates/posts')
  })

  /**
   * Single article pages
   */
  await createArticlePage(helpers, pluginOptions, {
    template: require.resolve('./templates/article')
  })

  /**
   * Single article pages
   */
  await createRessourcesPage(helpers, pluginOptions, {
    template: require.resolve('./templates/ressources')
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
  await createCollectionArticle(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.article'),
    slugField: 'categories___nodes___slug'
  })

  /**
   * Category ressources pages
   */
  await createCollectionRessources(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.ressources'),
    slugField: 'ressourcesType___nodes___slug'
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
