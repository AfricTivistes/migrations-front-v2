import { useStaticQuery, graphql } from 'gatsby'

const useHeroDialogueFR = () => {

  const { allWpPost } = useStaticQuery(heroDialogueFRQuery)
  
  return allWpPost
}

const heroDialogueFRQuery = graphql`
  query heroDialogueFRQuery {
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
      featuredImage {
        node {
          localFile {
            childImageSharp {
              __typename
              ... on ImageSharp {
                ImageSharp_vertical: gatsbyImageData(
                  width: 367
                  height: 474
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

export default useHeroDialogueFR
