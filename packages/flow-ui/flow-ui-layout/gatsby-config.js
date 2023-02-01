module.exports = {
  plugins: [
    {
      resolve: '@africtivistes/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@layout': '@africtivistes/flow-ui-layout/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
