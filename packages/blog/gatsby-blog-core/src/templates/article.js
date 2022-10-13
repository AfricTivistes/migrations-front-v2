import { graphql } from 'gatsby'
import PostPage from '../containers/Article'

export default PostPage

export const pageQuery = graphql`
  query ArticlePageQuery(
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
    post: allWpPost(filter: {id: {eq: $id}}) {
      nodes {
        id
        title
        slug
        link
        excerpt
        date(formatString: "MMMM DD, YYYY")
        body: content
        author: redactions {
          auteur {
            ... on WpAuteur {
              id
              slug
              title
              excerpt
              content
              competences {
                nodes {
                  name
                }
              }
              social{
								facebook
                twitter
                instagram
                linkedin
              }
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
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }

    previous: allWpPost(filter: {id: {eq: $previousId}}) {
      nodes {
        id
        slug
        title
        categories {
          nodes {
            id
            slug
          }
        }
      }
    }

    next: allWpPost(filter: {id: {eq: $nextId}}) {
      nodes {
        id
        slug
        title
        categories {
          nodes {
            id
            slug
          }
        }
      }
    }
    
  }
`
