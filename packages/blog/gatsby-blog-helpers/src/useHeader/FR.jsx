import { useStaticQuery, graphql } from 'gatsby'

const useMenuHeaderFR = () => {

  const { allWpMenuItem } = useStaticQuery(menuFRQuery)
  
  return allWpMenuItem
}

const menuFRQuery = graphql`
  query menuHeaderFRQuery {
    allWpMenuItem(
    filter: {locations: {eq: GATSBY_HEADER_MENU}, parentId: {eq: null}}
    sort: {fields: order, order: ASC}
  ) {
    nodes {
      name: label
      slug: path
    }
  }
  }
`

export default useMenuHeaderFR
