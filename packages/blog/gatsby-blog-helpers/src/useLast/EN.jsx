import { useStaticQuery, graphql } from 'gatsby'

const useLastEN = () => {

  const { allWpPost } = useStaticQuery(lastENQuery)
  
  return allWpPost
}

const lastENQuery = graphql`
  query lastENQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "en"}} }
    sort: {fields: [date], order: DESC}
    limit: 7
  ) {
    nodes {
      id
      slug
      title
      date
      categories {
          nodes {
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
                  width: 380
                  height: 290
                  transformOptions: {cropFocus: CENTER}
                  outputPixelDensities: [0.5, 1]
                  quality: 70
                )
                ImageSharp_hero: gatsbyImageData(
                  width: 1600
                  height: 650
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

export default useLastEN
