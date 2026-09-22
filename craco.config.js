module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = webpackConfig.ignoreWarnings || [];
      // Ignore source map parse warnings from node_modules (e.g. @firebase/auth)
      webpackConfig.ignoreWarnings.push(/Failed to parse source map/);
      return webpackConfig;
    },
  },
};
