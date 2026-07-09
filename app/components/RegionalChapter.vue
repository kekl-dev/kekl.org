<script setup lang="ts">
const { t } = useLanguage()
</script>

<template>
  <section class="bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden">
    
    <div class="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- Content Left -->
      <div class="animate-slide-up">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-4">
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
          {{ t('regional.tag') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-sans font-black text-[#111111] leading-tight tracking-tight mt-1 mb-6">
          {{ t('regional.title1') }} <span class="text-loyola-red">{{ t('regional.title2') }}</span>
        </h2>
        <p class="text-[16px] md:text-[18px] text-[#5a6373] leading-relaxed font-medium mb-8">
          {{ t('regional.description') }}
        </p>
        <a href="#" class="inline-flex items-center justify-center rounded-xl bg-loyola-red text-white px-8 py-4 text-[13px] font-black tracking-[0.18em] uppercase hover:bg-loyola-red/90 transition-all duration-300 shadow-[0_4px_16px_rgba(140,21,21,0.20)] hover:shadow-[0_8px_24px_rgba(140,21,21,0.30)]">
          {{ t('regional.btn') }}
        </a>
      </div>

      <!-- Image Right -->
      <div class="animate-slide-up" style="animation-delay: 0.2s">
        <div class="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] aspect-[4/3] lg:aspect-auto lg:h-[500px]">
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Alumni Regional Chapter">
        </div>
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
