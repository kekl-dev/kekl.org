<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Events' },
  { label: 'Reading & Resources' },
  { label: 'Programs & Perks' },
  { label: 'Communities' },
  { label: 'Volunteer' },
  { label: 'About' }
]

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

<template>
  <div>
    <!-- Main Header -->
    <header 
      class="w-full fixed top-0 z-50 border-b transition-all duration-300"
      :class="isScrolled ? 'bg-[#111111] border-white/10' : 'bg-[#111111cc]/20 backdrop-blur-lg border-white/5'"
    >
      <div class="max-w-[1700px] mx-auto">
        
        <!-- Top Utility Bar (Mobile Only) -->
        <div class="lg:hidden flex justify-end items-center gap-6 px-6 py-2 border-b border-white/10 text-[13px] font-bold text-white/90">
          <a href="#" class="hover:text-accent-yellow flex items-center gap-1 transition-colors">
            Alumni Directory <span class="text-[10px] opacity-60">↗</span>
          </a>
          <a href="#" class="hover:text-accent-yellow flex items-center gap-1 transition-colors">
            Email <span class="text-[10px] opacity-60">↗</span>
          </a>
        </div>

        <div class="flex h-[80px] lg:h-[130px] items-center justify-between px-6 lg:px-12 py-2 lg:py-0">
          <!-- Logo Section -->
          <div class="flex items-center shrink-0 h-full">
            <img src="~/assets/img/logo-loyola.png" alt="Loyola Alumni" class="h-10 lg:h-20 w-auto object-contain">
          </div>

          <!-- Mobile Action Buttons -->
          <div class="flex lg:hidden items-center gap-2 sm:gap-3">
            <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-loyola-red hover:border-loyola-red transition-colors focus:outline-hidden">
               <Icon name="lucide:search" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button @click="isMobileMenuOpen = true" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-loyola-red hover:border-loyola-red transition-colors focus:outline-hidden">
               <Icon name="lucide:menu" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-loyola-red hover:border-loyola-red transition-colors focus:outline-hidden">
               <Icon name="lucide:user" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <!-- Desktop Right Content Section: Utility Top + Nav Bottom -->
          <div class="hidden lg:flex flex-1 flex-col justify-center gap-0 md:gap-6 h-full">
            <!-- Top Utility Bar -->
            <div class="flex justify-end items-center gap-10 text-[14px] font-bold text-white/80">
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
            <nav class="flex items-center justify-end gap-5 text-[16px] font-bold text-white/95">
              <button 
                v-for="(item, index) in menuItems" 
                :key="index"
                class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap"
              >
                {{ item.label }}
                <svg class="w-4 h-4 text-white/30 group-hover:text-accent-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-100 bg-white overflow-y-auto flex flex-col"
      >
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div class="w-8"></div> <!-- Spacer for centering title -->
          <h2 class="text-xl font-sans text-gray-800">Menu</h2>
          <button @click="isMobileMenuOpen = false" class="text-loyola-red hover:text-red-800 focus:outline-hidden transition-colors">
            <Icon name="lucide:x" class="w-7 h-7" stroke-width="2.5" />
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <nav class="flex flex-col">
          <div v-for="(item, index) in menuItems" :key="index" class="border-b border-gray-200">
            <button class="w-full flex items-center justify-between px-6 py-5 text-left text-[17px] font-bold font-sans text-[#1a1a1a] group focus:outline-hidden hover:bg-gray-50 transition-colors">
              {{ item.label }}
              <div class="shrink-0 w-8 h-8 rounded-full bg-loyola-red text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Icon name="lucide:chevron-down" class="w-5 h-5" stroke-width="2.5" />
              </div>
            </button>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
header {
  letter-spacing: -0.01em;
}
</style>