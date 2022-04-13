import { useStaticQuery, graphql } from 'gatsby'

const useLastFR = () => {

  const { allWpLexique } = useStaticQuery(lexiqueFRQuery)
  
  return allWpLexique
}

const lexiqueFRQuery = graphql`
  query lexiqueFRQ {
    allWpLexique(
    filter: {status: {eq: "publish"}, language: {code: {eq: FR}}}
    sort: {fields: [title], order: ASC}
  ) {
    nodes {
      id
      slug
      title
      date
      content
      thumbnail: featuredImage {
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
