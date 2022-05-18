import { graphql } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import PageApropos from '../containers/Page.A-propos'
import NotFound from '../Pages/404'

export default ({ data, ...props }) => {

  const langue = data.page.nodes[0].language.slug

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === langue ? <PageApropos {...props} data={data} /> : <NotFound {...props} />
      }
    </IntlContextConsumer>
  )
}

export const pageQAp = graphql`
  query PostPageQAp(
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
          avatar: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1140
                    height: 500
                    transformOptions: { cropFocus: NORTH }
                  )
                }
              }
            }
          }
        }
      }
  }
`
