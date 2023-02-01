module.exports = {
  plugins: [
    {
      resolve: '@africtivistes/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@helpers': '@africtivistes/gatsby-common-helpers/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
