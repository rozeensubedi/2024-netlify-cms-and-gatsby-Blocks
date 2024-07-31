module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-us`,
        path: `${__dirname}/content/about-us`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-us-cards`,
        path: `${__dirname}/content/about-us-cards`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service-card`,
        path: `${__dirname}/content/service-card`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `${__dirname}/content/footer`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pricing-card`,
        path: `${__dirname}/content/pricing-card`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pricing-content`,
        path: `${__dirname}/content/pricing-content`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service-page`,
        path: `${__dirname}/content/service-page`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/content/logo`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banner`,
        path: `${__dirname}/content/banner`,
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
        fastHash: true,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito\:400,400i,700,700i`,
          `Open Sans\:400,400i,700,700i`,
          `Inter\:400,400i,700,700i`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}














































// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `gatsbyjs`,
//     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   },
//   plugins: [
//     `gatsby-plugin-image`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//         fastHash: true,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `about-us`,
//         path: `${__dirname}/content/about-us`,
//         fastHash: true,
//       },
//     },
//     // {
//     //   resolve: `gatsby-source-filesystem`,
//     //   options: {
//     //     name: `about-us-cards`,
//     //     path: `${__dirname}/content/about-us-cards`,
//     //     fastHash: true,
//     //   },
//     // },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `service-card`,
//         path: `${__dirname}/content/service-card`,
//         fastHash: true,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `footer`,
//         path: `${__dirname}/content/footer`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `pricing-card`,
//         path: `${__dirname}/content/pricing-card`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `pricing-content`,
//         path: `${__dirname}/content/pricing-content`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `service-page`,
//         path: `${__dirname}/content/service-page`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `logo`,
//         path: `${__dirname}/content/logo`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `banner`,
//         path: `${__dirname}/content/banner`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/static/images`,
//       },
//     },
//     `gatsby-plugin-netlify-cms`,
//     `gatsby-transformer-remark`,
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         // This will impact how browsers show your PWA/website
//         // https://css-tricks.com/meta-theme-color-and-trickery/
//         // theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-fonts`,
//       options: {
//         fonts: [
//           `Nunito\:400,400i,700,700i`, // Specify font family and variants
//           `Open Sans\:400,400i,700,700i`,
//           `Inter\:400,400i,700,700i`,
          
//         ],
//         display: "swap", // Optional: swap, block, fallback, optional
//       },
//     },
//     `gatsby-plugin-styled-components`, // Add this line
//   ],
// }
