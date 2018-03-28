module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: '/public',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
