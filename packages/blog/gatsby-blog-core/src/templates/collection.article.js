import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import Collection from '../containers/Collection.Article'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) =>
      // Avec les catégories désactivées côté WPGraphQL, on n'applique plus de
      // filtrage par catégorie ici. On affiche simplement la collection telle
      // qu'elle est fournie au template.
      <Collection {...props} data={data} />
    }
  </IntlContextConsumer>
)

export const pageQuery = graphql`
  query allArticleByCategoryQ(
    $skip: Int!
    $limit: Int!
    $includeExcerpt: Boolean!
    $imageQuality: Int!
  ) {
    posts: allWpPost(
      filter: { status: { eq: "publish" } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
      id
      title
      slug
      excerpt @include(if: $includeExcerpt)
      # timeToRead @include(if: $includeTimeToRead)
      date(formatString: "MMMM DD, YYYY")
      author: redactions {
          auteur {
            ... on WpAuteur {
              id
              slug
              title
              featuredImage {
              node {
                localFile {
                  childImageSharp {
                    __typename
                    ... on ImageSharp {
                      ImageSharp_small: gatsbyImageData(
                        width: 48
                        height: 48
                        layout: FIXED
                        transformOptions: { cropFocus: NORTH }
                        placeholder: TRACED_SVG
                        quality: 75
                      )
                      ImageSharp_regular: gatsbyImageData(
                        width: 150
                        height: 150
                        layout: FIXED
                        transformOptions: { cropFocus: NORTH }
                        placeholder: TRACED_SVG
                        quality: 80
                      )
                    }
                  }
                }
              }
            }
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
                  quality: $imageQuality
                )
                ImageSharp_hero: gatsbyImageData(
                  width: 1600
                  height: 650
                  transformOptions: {cropFocus: CENTER}
                  outputPixelDensities: [0.5, 1]
                  quality: $imageQuality
                )
              }
            }
          }
        }
      }
    }
    pageInfo {
      pageCount
      hasPreviousPage
      hasNextPage
      currentPage
    }
    totalCount
    }
  }
`
