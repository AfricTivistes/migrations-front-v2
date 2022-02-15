import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import PageContact from '../containers/Page.Contact'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {

  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <PageContact {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

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
