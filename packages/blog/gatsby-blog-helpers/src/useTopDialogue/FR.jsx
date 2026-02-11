import { useStaticQuery, graphql } from 'gatsby'

const useTopDialogueFR = () => {

  const { allWpPost } = useStaticQuery(topDialogueFRQuery)
  
  return allWpPost
}

const topDialogueFRQuery = graphql`
  query topDialogueFRQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "fr"}}, tags: {nodes: {elemMatch: {slug: {eq: "haut"}}}}}
    sort: {fields: [date], order: DESC}
    limit: 10
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
                  width: 287
                  height: 290
                  transformOptions: { cropFocus: CENTER }
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

export default useTopDialogueFR
