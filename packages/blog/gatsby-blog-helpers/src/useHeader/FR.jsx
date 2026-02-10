import { useStaticQuery, graphql } from 'gatsby'

const useMenuHeaderFR = () => {
  const { allWpMenuItem } = useStaticQuery(menuFRQuery)
  return allWpMenuItem
}

const menuFRQuery = graphql`
  query menuHeaderFRQuery {
    allWpMenuItem(
      filter: { locations: { eq: GATSBY_HEADER_MENU } }
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

export default useMenuHeaderFR
