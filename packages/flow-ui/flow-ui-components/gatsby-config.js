module.exports = {
  plugins: [
    {
      resolve: '@africtivistes/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': '@africtivistes/flow-ui-components/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
