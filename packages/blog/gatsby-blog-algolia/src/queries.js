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
      language {
        slug
      }
    }
  }
}
`

const flatten = arr =>
  arr.map(({ ...rest }) => {
    const languageSlug = rest.language?.slug || 'fr'

    return {
      link: `/${languageSlug}/${rest.slug}`,
      excerpt: rest.excerpt ? rest.excerpt.replace(/(<([^>]+)>)/gi, '') : '',
      ...rest
    }
  })

const settings = {
  attributesToSnippet: ['excerpt:20']
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
