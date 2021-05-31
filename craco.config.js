const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FDE54E",
              "@success-color": "#1AC040",
              "@error-color": "#D3351D",
              "@btn-primary-color": "#323232",
              "@text-color": "#323232",
              "@text-color-secondary": "#8893A9",
              "@font-family": "LouisGoergeCafe",
              "@screen-md": "768px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
