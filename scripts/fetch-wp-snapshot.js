/* eslint-disable no-console */
/**
 * Simple snapshot script to fetch WordPress header menus (FR/EN)
 * and store them locally for fast local development.
 *
 * Usage:
 *   WP_GRAPHQL_URL=https://migration.africtivistes.org/graphql npm run wp:snapshot
 *
 * Output:
 *   packages/blog/gatsby-blog-helpers/wp-snapshot.json
 */

const fs = require('fs')
const path = require('path')

const ENDPOINT =
  process.env.WP_GRAPHQL_URL ||
  'https://migration.africtivistes.org/graphql'

const SNAPSHOT_PATH = path.join(
  __dirname,
  '..',
  'packages',
  'blog',
  'gatsby-blog-helpers',
  'wp-snapshot.json'
)

async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(
      `GraphQL request failed (${res.status}): ${text.slice(0, 300)}`
    )
  }

  const json = await res.json()
  if (json.errors && json.errors.length) {
    console.error(JSON.stringify(json.errors, null, 2))
    throw new Error('GraphQL returned errors')
  }
  return json.data
}

async function main() {
  console.log(`Fetching WordPress snapshot from ${ENDPOINT} ...`)

  const query = /* GraphQL */ `
    query SnapshotData {
      menuItemsFR: menuItems(where: { location: GATSBY_HEADER_MENU }) {
        nodes {
          databaseId
          parentDatabaseId
          label
          path
          url
        }
      }
      menuItemsEN: menuItems(where: { location: GATSBY_HEADER_MENU___EN }) {
        nodes {
          databaseId
          parentDatabaseId
          label
          path
          url
        }
      }
      menuItemsEN: menuItems(where: { location: GATSBY_HEADER_MENU___EN }) {
        nodes {
          databaseId
          parentDatabaseId
          label
          path
          url
        }
      }
      lexiquesFR: lexiques(
        where: { status: PUBLISH, language: FR }
        first: 500
      ) {
        nodes {
          databaseId
          slug
          title
          content
        }
      }
      lexiquesEN: lexiques(
        where: { status: PUBLISH, language: EN }
        first: 500
      ) {
        nodes {
          databaseId
          slug
          title
          content
        }
      }
    }
  `

  const data = await fetchGraphQL(query)

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    endpoint: ENDPOINT,
    headerMenus: {
      fr: data.menuItemsFR?.nodes || [],
      en: data.menuItemsEN?.nodes || []
    },
    lexique: {
      fr: data.lexiquesFR?.nodes || [],
      en: data.lexiquesEN?.nodes || []
    }
  }

  fs.mkdirSync(path.dirname(SNAPSHOT_PATH), { recursive: true })
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2), 'utf8')

  console.log(`Snapshot written to ${SNAPSHOT_PATH}`)
}

main().catch(err => {
  console.error('Failed to fetch WordPress snapshot')
  console.error(err)
  process.exit(1)
})

