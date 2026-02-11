import { useStaticQuery, graphql } from 'gatsby'

const useCategoriesFR = () => {
  const { allArticleCategory } = useStaticQuery(categoriesFRQuery)
  // WpCategory exclu du schéma WordPress : nodes vides pour compatibilité UI
  return { nodes: [], categories: allArticleCategory?.nodes ?? [] }
}

const categoriesFRQuery = graphql`
  query categoriesFRQuery {
    allArticleCategory {
      nodes {
        ...ArticleCategory
      }
    }
  }
`

export default useCategoriesFR
