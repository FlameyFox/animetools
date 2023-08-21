<template>
  <div>
    <div
      class="max-w-[90vw] md:max-w-6xl mx-auto p-8 md:py-12 md:px-16 rounded-2xl bg-slate-900 mt-32 shadow-2xl shadow-purple-600/50">
      <h1 class="text-center text-3xl md:text-6xl mb-8">Data sets</h1>
      <h4 class="text-center">
        Currently each api is limited to 100 requests per 15 minutes.<br /><span
          class="text-sm"
          >Subject to change.</span
        >
      </h4>
      <h5 class="mb-16 text-center mt-4">
        <span
          class="bg-purple-300/80 px-3 py-2 rounded text-purple-900 text-sm font-medium"
          >Warning: Some of the data might include spoilers for the given
          show.</span
        >
      </h5>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <nuxt-link
          to="/api/naruto"
          target="_blank"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-xl">Naruto characters</h3>
          <p class="text-sm text-purple-400/70">
            64 characters. Multiple attributes.
          </p>
          <p class="text-sm font-medium text-purple-300/70 mt-4">
            Click to see dataset
          </p>
        </nuxt-link>
        <nuxt-link
          to="/api/attackOnTitan"
          target="_blank"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-xl">Attack on Titan characters</h3>
          <p class="text-sm text-purple-400/70">
            32 characters. Multiple attributes.
          </p>
          <p class="text-sm font-medium text-purple-300/70 mt-4">
            Click to see dataset
          </p>
        </nuxt-link>
        <nuxt-link
          to="https://twitter.com/flamey_fox"
          target="_blank"
          class="bg-purple-600/10 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-2xl text-white/80">More to come...</h3>
          <p class="text-sm text-purple-400/50">
            Let me know what to add next!
          </p>
        </nuxt-link>
      </div>
    </div>
    <div
      class="mt-24 md:mt-32 max-w-[90vw] md:ax-w-7xl mx-auto bg-slate-800/40 mb-32 p-12 rounded-lg">
      <h2 class="text-4xl mb-4">Anime Datasets: Because Why Not? ✨</h2>
      <p>
        Hey there, anime fan! Ever thought about mixing work with a bit of anime
        fun? Well, that's exactly what we're offering here. Imagine using Naruto
        or Eren Yeager as your test data. Cool, right?
      </p>
      <h3 class="text-2xl mt-8 mb-2">Instant connection</h3>
      <p>
        Who wouldn't want to work with data that reminds them of their favorite
        anime binge sessions? It's like having a mini anime marathon, but, you
        know, while working.
      </p>
      <h3 class="text-2xl mt-8 mb-2">So much variety</h3>
      <p>
        Anime characters aren't just about cool moves and epic battles. They've
        got histories, quirks, and a ton of attributes. Perfect for mixing
        things up in your projects.
      </p>
      <h3 class="text-2xl mt-8 mb-2">Lighten up the mood</h3>
      <p>
        Data work can get a bit... yawn... sometimes. But throw in some anime
        characters, and suddenly it's a whole lot more interesting.
      </p>
      <h3 class="text-2xl mt-8 mb-2">Stay tuned for more</h3>
      <p>
        We're just getting started. More of your favorite characters from other
        epic series are on the way. So, keep an eye out!
      </p>
      <p>
        Just a heads up, though – watch out for spoilers! We wouldn't want to
        ruin the next big plot twist for you. Dive in, have fun, and let anime
        give your projects that extra spark!
      </p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Anime Datasets for Projects | Naruto, Attack on Titan & More!",
  ogTitle: "Anime Datasets for Projects | Naruto, Attack on Titan & More!",
  description:
    "Dive into our unique anime datasets! From Naruto to Attack on Titan, elevate your projects with data from your favorite characters. Perfect for anime fans looking to blend work with a touch of otaku fun. Stay tuned for more additions!",
  ogDescription:
    "Dive into our unique anime datasets! From Naruto to Attack on Titan, elevate your projects with data from your favorite characters. Perfect for anime fans looking to blend work with a touch of otaku fun. Stay tuned for more additions!",
  twitterCard: "summary_large_image",
});
</script>
