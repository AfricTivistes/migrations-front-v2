import { graphql } from 'gatsby'
import PageContact from '../containers/Page.Contact'

export default PageContact

export const pageQC = graphql`
  query PostPageQC(
    $id: String!
  ) {
    page: allWpPage(filter: {id: {eq: $id}}) {
        nodes {
          id
          title
          content
          language {
            slug
          }
        }
      }
  }
`
