import { useStaticQuery, graphql } from 'gatsby'

const useCategoriesEN = () => {

  const { allWpCategory, allArticleCategory } = useStaticQuery(categoriesENQuery)
  
  return {nodes: allWpCategory.nodes, categories: allArticleCategory.nodes}
}

const categoriesENQuery = graphql`
  query categoriesENQuery {
    allWpCategory(
    filter: {language: {code: {eq: EN}}, affichage: {widget: {eq: true}}}
  ) {
    nodes {
      id
      name
      slug
      totalCount: count
      affichage {
        color
        icon
      }
    }
  }

  allArticleCategory {
    nodes {
      ...ArticleCategory
    }
  }
  }
`

export default useCategoriesEN
