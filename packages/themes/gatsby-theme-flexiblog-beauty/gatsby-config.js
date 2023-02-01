const overrideFonts = require('./src/@africtivistes/flow-ui-theme/theme/typography-fonts.json')

module.exports = options => {
  options = {
    ...options,
    fonts: options.fonts || overrideFonts.fonts
  }

  return {
    plugins: [
      {
        resolve: '@africtivistes/gatsby-blog-core',
        options
      },
      {
        resolve: '@africtivistes/gatsby-blog-pages',
        options
      },
      {
        resolve: '@africtivistes/gatsby-blog-helpers',
        options
      },
      {
        resolve: '@africtivistes/gatsby-common-helpers',
        options
      },
      {
        resolve: '@africtivistes/flow-ui-components',
        options
      },
      {
        resolve: '@africtivistes/flow-ui-theme',
        options
      },
      {
        resolve: '@africtivistes/flow-ui-layout',
        options
      },
      {
        resolve: '@africtivistes/flow-ui-widgets',
        options
      }
    ]
  }
}
