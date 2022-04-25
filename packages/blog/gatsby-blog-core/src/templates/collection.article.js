import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import Collection from '../containers/Collection.Article'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {
  
  const langue = data.collectionInfo.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <Collection {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

export const pageQuery = graphql`
  query allArticleByCategoryQ(
    $skip: Int!
    $limit: Int!
    $slug: String!
    $includeExcerpt: Boolean!
    # $includeTimeToRead: Boolean!
    $imageQuality: Int!
  ) {
    collectionInfo: allWpCategory(filter: {slug: {eq: $slug}}) {
    nodes {
      id
      name
      slug
      description
      affichage {
        color
        icon
        widget
      }
      language {
        slug
      }
    }
  }

    posts: allWpPost(
      filter: {
        categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}
        status: {eq: "publish"}
      }
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
