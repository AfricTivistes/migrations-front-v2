const queryMobileMenu = require('../utils/queryMobileMenu')

module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template }
) => {
  const { createPage } = actions
  const { pageContextOptions } = pluginOptions

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  const result = await graphql(`
    {
      allWpPost(
        filter: {status: {eq: "publish"}}
        sort: { fields: [date, title], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            categories {
              nodes {
                id
                slug
              }
            }
            tags {
              nodes {
                id
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allWpPost } = result.data
  const posts = allWpPost.edges

  posts.forEach(({ node }, index) => {
    const { id, slug, categories, tags } = node

    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    //For querying related posts based on tags and categories
    const categoryId = (categories && categories.nodes.map(({ id }) => id)) || []
    const categorySlug = (categories && categories.nodes.map(({ slug }) => slug)) || []
    const tagsIds = (tags && tags.nodes.map(({ id }) => id)) || []
    const hasTags = tagsIds.length > 0
    
    categorySlug.forEach(category => {
      
      createPage({
        path: `${category}/${slug}`,
        component: template,
        context: {
          id,
          categoryId,
          tagsIds,
          hasTags,
          previousId: previous ? previous.node.id : undefined,
          nextId: next ? next.node.id : undefined,
          ...pageContextOptions
        }
      })
    
    })

  })
}
