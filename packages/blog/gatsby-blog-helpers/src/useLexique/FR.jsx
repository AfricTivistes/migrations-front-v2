import { useStaticQuery, graphql } from 'gatsby'

const isSnapshot =
  typeof process !== 'undefined' &&
  process.env.GATSBY_USE_WP_SNAPSHOT === 'true'

let snapshotData = null
if (isSnapshot) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  snapshotData = require('../../wp-snapshot.json')
}

const useLastFR = () => {
  if (isSnapshot && snapshotData?.lexique?.fr) {
    // On renvoie un objet qui ressemble à allWpLexique
    return {
      nodes: snapshotData.lexique.fr.map(node => ({
        id: String(node.databaseId || node.id),
        slug: node.slug,
        title: node.title,
        // Pas d'image locale en snapshot: featuredImage restera undefined
        featuredImage: null
      }))
    }
  }

  const { allWpLexique } = useStaticQuery(lexiqueFRQuery)

  return allWpLexique
}

const lexiqueFRQuery = graphql`
  query lexiqueFRQuery {
    allWpLexique(
      filter: { status: { eq: "publish" }, language: { code: { eq: FR } } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                __typename
                ... on ImageSharp {
                  ImageSharp_vertical: gatsbyImageData(
                    width: 380
                    height: 290
                    transformOptions: { cropFocus: CENTER }
                    outputPixelDensities: [0.5, 1]
                    quality: 70
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

export default useLastFR
