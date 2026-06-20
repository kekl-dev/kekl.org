<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isLangMenuOpen = ref(false)

const { t, currentLang, setLanguage } = useLanguage()

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

const selectLang = (lang: 'id' | 'en') => {
  setLanguage(lang)
  isLangMenuOpen.value = false
}

const menuItems = [
  { label: 'Events', link: '#' },
  { label: 'Story', link: '#' },
  { label: 'Programs', link: '#programs' },
  { label: 'Merchandise', link: '#' },
  { label: 'Volunteer', link: '#' }
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
      class="w-full transition-all duration-300 overflow-x-clip"
      :class="'bg-loyola-red border-b border-white/10'"
    >
      <div class="max-w-[1700px] mx-auto">
        
        <!-- Top Utility Bar -->
        <div class="flex justify-between items-center px-6 lg:px-8 py-2 border-b border-white/10 bg-loyola-red/90 text-[13px] font-bold text-white">
          <div class="flex items-center gap-6">
            <NuxtLink to="/" aria-label="Home" class="hover:text-accent-yellow flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </NuxtLink>
            <a href="https://kekl-scholarship-danaabadi.framer.website/dana-abadi" class="hover:text-accent-yellow transition-colors">Dana abadi</a>
            <a href="https://kekl-scholarship-danaabadi.framer.website/" class="hover:text-accent-yellow transition-colors">Beasiswa</a>
          </div>
            <a href="https://kekl-directory.web.app/auth" class="hover:text-accent-yellow flex items-center gap-1 transition-colors">
              KEKL Directory <Icon name="lucide:arrow-up-right" class="w-2.5 h-2.5 opacity-80" />
            </a>
          </div>

        <div class="flex h-[80px] lg:h-[100px] items-center justify-between lg:py-0">
          <!-- Logo Section -->
          <div class="flex items-center shrink-0 h-full bg-loyola-red relative w-[160px] md:w-[220px] lg:w-[290px] pl-6 md:pl-8 lg:pl-12 transition-all duration-300 before:content-[''] before:absolute before:right-full before:top-0 before:bottom-0 before:w-screen before:bg-loyola-red">
            <img src="~/assets/img/kekl-white.png" alt="Loyola Alumni" class="h-16 lg:h-18 w-auto object-contain relative z-10">
          </div>

          <!-- Mobile Action Buttons -->
          <div class="flex lg:hidden items-center gap-2 sm:gap-3 pr-6">
            <!-- Mobile Language Switcher -->
            <div class="relative">
              <button @click="toggleLangMenu" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer">
                <Icon :name="currentLang === 'id' ? 'circle-flags:id' : 'circle-flags:uk'" class="w-5 h-5 rounded-full" />
              </button>
              
              <div v-if="isLangMenuOpen" class="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                <button @click="selectLang('id')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left transition-colors cursor-pointer" :class="{ 'bg-gray-50 font-bold': currentLang === 'id' }">
                  <Icon name="circle-flags:id" class="w-5 h-5 rounded-full" />
                  Indonesia
                </button>
                <button @click="selectLang('en')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left transition-colors cursor-pointer" :class="{ 'bg-gray-50 font-bold': currentLang === 'en' }">
                  <Icon name="circle-flags:uk" class="w-5 h-5 rounded-full" />
                  English
                </button>
              </div>
            </div>

            <button @click="isMobileMenuOpen = true" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-loyola-red hover:border-loyola-red transition-colors focus:outline-hidden cursor-pointer">
               <Icon name="lucide:menu" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-loyola-red hover:border-loyola-red transition-colors focus:outline-hidden cursor-pointer">
               <Icon name="lucide:user" class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <!-- Desktop Right Content Section: Nav Bottom -->
          <div class="hidden lg:flex flex-1 flex-col justify-center h-full pr-12">
            <!-- Main Navigation Bar -->
            <nav class="flex items-center justify-end gap-7 text-[16px] font-bold text-white/95">
              <a 
                v-for="(item, index) in menuItems" 
                :key="index"
                :href="item.link"
                class="flex items-center gap-1 hover:text-accent-yellow transition-colors group whitespace-nowrap cursor-pointer px-1 py-2"
              >
                {{ item.label }}
              </a>

              <!-- Desktop Language Switcher -->
              <div class="relative ml-2">
                <button @click="toggleLangMenu" class="flex items-center gap-2 hover:bg-white/10 rounded-full py-1.5 px-3 transition-colors cursor-pointer focus:outline-none border border-white/20 hover:border-white/40">
                  <Icon :name="currentLang === 'id' ? 'circle-flags:id' : 'circle-flags:uk'" class="w-5 h-5 rounded-full" />
                  <span class="uppercase text-sm font-bold">{{ currentLang }}</span>
                  <Icon name="lucide:chevron-down" class="w-4 h-4" />
                </button>
                    
                <div v-if="isLangMenuOpen" class="absolute right-0 top-full mt-3 w-36 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  <button @click="selectLang('id')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left transition-colors cursor-pointer" :class="{ 'bg-gray-50 font-bold': currentLang === 'id' }">
                    <Icon name="circle-flags:id" class="w-5 h-5 rounded-full" />
                    Indonesia
                  </button>
                  <button @click="selectLang('en')" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left transition-colors cursor-pointer" :class="{ 'bg-gray-50 font-bold': currentLang === 'en' }">
                    <Icon name="circle-flags:uk" class="w-5 h-5 rounded-full" />
                    English
                  </button>
                </div>
              </div>
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
          <button @click="isMobileMenuOpen = false" class="text-loyola-red hover:text-red-800 focus:outline-hidden transition-colors cursor-pointer">
            <Icon name="lucide:x" class="w-7 h-7" stroke-width="2.5" />
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <nav class="flex flex-col">
          <div v-for="(item, index) in menuItems" :key="index" class="border-b border-gray-200">
            <a 
              :href="item.link"
              @click="isMobileMenuOpen = false"
              class="w-full flex items-center justify-between px-6 py-5 text-left text-[17px] font-bold font-sans text-[#1a1a1a] group focus:outline-hidden hover:bg-gray-50 transition-colors"
            >
              {{ item.label }}
              <div class="shrink-0 w-8 h-8 rounded-full bg-loyola-red text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Icon name="lucide:chevron-right" class="w-5 h-5" stroke-width="2.5" />
              </div>
            </a>
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