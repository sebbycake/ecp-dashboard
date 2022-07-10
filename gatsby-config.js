module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },

  plugins: [`gatsby-plugin-react-helmet`],

  proxy: {
    prefix: "/i1",
    url: "http://localhost:8080",
  },
};