module.exports = {
  dimensions: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            removeUselessDefs: false,
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
