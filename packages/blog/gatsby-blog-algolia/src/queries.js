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
  arr.map(({ ...rest }) => {
    // Vérifier si les catégories existent
    const category = rest.categories?.nodes?.[0]
    const categoryName = category?.name || 'Uncategorized'
    const categorySlug = category?.slug || 'uncategorized'
    const languageSlug = rest.language?.slug || 'fr'
    
    return {
      category: { name: categoryName },
      link: `/${languageSlug}/${categorySlug}/${rest.slug}`,
      excerpt: rest.excerpt ? rest.excerpt.replace(/(<([^>]+)>)/gi, "") : "",
      ...rest
    }
  })

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
