import { useStaticQuery, graphql } from 'gatsby'

const useTopEN = () => {

  const { allWpPost } = useStaticQuery(topENQuery)
  
  return allWpPost
}

const topENQuery = graphql`
  query topENQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "en"}}, tags: {nodes: {elemMatch: {slug: {eq: "top"}}}}}
    sort: {fields: [date], order: DESC}
    limit: 10
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
                width: 360
                height: 470
                transformOptions: { cropFocus: CENTER }
                outputPixelDensities: [0.5, 1]
                quality: 70
              )
              ImageSharp_horizontal: gatsbyImageData(
                width: 807
                height: 400
                transformOptions: { cropFocus: CENTER }
                outputPixelDensities: [0.5, 1]
                quality: 70
              )
              ImageSharp_hero: gatsbyImageData(
                width: 1600
                height: 650
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

export default useTopEN
