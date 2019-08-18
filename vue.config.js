module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  devServer: {
    proxy: 'http://localhost',

  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        ws: true,
        changeOrigin: true
      }
    }
  }
};

