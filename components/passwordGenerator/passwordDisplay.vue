<template>
  <div class="flex items-center gap-4 mt-8">
    <div class="bg-purple-600/20 p-5 text-md md:text-xl rounded-lg w-full">
      {{ password }}
    </div>
    <button
      class="w-24 min-h-full self-stretch px-4 transition-all rounded-lg bg-purple-600 text-center text-md"
      @click="copyToClipboard($event)">
      {{ btnLabel }}
    </button>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  props: {
    password: String,
  },
  data() {
    return {
      btnLabel: "Copy",
    };
  },
  methods: {
    copyToClipboard(event) {
      if (this.password) {
        navigator.clipboard
          .writeText(this.password)
          .then(() => {
            console.log("Password copied to clipboard!");

            // Trigger confetti effect
            this.launchConfetti(event);

            // Update button label
            this.btnLabel = "Copied";

            // Reset after 3 seconds
            setTimeout(() => {
              this.btnLabel = "Copy";
            }, 3000);
          })
          .catch((err) => {
            console.error("Could not copy password: ", err);
          });
      }
    },
    launchConfetti(event) {
      // Calculate the button's position
      const rect = event.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Convert button position to relative position on the screen
      const confettiOrigin = {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      };

      // Trigger confetti effect at the button's position
      confetti({
        particleCount: 50,
        spread: 140,
        origin: confettiOrigin,
        startVelocity: 20,
      });
    },
  },
};
</script>

<style>
/* Any related styles */
</style>
