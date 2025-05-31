<template>
  <div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Title Section -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          Practice Japanese with AnimeTools
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
          Ready to boost your Japanese skills? Challenge yourself with our interactive learning tools!
        </p>
        <div class="mt-4">
          <span class="inline-block bg-purple-600/90 text-white text-sm font-medium px-5 py-1.5 rounded-full shadow-lg tracking-wide backdrop-blur-sm">
            New Feature 🎉
          </span>
        </div>
      </div>

      <!-- Game Component -->
      <div class="bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 md:p-8 mb-16">
        <JapaneseLearningGame />
      </div>

      <!-- Features Section -->
      <div class="space-y-16">
        <!-- Interactive Learning -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Interactive Learning ✨
            </h2>
            <p class="text-lg text-slate-300">
              Practice recognizing Hiragana, Katakana, Kanji, and full sentences in a fun and engaging way. Type in meanings or pronunciations to test your knowledge and improve your skills.
            </p>
          </div>
        </div>

        <!-- Progress Tracking -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Track Your Progress ⭐
            </h2>
            <p class="text-lg text-slate-300">
              Watch your improvement in real-time with our scoring system. Keep track of correct and incorrect answers as you work towards mastery of Japanese characters and words.
            </p>
          </div>
        </div>

        <!-- All Levels Welcome -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Perfect for All Levels 🌟
            </h2>
            <p class="text-lg text-slate-300">
              Whether you're just starting with basic Hiragana or mastering complex Kanji, our tools adapt to your level. Learn at your own pace and challenge yourself to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Learn Japanese with AnimeTools | Fun & Interactive Quizzes",
  ogTitle: "Learn Japanese with AnimeTools | Fun & Interactive Quizzes",
  description:
    "Boost your Japanese learning with AnimeTools! Practice Hiragana, Katakana, Kanji, and sentences through fun, interactive quizzes. Perfect for learners of all levels. Track your progress and enjoy learning Japanese like never before!",
  ogDescription:
    "Boost your Japanese learning with AnimeTools! Practice Hiragana, Katakana, Kanji, and sentences through fun, interactive quizzes. Perfect for learners of all levels. Track your progress and enjoy learning Japanese like never before!",
  twitterCard: "summary_large_image",
});
</script>
