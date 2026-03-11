/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Quita Simples – Simplificando o pagamento dos seus precatórios`,
    siteUrl: `https://quitasimples.com.br/`,
    description: `Compramos seu Precatório, sem mais esperar, seu pagamento aqui é à vista em 24hrs!.`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },

      __key: "pages"

    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./src/blog/"
      },
      __key: "blog"
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
        options: {
          google: {
            families: [`Montserrat:100,200,300,400,500,600,700,800`, `sans-serif`,`Paytone One`]
          }
        }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-T14B2GTR4M", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quita Simples – Simplificando o pagamento dos seus precatórios`,
        short_name: `Quita Simples`,
        description: `Compramos seu Precatório, sem mais esperar, seu pagamento aqui é à vista em 24hrs!.`,
        start_url: `/`,
        background_color: `var(--color-background)`,
        theme_color: `var(--color-primary)`,
        icon: `src/images/icon.png`,
        lang: `pt-br`,
        display: `standalone`,
      },
    },
  ]
};
