module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://migration.africtivistes.org/graphql`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Dialogue Migrations',
    name: 'Migrations',
    description: 'Plateforme d’informations sur les migrations',
    address: 'Dakar, Sénégal',
    email: 'info@africtivistes.org',
    phone: '+221 33 864 00 90',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/africtivistes'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/AFRICTIVISTES'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Accueil',
        slug: '/'
      },
      {
        name: 'Actualités',
        slug: '/'
      },
      {
        name: 'Espace dialogue',
        slug: '/'
      },
      {
        name: 'Migrations et médias',
        slug: '/authors'
      },
      {
        name: 'Guide du voyageur',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Liens Rapides',
        items: [
          {
            name: 'À propos',
            slug: '/contact'
          },
          {
            name: 'Lexique',
            slug: '/about'
          },
          {
            name: 'Faq',
            slug: '/about'
          },
          {
            name: 'Contact',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Légal',
        items: [
          {
            name: 'Condition de confidentialité',
            slug: '/'
          },
          {
            name: 'Mentions légales',
            slug: '/'
          }
        ]
      }
    ]
  }
}
