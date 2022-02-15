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
      allWpPage(
        filter: {status: {eq: "publish"}}
        sort: { fields: [date, title], order: DESC }
        limit: 1000
      ) {
        nodes {
          id
          slug
          link
          teplateName: template {
            templateName
          }
          language {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }
  
  const { allWpPage } = result.data

  const pages = allWpPage.nodes
 
  pages.forEach(node => {
    const { id, slug, teplateName } = node
    
    const component = teplateName.templateName !== 'Default' ? require.resolve(`../templates/${teplateName.templateName}`) : template
    
    createPage({
      path: slug,
      component: component,
      context: {
        id,
        ...pageContextOptions
      }
    })
  })
}
