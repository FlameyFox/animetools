// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  supabase: {
    redirect: false,
  },
  site: {
    url: "https://animetools.io",
  },
  app: {
    keepalive: true,
    head: {
      title: "animetools.io",
      meta: [
        {
          name: "description",
          content:
            "A selection of awesome tools for your proeject - all with an anime twist!",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: {
      routes: ["/"], // Pre-render the homepage
    },
  },
  build: {
    extractCSS: true, // Extract CSS to improve load time
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
      },
    },
  },
  router: {
    prefetchLinks: true, // Enable link prefetching
  },
  cache: {
    pages: ["*"], // Cache all pages
    store: {
      type: "memory", // Use in-memory cache
      max: 1000, // Maximum number of items in the cache
      ttl: 60 * 60 * 24, // Time to live for cached items (1 day)
    },
  },
  css: ["~/assets/fonts/albert-sans/font.css"],
});
