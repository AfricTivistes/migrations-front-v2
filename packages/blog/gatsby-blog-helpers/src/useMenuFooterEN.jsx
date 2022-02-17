import { useStaticQuery, graphql } from 'gatsby'

const useMenuFooterEN = () => {

  const { allWpMenuItem } = useStaticQuery(menuENQuery)
  
  return allWpMenuItem
}

const menuENQuery = graphql`
  query menuFooterENQuery {
    allWpMenuItem(
    filter: {locations: {eq: GATSBY_FOOTER_MENU___EN}, parentId: {eq: null}}
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

export default useMenuFooterEN
