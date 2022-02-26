import { useStaticQuery, graphql } from 'gatsby'

const useHeroFR = () => {

  const { allWpPost } = useStaticQuery(heroFRQuery)
  
  return allWpPost
}

const heroFRQuery = graphql`
  query heroFRQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "fr"}}, tags: {nodes: {elemMatch: {name: {eq: "une"}}}}}
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

export default useHeroFR
