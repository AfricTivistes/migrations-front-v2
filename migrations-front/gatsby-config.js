module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        darkMode: false
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://migration.africtivistes.org/graphql`,
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
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Dialogue Migration',
    name: 'Migrations',
    description: 'Plateforme d’informations sur les migrations',
    address: 'Dakar, Sénégal',
    email: 'info@africtivistes.org',
    phone: '+221 33 864 00 90',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/dialoguemigration/'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/DialogMigration'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/dialoguemigration'
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
