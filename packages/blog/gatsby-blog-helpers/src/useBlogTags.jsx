import { useStaticQuery, graphql } from 'gatsby'

export const useBlogTags = () => {
  const { allWpTag } = useStaticQuery(tagsQuery)
  return allWpTag.edges.map(({ node }) => node)
   || []
}

const tagsQuery = graphql`
query allArticleTagQuery {
  allWpTag {
    edges {
      node {
        name
      }
    }
  }
}
`
