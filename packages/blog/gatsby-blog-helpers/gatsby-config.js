module.exports = {
  plugins: [
    {
      resolve: '@africtivistes/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@helpers-blog': '@africtivistes/gatsby-blog-helpers/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
