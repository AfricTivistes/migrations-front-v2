require('dotenv').config()

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@africtivistes/gatsby-theme-flexiblog-beauty',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        darkMode: false,
        includeTimeToRead: false,
        imageQuality: 80,
        deferPagesAfter: 1,
        services: {
          algolia: true,
        },
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://migration.africtivistes.org/graphql`,
        schema: {
          perPage: 2,
          requestConcurrency: 1,
          previewRequestConcurrency: 1,
          timeout: 600000
        },
        html: {
          useGatsbyImage: false
        },
        // Limites pour tenir dans le timeout Netlify (18 min) au premier build.
        // Une fois le cache Gatsby/WordPress actif, vous pouvez les augmenter ou les retirer.
        type: {
          MediaItem: {
            createFileNodes: false,
            limit: 400
          },
          Post: {
            limit: 600
          }
        },
        presets: [
          {
            presetName: `DEVELOP`,
            useIf: () => process.env.NODE_ENV === `development`,
            options: {
              develop: {
                nodeUpdateInterval: 300000,
                hardCacheMediaFiles: true,
                hardCacheData: true,
              },
              type: {
                MediaItem: {
                  localFile: {
                    requestConcurrency: 1,
                  },
                },
              },
            },
          },
          {
            presetName: `PRODUCTION`,
            useIf: () => process.env.NODE_ENV === `production`,
            options: {
              production: {
                hardCacheMediaFiles: true,
                allow404Images: true,
                allow401Images: true,
          },
          type: {
            MediaItem: {
              localFile: {
                // Limite fortement le nombre de requêtes simultanées de médias
                // pendant les builds de production (Netlify)
                requestConcurrency: 2,
              },
            },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`fr`, `en`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
        fallbackLanguage: `fr`,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-70G0D1SK48', // leave empty if you want to disable the tracker
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@africtivistes/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'content/assets/favicon.png', // This path is relative to the root of the site. 
      },
    }, 
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    siteUrl: `https://dialoguemigration.com`,
    title: 'Dialogue Migration',
    name: 'Dialogue Migrations',
    description: "Plateforme d'informations sur les migrations",
    address: 'Dakar, Sénégal',
    email: 'info@africtivistes.org',
    phone: '+221 33 837 51 24',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/DialMigration'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/DialMigration'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/dialogue_migration/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'accueil',
        slug: '/'
      },
      {
        name: 'actualites',
        slug: '/'
      },
      {
        name: 'espaceDialogue',
        slug: '/espacedialogue'
      },
      {
        name: 'migrationsMedias',
        slug: '/authors'
      },
      {
        name: 'lexique',
        slug: '/authors'
      },
      {
        name: 'factChecking',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'rapides',
        items: [
          {
            name: 'apropos',
            slug: '/apropos'
          },
          {
            name: 'lexique',
            slug: '/about'
          },
          {
            name: 'faq',
            slug: '/about'
          },
          {
            name: 'contact',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'legal',
        items: [
          {
            name: 'confidentialite',
            slug: '/confidentialite'
          },
          {
            name: 'mentions',
            slug: '/mentions'
          }
        ]
      }
    ]
  }
}
