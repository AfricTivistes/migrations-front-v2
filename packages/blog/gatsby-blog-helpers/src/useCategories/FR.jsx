import { useStaticQuery, graphql } from 'gatsby'

const useCategoriesFR = () => {

  const { allWpCategory, allArticleCategory } = useStaticQuery(categoriesFRQuery)
  
  return {nodes: allWpCategory.nodes, categories: allArticleCategory.nodes}
}

const categoriesFRQuery = graphql`
  query categoriesFRQuery {
    allWpCategory(
    filter: {language: {code: {eq: FR}}, affichage: {widget: {eq: true}}}
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

export default useCategoriesFR
