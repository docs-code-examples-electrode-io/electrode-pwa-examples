module.exports = {
  cache: {
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }, {
      handler: "fastest",
      urlPattern: "\/collection$"
    }, {
      handler: "fastest",
      urlPattern: "^https:\/\/fonts\.googleapis\.com"
    }, {
      handler: "fastest",
      urlPattern: "^https:\/\/fonts\.gstatic\.com"
    }],
    cacheId: "electrodeProgressiveProduct",
    importScripts: ['./sw-events.js'],
    staticFileGlobs: ["dist/js/*.{js,css,png,jpg,svg}"]
  },
  manifest: {
    background: "#007dc6",
    background_color: "#007dc6",
    logo: "./images/walmart-icon.png",
    start_url: "./",
    title: "Electrode Progressive Product",
    short_name: "PWA Product",
    theme_color: "#007dc6",
    gcm_sender_id: "123456789"
  }
};
