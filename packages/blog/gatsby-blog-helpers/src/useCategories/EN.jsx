import { useStaticQuery, graphql } from 'gatsby'

const useCategoriesEN = () => {
  const { allArticleCategory } = useStaticQuery(categoriesENQuery)
  // WpCategory exclu du schéma WordPress : nodes vides pour compatibilité UI
  return { nodes: [], categories: allArticleCategory?.nodes ?? [] }
}

const categoriesENQuery = graphql`
  query categoriesENQuery {
    allArticleCategory {
      nodes {
        ...ArticleCategory
      }
    }
  }
`

export default useCategoriesEN
