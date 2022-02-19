import { useStaticQuery, graphql } from 'gatsby'

const useMenuHeaderEN = () => {

  const { allWpMenuItem } = useStaticQuery(menuENQuery)
  
  return allWpMenuItem
}

const menuENQuery = graphql`
  query menuHeaderENQuery {
    allWpMenuItem(
    filter: {locations: {eq: GATSBY_HEADER_MENU___EN}, parentId: {eq: null}}
    sort: {fields: order, order: ASC}
  ) {
    nodes {
      name: label
      slug: path
    }
  }
  }
`

export default useMenuHeaderEN
