const postQuery = `{
  articles: allWpPost(
    filter: {
      status: {eq: "publish"}
    }
  ) {
    nodes {
      objectID: id
      title
      slug
      excerpt
      categories {
        nodes {
          name
          slug
        }
      }
      language {
        slug
      }
    }
  }
}
`

const flatten = arr =>
  arr.map(({ ...rest }) => ({
    category: { name: rest.categories.nodes[0].name},
    link: `/${rest.language.slug}/${rest.categories.nodes[0].slug}/${rest.slug}`,
    excerpt: rest.excerpt.replace(/(<([^>]+)>)/gi, ""),
    ...rest
  }))

const settings = {
  attributesToSnippet: ['excerpt:20'],
  attributeForDistinct: 'category.name'
}

const queries = [
  {
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'Articles',
    query: postQuery,
    settings,
    transformer: ({ data }) => flatten(data.articles.nodes)
  }
]

module.exports = queries
