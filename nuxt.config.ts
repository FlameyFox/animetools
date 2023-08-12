// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  app: {
    keepalive: true,
    head: {
      title: "animetools.io",
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
