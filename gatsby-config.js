require('dotenv').config()
const adapter = require("gatsby-adapter-netlify")

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false
  }),
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yoursite.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '', // Add your Google Analytics tracking ID
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false
        },
        environments: ['production', 'development']
      },
    },
    // ... other plugins
  ],
}