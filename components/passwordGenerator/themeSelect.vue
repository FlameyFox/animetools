<template>
  <div>
    <!-- Mobile Select -->
    <div class="md:hidden">
      <select
        class="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
        :value="selectedTheme"
        @change="$emit('update:selected-theme', $event.target.value)">
        <option v-for="theme in themes" :key="theme.value" :value="theme.value">
          {{ theme.name }}
        </option>
      </select>
      <p class="mt-2 text-sm text-slate-400">
        {{ getCurrentThemeDescription }}
      </p>
    </div>

    <!-- Desktop Grid -->
    <div class="hidden md:grid grid-cols-3 gap-4">
      <label
        v-for="theme in themes"
        :key="theme.value"
        class="relative flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 cursor-pointer hover:bg-slate-800/70 transition-all group"
        :class="{
          'ring-2 ring-purple-500/50 border-transparent shadow-lg shadow-purple-500/10':
            selectedTheme === theme.value,
          'bg-gradient-to-br from-purple-900/30 to-slate-800/50 border-purple-500/20': theme.value === 'all'
        }">
        <input
          type="radio"
          :value="theme.value"
          :checked="selectedTheme === theme.value"
          @change="$emit('update:selected-theme', theme.value)"
          class="absolute w-full h-full opacity-0 cursor-pointer" />
        <div class="flex flex-col h-full">
          <h3
            class="text-lg font-medium mb-1.5 text-white group-hover:text-purple-300 transition-colors">
            {{ theme.name }}
          </h3>
          <p
            class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
            {{ theme.description }}
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedTheme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      themes: [
        {
          value: "all",
          name: "All Animes",
          description:
            "Mix characters and terms from various popular anime series",
        },
        {
          value: "naruto",
          name: "Naruto",
          description:
            "Ninja techniques and character names from the ninja world",
        },
        {
          value: "aot",
          name: "Attack on Titan",
          description: "Survey Corps terms and character names from the walls",
        },
        {
          value: "jujutsukaisen",
          name: "Jujutsu Kaisen",
          description: "Cursed techniques and sorcerer names from the series",
        },
        {
          value: "dragonball",
          name: "Dragon Ball",
          description:
            "Saiyan names and techniques from the Dragon Ball universe",
        },
        {
          value: "demonslayer",
          name: "Demon Slayer",
          description: "Breathing styles and character names from the corps",
        },
        {
          value: "onepiece",
          name: "One Piece",
          description: "Devil Fruits and pirate names from the Grand Line",
        },
      ],
    };
  },
  computed: {
    getCurrentThemeDescription() {
      const theme = this.themes.find((t) => t.value === this.selectedTheme);
      return theme ? theme.description : "";
    },
  },
  emits: ["update:selected-theme"],
};
</script>

<style scoped>
select option {
  background-color: rgb(30, 41, 59);
  color: rgb(226, 232, 240);
}
</style>
