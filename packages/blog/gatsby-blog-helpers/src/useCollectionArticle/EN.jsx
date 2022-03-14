import { useStaticQuery, graphql } from 'gatsby'

const useCollectionArticleEN = () => {

  const { allWpPost } = useStaticQuery(collectionArticleENQuery)
  
  return allWpPost
}

const collectionArticleENQuery = graphql`
  query collectionArticleENQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {ne: "news"}}}}}
    sort: {fields: [date], order: DESC}
    limit: 1000
  ) {
    group(field: categories___nodes___name, limit: 10) {
      categoryName: fieldValue
      nodes {
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
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
