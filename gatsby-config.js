module.exports = {
  siteMetadata: {
    title: `Rent a Car`,
    description: `Iznajmljivanje vozila po veoma jeftinim cijenama`,
    author: `@boris_civcic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
        },
        credentials: {
          apiKey: "AIzaSyBechLFMFMEjVzZYkuxrWIAMOABg0skp68",
          authDomain: "fixmancar.firebaseapp.com",
          databaseURL: "https://fixmancar.firebaseio.com",
          projectId: "fixmancar",
          storageBucket: "fixmancar.appspot.com",
          messagingSenderId: "742039624808",
          appId: "1:742039624808:web:30a6fa25cf87d849c42fdd",
          measurementId: "G-3822MXR0QM",
        },
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/",
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: "http:/www.localhost:8000/#", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
