<template>
  <div
    class="bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 md:p-6">
    <!-- Password Controls -->
    <div class="mb-6 space-y-5">
      <!-- Options -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <label class="flex items-center group">
          <input
            type="checkbox"
            v-model="options.useLeet"
            class="bg-purple-600/20 mr-3 p-3 transition-all rounded-md appearance-none checked:bg-purple-600 group-hover:bg-purple-600/30" />
          <span class="text-slate-300 group-hover:text-white transition-colors"
            >Leet Speak</span
          >
        </label>
        <label class="flex items-center group">
          <input
            type="checkbox"
            v-model="options.useEnhancements"
            class="bg-purple-600/20 mr-3 p-3 transition-all rounded-md appearance-none checked:bg-purple-600 group-hover:bg-purple-600/30" />
          <span class="text-slate-300 group-hover:text-white transition-colors"
            >Enhancements</span
          >
        </label>
        <label class="flex items-center group">
          <input
            type="checkbox"
            v-model="options.useHyphens"
            class="bg-purple-600/20 mr-3 p-3 transition-all rounded-md appearance-none checked:bg-purple-600 group-hover:bg-purple-600/30" />
          <span class="text-slate-300 group-hover:text-white transition-colors"
            >Use Hyphens</span
          >
        </label>
      </div>

      <!-- Word Count Slider -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-slate-300"
            >Words:
            <span class="text-white font-medium">{{
              options.numWords
            }}</span></span
          >
        </div>
        <input
          type="range"
          v-model="options.numWords"
          :min="3"
          :max="10"
          class="w-full"
          @change="handleOptionsChange" />
      </div>

      <!-- Generate Button -->
      <button
        class="w-full py-3.5 transition-all rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-center text-white font-medium border border-purple-500/20 hover:border-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="generatePassword"
        :disabled="!words.length">
        Generate Password
      </button>
    </div>

    <!-- Password Display Section - Fixed Height -->
    <div class="min-h-[160px]">
      <!-- Loading State -->
      <div v-if="isLoading" class="flex items-center justify-center py-8">
        <div
          class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
        {{ error }}
      </div>

      <!-- Password Display -->
      <div v-else class="space-y-5">
        <div
          class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 text-lg md:text-xl rounded-lg break-all font-medium">
          {{ displayedPassword || "Click Generate Password to create one" }}
        </div>

        <!-- Strength and Copy Button -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div v-if="displayedPassword" class="flex items-center gap-2">
            <div class="text-sm text-slate-400">Strength:</div>
            <div
              class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
              :class="{
                'bg-red-500/20 text-red-400':
                  strengthClass === 'very-weak' || strengthClass === 'weak',
                'bg-yellow-500/20 text-yellow-400': strengthClass === 'medium',
                'bg-green-500/20 text-green-400': strengthClass === 'strong',
                'bg-purple-500/20 text-purple-400':
                  strengthClass === 'very-strong',
              }">
              {{ strengthText }}
            </div>
          </div>

          <button
            v-if="displayedPassword"
            class="sm:ml-auto px-8 py-3.5 transition-all rounded-lg bg-gradient-to-r from-purple-600/30 to-purple-700/30 hover:from-purple-600/40 hover:to-purple-700/40 text-center text-white font-medium border border-purple-500/30 hover:border-purple-500/40 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed group"
            @click="copyToClipboard($event)">
            <span class="inline-flex items-center gap-2">
              {{ btnLabel }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import confetti from "canvas-confetti";
import { evaluatePasswordStrength } from "~/utils/passwordUtils";

export default {
  props: {
    words: {
      type: Array,
      required: true,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      btnLabel: "Copy password",
      displayedPassword: "",
      copyTimeout: null,
      options: {
        useLeet: false,
        useEnhancements: false,
        useHyphens: true, // Only this is true by default
        numWords: 3,
      },
    };
  },
  computed: {
    strengthClass() {
      return evaluatePasswordStrength(this.displayedPassword);
    },
    strengthText() {
      switch (this.strengthClass) {
        case "very-strong":
          return "Very Strong";
        case "strong":
          return "Strong";
        case "medium":
          return "Medium";
        case "weak":
          return "Weak";
        default:
          return "Very Weak";
      }
    },
  },
  watch: {
    words: {
      immediate: true,
      handler(newWords) {
        if (newWords.length > 0) {
          this.generatePassword();
        }
      },
    },
    "options.useLeet": "handleOptionsChange",
    "options.useEnhancements": "handleOptionsChange",
    "options.useHyphens": "handleOptionsChange",
  },
  methods: {
    generatePassword() {
      if (this.words.length === 0) return;

      // Import dynamically to avoid SSR issues
      import("~/utils/passwordUtils").then(({ generatePassword }) => {
        this.displayedPassword = generatePassword(
          this.words,
          this.options.numWords,
          this.options.useLeet,
          this.options.useEnhancements,
          this.options.useHyphens
        );
      });
    },
    handleOptionsChange() {
      this.generatePassword();
    },
    copyToClipboard(event) {
      if (this.displayedPassword) {
        navigator.clipboard
          .writeText(this.displayedPassword)
          .then(() => {
            // Trigger confetti effect
            this.launchConfetti(event);

            // Update button label
            this.btnLabel = "Copied!";

            // Clear existing timeout if any
            if (this.copyTimeout) {
              clearTimeout(this.copyTimeout);
            }

            // Reset after 3 seconds
            this.copyTimeout = setTimeout(() => {
              this.btnLabel = "Copy password";
            }, 3000);
          })
          .catch((err) => {
            console.error("Could not copy password: ", err);
            this.btnLabel = "Failed to copy";

            this.copyTimeout = setTimeout(() => {
              this.btnLabel = "Copy password";
            }, 3000);
          });
      }
    },
    launchConfetti(event) {
      const rect = event.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const confettiOrigin = {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      };

      confetti({
        particleCount: 50,
        spread: 140,
        origin: confettiOrigin,
        startVelocity: 20,
        colors: ["#9333ea", "#a855f7", "#c084fc"], // Purple theme
      });
    },
  },
  beforeUnmount() {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
  },
};
</script>

<style scoped>
input[type="range"] {
  height: 6px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  background: rgba(147, 51, 234, 0.1);
  border-radius: 8px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(126, 34, 206));
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: linear-gradient(to right, rgb(168, 85, 247), rgb(147, 51, 234));
  transform: scale(1.15);
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
}

input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 0.375rem;
}
</style>
