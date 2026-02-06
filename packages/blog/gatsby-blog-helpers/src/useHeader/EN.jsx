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

const useMenuHeaderEN = () => {
  if (isSnapshot && snapshotData?.headerMenus?.en) {
    return { nodes: snapshotData.headerMenus.en }
  }

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
