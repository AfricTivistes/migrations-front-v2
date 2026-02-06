import { useStaticQuery, graphql } from 'gatsby'

const isSnapshot =
  typeof process !== 'undefined' &&
  process.env.GATSBY_USE_WP_SNAPSHOT === 'true'

let snapshotData = null
if (isSnapshot) {
  // Chargé uniquement en mode snapshot (dev local)
  // eslint-disable-next-line global-require, import/no-dynamic-require
  snapshotData = require('../../wp-snapshot.json')
}

const useMenuHeaderFR = () => {
  if (isSnapshot && snapshotData?.headerMenus?.fr) {
    return { nodes: snapshotData.headerMenus.fr }
  }

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
