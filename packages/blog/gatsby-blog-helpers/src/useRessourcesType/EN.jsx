import { useStaticQuery, graphql } from 'gatsby'

const useRessourcesTypeEN = () => {

  const { allWpRessourceType, allArticleCategory } = useStaticQuery(RessourcesTypeENQuery)
  
  return {nodes: allWpRessourceType.nodes, categories: allArticleCategory.nodes}
}

const RessourcesTypeENQuery = graphql`
  query RessourcesTypeENQuery {
    allWpRessourceType(
    filter: {language: {code: {eq: EN}}}
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

export default useRessourcesTypeEN
