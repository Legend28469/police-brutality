module.exports = {
  siteMetadata: {
    title: `End Police Brutality`,
    description: `Let's end police brutality together`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Balsamiq Sans`,
            variants: [`700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`],
          },
        ],
      },
    },
  ],
}
