import { useStaticQuery, graphql } from 'gatsby'

const useRessourcesTypeFR = () => {

  const { allWpRessourceType, allArticleCategory } = useStaticQuery(RessourcesTypeFRQuery)
  
  return {nodes: allWpRessourceType.nodes, categories: allArticleCategory.nodes}
}

const RessourcesTypeFRQuery = graphql`
  query RessourcesTypeFRQuery {
    allWpRessourceType(
    filter: {language: {code: {eq: FR}}}
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

export default useRessourcesTypeFR
