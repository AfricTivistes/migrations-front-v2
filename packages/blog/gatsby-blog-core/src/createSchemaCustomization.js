const withDefaults = require('./utils/default.options')
const types = require('./types')

module.exports = async ({ actions, schema }, pluginOptions) => {
  const { createTypes } = actions
  pluginOptions = withDefaults(pluginOptions)

  const imageNodeTypes = []
  const extraTypeDefs = []

  pluginOptions.sources.forEach(source => {
    const { enabled, imageNodeType, typeDefs, typeDefsFallback } = source

    if (imageNodeType) {
      imageNodeTypes.push(imageNodeType)
    }

    // Quand une source (Contentful / Sanity / Strapi / local) est active,
    // on enregistre ses définitions de schéma natives.
    if (enabled && typeDefs) {
      extraTypeDefs.push(typeDefs)
    }

    // Quand une source n'est pas active mais que le thème attend quand même
    // certains types (ex: ContentfulAsset, SanityImageAsset),
    // on utilise les types "fallback" pour éviter les erreurs du schema.
    if (!enabled && typeDefsFallback) {
      extraTypeDefs.push(typeDefsFallback)
    }
  })

  // Type minimaliste pour Mdx, utilisé uniquement comme "hook" pour les directives
  // de proxy (@proxyResolver, @link, etc.) lorsque gatsby-plugin-mdx n'est pas présent.
  // Si gatsby-plugin-mdx est installé, ce type sera automatiquement étendu.
  const mdxFallbackTypeDef = `
    type Mdx implements Node {
      id: ID!
    }
  `

  const allTypeDefs = [
    /**
     * Schema Interfaces
     *
     * For a semantic schema we define an interface for file and
     * api sources of data
     */
    types.interfaces,
    /**
     * Image Asset Type
     *
     * Union type for image assets from file or api locations
     */
    schema.buildUnionType({
      name: 'ImageAsset',
      types: imageNodeTypes,
      resolveType: node => node.internal && node.internal.type
    }),
    // Type Mdx de base pour satisfaire les extensions de schéma du thème
    mdxFallbackTypeDef,
    // Types spécifiques aux différentes sources (ou leurs fallbacks)
    ...extraTypeDefs
  ]

  createTypes(allTypeDefs)
}
