module.exports = {
  pwa:{
    name: 'Country Map',
    themeColor: '#00d1d5',
    msTileColor: '#00d1d5',
    workboxOptions: {
      exclude: [
        /\.png/,
        /\.html/,
        'manifest.json'
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          aqua: "#00d1d5",
          orange: "f9ba5d",
          mob: "800px"
        }
      }
    }
  }
};