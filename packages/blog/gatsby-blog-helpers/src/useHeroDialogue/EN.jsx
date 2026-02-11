import { useStaticQuery, graphql } from 'gatsby'

const useHeroDialogueEN = () => {

  const { allWpPost } = useStaticQuery(heroDialogueENQuery)
  
  return allWpPost
}

const heroDialogueENQuery = graphql`
  query heroDialogueENQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {slug: {eq: "en"}}, tags: {nodes: {elemMatch: {name: {eq: "featured"}}}}}
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

export default useHeroDialogueEN
