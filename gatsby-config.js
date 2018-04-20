module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: '/public',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '44415946',
        webvisor: true,
        trackHash: true,
        version: 2
      }
    }
  ],
};
