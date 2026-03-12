<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  letter-spacing: -0.01em;
}
</style>

<template>
  <header 
    class="w-full fixed top-0 z-50 border-b py-4 transition-all duration-300"
    :class="isScrolled ? 'bg-[#111111] border-white/10' : 'bg-[#111111cc]/20 backdrop-blur-lg border-white/5'"
  >
    <div class="max-w-[1700px] mx-auto flex h-[110px] items-stretch">
      <!-- Logo Section: Full Height, Stanford Red -->
      <div class="px-12 flex items-center justify-center shrink-0 h-full">
        <img src="~/assets/img/logo-loyola.png" alt="Loyola Alumni" class="h-28 w-auto object-contain">
      </div>

      <!-- Right Content Section: Utility Top + Nav Bottom -->
      <div class="flex-1 flex flex-col justify-between py-2">
        <!-- Top Utility Bar -->
        <div class="flex justify-end items-center gap-10 px-12 text-[14px] font-bold text-white/80">
          <a href="#" class="hover:text-accent-yellow flex items-center gap-1 transition-colors">
            Alumni Directory <span class="text-[11px] opacity-60">↗</span>
          </a>
          <a href="#" class="hover:text-accent-yellow flex items-center gap-1 transition-colors">
            Email <span class="text-[11px] opacity-60">↗</span>
          </a>
          <a href="#" class="hover:text-accent-yellow transition-colors">Log in</a>
          <button class="flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 hover:border-accent-yellow/40 bg-white/5 hover:bg-white/10 transition-all text-white group">
            <span class="font-bold group-hover:text-accent-yellow">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:text-accent-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <!-- Main Navigation Bar -->
        <nav class="flex items-center justify-end px-12 gap-5 text-[16px] font-bold text-white/95">
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            Events
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            Reading & Resources
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            Programs & Perks
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            Communities
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            Volunteer
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap">
            About
            <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>