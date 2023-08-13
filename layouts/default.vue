<template>
  <div class="bg-slate-900 text-gray-200">
    <theHeader />
    <nuxtPage class="min-h-[60vh]" />
    <theFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.router-link-active{
  @apply border-b-purple-600 border-b;
}
</style>
