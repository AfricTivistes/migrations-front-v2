module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@africtivistes/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@widgets': '@africtivistes/flow-ui-widgets/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
