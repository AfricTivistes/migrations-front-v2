import { useStaticQuery, graphql } from 'gatsby'
import dedupe from 'dedupe'

export const useBlogAuthors = () => {
  const { allWpAuteur } = useStaticQuery(authorsq)
  return allWpAuteur.nodes
    ? dedupe(allWpAuteur.nodes, node => node.slug)
    : null
}

const authorsQuery = graphql`
  query allArticleAuthorQuery {
    allArticleAuthor {
      nodes {
        ...ArticleAuthor
      }
    }
  }
`
const authorsq = graphql`
  query MyQuery  {
  allWpAuteur (filter: {language: {slug: {eq: "fr"}}}){
    nodes {
    id
    slug
    name: title
    content
    excerpt
    social {
      facebook
      instagram
      linkedin
      twitter
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
      ... on ContentfulAsset {
        ContentfulAsset_small: gatsbyImageData(
          width: 48
          height: 48
          layout: FIXED
          cropFocus: TOP
          resizingBehavior: THUMB
          quality: 75
        )
        ContentfulAsset_regular: gatsbyImageData(
          width: 150
          height: 150
          layout: FIXED
          cropFocus: TOP
          resizingBehavior: THUMB
          quality: 80
        )
      }
      ... on SanityImageAsset {
        SanityImageAsset_small: gatsbyImageData(
          width: 48
          height: 48
          layout: FIXED
          placeholder: NONE
          fit: CLIP
        )
        SanityImageAsset_regular: gatsbyImageData(
          width: 150
          height: 150
          layout: FIXED
          placeholder: NONE
          fit: CLIP
        )
              }
            }
          }
  }
  }
}
`