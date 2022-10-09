const path = require("path");

module.exports = ({ webpack }) => {
  const designWidth = webpack.resourcePath.includes(path.join('mobile')) ? 750 : 1920;
  return {
    plugins: {
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 3,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [".ignore"],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [/node_modules/],
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 1080,
      },
    },
  };
};
