import { useStaticQuery, graphql } from 'gatsby'

const useLastFR = () => {

  const { allWpLexique } = useStaticQuery(lexiqueENQuery)
  
  return allWpLexique
}

const lexiqueENQuery = graphql`
  query lexiqueENQuery {
    allWpLexique(
    filter: {status: {eq: "publish"}, language: {code: {eq: EN}}}
    sort: {fields: [date], order: DESC}
    limit: 7
  ) {
    nodes {
      id
      slug
      title
      date
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
