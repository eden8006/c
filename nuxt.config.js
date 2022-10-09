import path from "path";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/en/online-ordering/",
    middleware: ["i18n"],
    extendRoutes(routes, resolve) {
      // routes.forEach(route=>{
      //   if(route.name === "index"){
      //     route.alias = "/restaurant/online-ordering"
      //   }
      // })
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Restaurant Online Ordering System | AIYA ORDER",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "AIYA ORDER, a marketing tool for restaurants, it offers restaurants beautiful, mobile friendly websites that drive revenue and customers.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/en/online-ordering/favicon.ico",
      },
    ],
    script: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-332939428",
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag('config', 'AW-332939428');`,
      },
      {
        innerHTML: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-332939428/BSTcCInKicADEKSB4Z4B', 'event_callback': callback }); return false; } `,
      },
      {
        innerHTML: `const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        if (isMobile) {
          if(!location.pathname.startsWith("/en/online-ordering/mobile")){
            console.log("to mobile");
            location.href = "/en/online-ordering/mobile";
          }
        }else {
          if(location.pathname.startsWith("/en/online-ordering/mobile")){
            console.log("to pc");
            location.href = "/en/online-ordering";
          }
        }`,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "normalize.css",
    "~/assets/styles/base.css",
    "~/assets/styles/font.css",
    "~/assets/styles/animate.css",
    "~/assets/styles/flex.css",
    "swiper/dist/css/swiper.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/i18n",
    "~/plugins/vue-swiper.js",
    {
      src: "@/plugins/vue-lazyload",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["cookie-universal-nuxt"],

  styleResources: {
    less: ["~/assets/styles/all.less"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^element-ui/],
    postcss: {
      plugins: {
        "postcss-px-to-viewport": path.join(__dirname, "postcss.config.js"),
      },
    },
  },
};
