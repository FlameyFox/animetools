<template>
  <footer class="p-8 mt-24">
    <div class="bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 flex flex-col items-center">
      <div class="flex flex-col items-center space-y-6">
        <div class="bg-slate-800/50 backdrop-blur-sm py-3 px-6 rounded-xl">
          Made by
          <nuxt-link
            class="text-lg bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text font-bold hover:from-purple-200 hover:to-pink-200 transition-all"
            target="_blank"
            to="https://flameyfox.com/"
            >FlameyFox</nuxt-link>
        </div>
        
        <div class="bg-slate-800/50 backdrop-blur-sm py-3 px-6 rounded-xl group cursor-pointer hover:bg-slate-800/70 transition-all">
          <nuxt-link
            target="_blank"
            class="flex items-center gap-2"
            to="https://usefathom.com/ref/GJRIYY">
            <span class="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-purple-200 transition-all">Support privacy-focused analytics</span>
            <span class="text-purple-400 group-hover:text-purple-300 transition-all">→</span>
          </nuxt-link>
        </div>

        <div class="max-w-2xl text-center text-slate-400 space-y-2">
          <p>All content belongs to its original awesome creators.<br />
          I claim no ownership of content, names, art or other materials presented here.</p>
          <p class="text-sm">
            Anime data is provided by the 
            <a href="https://myanimelist.net/" class="text-purple-300 hover:text-purple-200 transition-colors">
              MyAnimeList
            </a> 
            API
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
