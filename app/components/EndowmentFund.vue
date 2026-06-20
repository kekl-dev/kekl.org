<script setup lang="ts">
const { t } = useLanguage()
</script>

<template>
  <section class="bg-loyola-red py-16 md:py-24 px-6 md:px-20 overflow-hidden text-white relative">
    <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
    <div class="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
      
      <!-- Stats Left -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style="animation-delay: 0.2s">
        
        <div class="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <p class="text-[13px] text-white/70 font-medium tracking-[0.1em] uppercase mb-2">{{ t('endowment.donors') }}</p>
          <h3 class="text-4xl md:text-5xl font-black text-white">2,450<span class="text-white/70">+</span></h3>
        </div>

        <div class="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:translate-y-8">
          <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <p class="text-[13px] text-white/70 font-medium tracking-[0.1em] uppercase mb-2">{{ t('endowment.funds') }}</p>
          <h3 class="text-4xl md:text-5xl font-black text-white">Rp 15<span class="text-white/70">B</span></h3>
        </div>
      </div>

      <!-- Content Right -->
      <div class="animate-slide-up order-first lg:order-last">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-white/70 mb-4">
          <span class="h-px w-6 bg-white/70 inline-block"></span>
          {{ t('endowment.tag') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-sans font-black text-white leading-tight tracking-tight mt-1 mb-6">
          {{ t('endowment.title1') }} <span class="text-white/70">{{ t('endowment.title2') }}</span>
        </h2>
        <p class="text-[16px] md:text-[18px] text-white/80 leading-relaxed font-medium mb-8">
          {{ t('endowment.description') }}
        </p>
        <a href="https://kekl-scholarship-danaabadi.framer.website/dana-abadi" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl bg-white text-loyola-red px-8 py-4 text-[13px] font-black tracking-[0.18em] uppercase hover:bg-white/90 transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
          {{ t('endowment.contribute') }}
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
