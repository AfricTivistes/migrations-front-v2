import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import PageContribution from '../containers/Page.Contribution'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {

  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
              currentLocale === langue ? <PageContribution {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

export const pageQCo = graphql`
  query PostPageCo(
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
