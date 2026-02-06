import { useStaticQuery, graphql } from 'gatsby'

const useMenuHeaderEN = () => {

  const { allWpMenuItem } = useStaticQuery(menuENQuery)
  
  return allWpMenuItem
}

const menuENQuery = graphql`
  query menuHeaderENQuery {
    allWpMenuItem(
      filter: { locations: { eq: GATSBY_HEADER_MENU___EN } }
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        id
        databaseId
        parentDatabaseId
        label
        path
        url
      }
    }
  }
`

export default useMenuHeaderEN
