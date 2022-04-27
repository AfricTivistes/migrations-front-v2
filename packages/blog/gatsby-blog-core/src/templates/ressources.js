import { graphql } from 'gatsby'
import PostPage from '../containers/Ressources'

export default PostPage

export const pageQuery = graphql`
  query RessourcePageQuery(
    $id: String!
    $previousId: String
    $nextId: String
    # $categoryId: String
    # $tagsIds: [String]
    # $hasTags: Boolean!
    # $includeExcerpt: Boolean!
    # $includeTimeToRead: Boolean!
    # $includeTableOfContents: Boolean!
    $imageQuality: Int!
  ) {
    post: allWpRessource(filter: {id: {eq: $id}}) {
      nodes {
        id
        title
        slug
        link
        excerpt
        date(formatString: "MMMM DD, YYYY")
        body: content
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
    }

    previous: allWpRessource(filter: {id: {eq: $previousId}}) {
      nodes {
        id
        slug
        title
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
    }

    next: allWpRessource(filter: {id: {eq: $nextId}}) {
      nodes {
        id
        slug
        title
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
    }
    
  }
`
