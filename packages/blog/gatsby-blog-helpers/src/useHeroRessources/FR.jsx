import { useStaticQuery, graphql } from 'gatsby'

const useRessourcesFR = () => {

  const { allWpRessource } = useStaticQuery(RessourceFRQuery)
  
  return allWpRessource
}

const RessourceFRQuery = graphql`
  query RessourceFRQuery {
    allWpRessource(
    filter: {status: {eq: "publish"}, language: {code: {eq: FR}}}
    sort: {fields: [date], order: DESC}
  ) {
    nodes {
      id
      slug
      title
      excerpt
      categories: ressourcesType{
				nodes{
					id
          name
          slug
          affichage {
            color
          }
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              __typename
              ... on ImageSharp {
                ImageSharp_vertical: gatsbyImageData(
                  width: 360
                  height: 470
                  transformOptions: {cropFocus: CENTER}
                  outputPixelDensities: [0.5, 1]
                  quality: 70
                )
              }
            }
          }
        }
      }
    }
  }
  }
`

export default useRessourcesFR
