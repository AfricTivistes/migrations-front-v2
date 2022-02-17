import { useStaticQuery, graphql } from 'gatsby'

const useMenuFooterFR = () => {

  const { allWpMenuItem } = useStaticQuery(menuFRQuery)
  
  return allWpMenuItem
}

const menuFRQuery = graphql`
  query menuFooterFRQuery {
    allWpMenuItem(
    filter: {locations: {eq: GATSBY_FOOTER_MENU}, parentId: {eq: null}}
    sort: {fields: order, order: ASC}
  ) {
    nodes {
      id
      label
      childItems {
        nodes {
          label
          path
        }
      }
    }
  }
  }
`

export default useMenuFooterFR
