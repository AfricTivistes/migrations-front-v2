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
  query allRessourcesByCategoryQ(
    $skip: Int!
    $limit: Int!
    $slug: String!
    $includeExcerpt: Boolean!
    # $includeTimeToRead: Boolean!
    $imageQuality: Int!
  ) {
    collectionInfo: allWpRessourceType(filter: {slug: {eq: $slug}}) {
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

    posts: allWpRessource(
      filter: {
        ressourcesType: {nodes: {elemMatch: {slug: {eq: $slug}}}}
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
      categories: ressourcesType {
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
