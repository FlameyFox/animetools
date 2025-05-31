<!-- AnimeSection.vue -->
<template>
  <div class="space-y-12">
    <!-- Top Airing Section -->
    <div>
      <h2 class="text-2xl md:text-3xl mb-4 md:mb-6 font-bold">
        Top Airing Anime 📺
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a
          v-for="anime in airingAnime"
          :key="anime.id"
          :href="`https://myanimelist.net/anime/${anime.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-slate-800/30 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div class="w-full pt-[150%] relative">
            <img
              :src="anime.main_picture.large || anime.main_picture.medium"
              :alt="anime.title"
              class="absolute inset-0 w-full h-full object-cover object-center" />
            <div
              v-if="anime.mean"
              class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs">
              ⭐ {{ anime.mean?.toFixed(1) }}
            </div>
          </div>
          <div class="p-3 flex-1 flex flex-col">
            <h3 class="font-medium text-sm mb-auto line-clamp-2">
              {{ anime.title }}
            </h3>
            <div class="text-xs text-slate-400 space-y-0.5 mt-2">
              <p>
                {{ anime.media_type?.toUpperCase() }} •
                {{ anime.num_episodes || "TBA" }} EP
              </p>
              <p class="text-slate-500">
                {{ (anime.num_list_users || 0).toLocaleString() }} members
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- Top Upcoming Section -->
    <div>
      <h2 class="text-2xl md:text-3xl mb-4 md:mb-6 font-bold">
        Top Upcoming Anime 🚀
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a
          v-for="anime in upcomingAnime"
          :key="anime.id"
          :href="`https://myanimelist.net/anime/${anime.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-slate-800/30 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div class="w-full pt-[150%] relative">
            <img
              :src="anime.main_picture.large || anime.main_picture.medium"
              :alt="anime.title"
              class="absolute inset-0 w-full h-full object-cover object-center" />
            <div
              v-if="anime.mean"
              class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs">
              ⭐ {{ anime.mean?.toFixed(1) }}
            </div>
          </div>
          <div class="p-3 flex-1 flex flex-col">
            <h3 class="font-medium text-sm mb-auto line-clamp-2">
              {{ anime.title }}
            </h3>
            <div class="text-xs text-slate-400 space-y-0.5 mt-2">
              <p>
                {{ anime.media_type?.toUpperCase() }} •
                {{ anime.num_episodes || "TBA" }} EP
              </p>
              <p class="text-slate-500">
                {{ (anime.num_list_users || 0).toLocaleString() }} members
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AnimeDetails {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  mean: number;
  num_episodes: number;
  media_type: string;
  num_list_users: number;
}

const { data: animeData } = await useFetch("/api/topAnime");
const airingAnime = computed(() => animeData.value?.airing ?? []);
const upcomingAnime = computed(() => animeData.value?.upcoming ?? []);
</script>
