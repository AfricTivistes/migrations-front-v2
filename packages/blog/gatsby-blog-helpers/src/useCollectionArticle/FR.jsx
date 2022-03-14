import { useStaticQuery, graphql } from 'gatsby'

const useCollectionArticleEN = () => {

  const { allWpPost } = useStaticQuery(collectionArticleFRQuery)
  
  return allWpPost
}

const collectionArticleFRQuery = graphql`
  query collectionArticleFRQuery {
    allWpPost(
    filter: {status: {eq: "publish"}, language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {ne: "actualites"}}}}}
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
