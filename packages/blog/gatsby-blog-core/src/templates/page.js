import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import Page from '../containers/Page'
import NotFound from '../Pages/404'

export default ({data, ...props}) => {
  
  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <Page {...props} data={data} /> : <NotFound {...props}/>
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
