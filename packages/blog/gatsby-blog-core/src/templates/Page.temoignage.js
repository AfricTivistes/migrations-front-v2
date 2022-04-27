import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import PageTemoignage from '../containers/Page.Temoignage'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {

  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <PageTemoignage {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

export const pageQTe = graphql`
  query PostPageTe(
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
