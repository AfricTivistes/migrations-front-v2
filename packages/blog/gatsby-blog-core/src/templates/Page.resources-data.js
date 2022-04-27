import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import PageResourcesdata from '../containers/Page.Resources-data'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {

  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <PageResourcesdata {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

export const pageQFa = graphql`
  query PostPageQRd(
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
