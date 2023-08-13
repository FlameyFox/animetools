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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=albert-sans:200,200i,300,300i,400,400i,500,500i,600,600i",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
