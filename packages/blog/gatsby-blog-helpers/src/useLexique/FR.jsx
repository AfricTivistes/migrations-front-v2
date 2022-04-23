import { useStaticQuery, graphql } from 'gatsby'

const useLastFR = () => {

  const { allWpLexique } = useStaticQuery(lexiqueFRQuery)
  
  return allWpLexique
}

const lexiqueFRQuery = graphql`
  query lexiqueFRQuery {
    allWpLexique(
    filter: {status: {eq: "publish"}, language: {code: {eq: FR}}}
    sort: {fields: [date], order: DESC}
  ) {
    nodes {
      id
      slug
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              __typename
              ... on ImageSharp {
                ImageSharp_vertical: gatsbyImageData(
                  width: 380
                  height: 290
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

export default useLastFR
