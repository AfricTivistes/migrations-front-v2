import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import Page from '../containers/Page'

export default function Template({ data }) {
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'en' && <Page data={data} />
      }
    </IntlContextConsumer>
  )
}


export const pageQ = graphql`
  query PostPageQ(
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
