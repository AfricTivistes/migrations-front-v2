import { useStaticQuery, graphql } from 'gatsby'

const useLastFR = () => {

  const { allWpLexique } = useStaticQuery(lexiqueENQuery)
  
  return allWpLexique
}

const lexiqueENQuery = graphql`
  query lexiqueENQ {
    allWpLexique(
    filter: {status: {eq: "publish"}, language: {code: {eq: EN}}}
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
