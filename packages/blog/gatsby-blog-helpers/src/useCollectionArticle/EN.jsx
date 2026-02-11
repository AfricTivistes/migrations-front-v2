import { useStaticQuery, graphql } from 'gatsby'

const useCollectionArticleEN = () => {

  const { allWpPost } = useStaticQuery(collectionArticleENQuery)
  
  return allWpPost
}

const collectionArticleENQuery = graphql`
  query collectionArticleENQuery {
    allWpPost(
      filter: { status: { eq: "publish" }, language: { code: { eq: EN } } }
      sort: { fields: [date], order: DESC }
      limit: 1000
    ) {
      group(field: language___code, limit: 10) {
        categoryName: fieldValue
        nodes {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  __typename
                  ... on ImageSharp {
                    ImageSharp_vertical: gatsbyImageData(
                      width: 380
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
  }
`

export default useCollectionArticleEN
