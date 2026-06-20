<script setup lang="ts">
const { t } = useLanguage()
</script>

<template>
  <section class="bg-[#f7f7f7] py-20 md:py-28 px-6 md:px-20 overflow-hidden">
    <div class="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      
      <!-- Content Left -->
      <div class="lg:w-5/12 xl:w-1/2 animate-slide-up">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-4">
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
          {{ t('scholarship.tag') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-sans font-black text-[#111111] leading-tight tracking-tight mt-1 mb-6">
          <span class="text-loyola-red">{{ t('scholarship.title_red') }}</span> {{ t('scholarship.title_black') }}
        </h2>
        <p class="text-[16px] md:text-[18px] text-[#5a6373] leading-relaxed font-medium mb-8">
          {{ t('scholarship.description') }}
        </p>
        <a href="https://kekl-scholarship-danaabadi.framer.website/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl bg-loyola-red text-white px-8 py-4 text-[13px] font-black tracking-[0.18em] uppercase hover:bg-loyola-red/90 transition-all duration-300 shadow-[0_4px_16px_rgba(140,21,21,0.20)] hover:shadow-[0_8px_24px_rgba(140,21,21,0.30)]">
          {{ t('scholarship.learn_more') }}
        </a>
      </div>

      <!-- Cards Right -->
      <div class="lg:w-7/12 xl:w-1/2 flex flex-col gap-6 animate-slide-up" style="animation-delay: 0.2s">
        
        <div class="bg-loyola-red rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-white/10">
          <!-- Image Left (in card) -->
          <div class="md:w-2/5 relative h-[150px] md:h-auto md:aspect-[4/3] shrink-0">
             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" :alt="t('scholarship.card_alt')">
             <!-- Gradient overlay to fade into dark bg -->
             <div class="absolute inset-0 bg-gradient-to-r from-transparent to-loyola-red hidden md:block"></div>
             <div class="absolute inset-0 bg-gradient-to-t from-transparent to-loyola-red md:hidden"></div>
          </div>
          <!-- Content Right (in card) -->
          <div class="md:w-3/5 p-6 md:p-10 flex flex-col relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-white/80"></span>
              <span class="text-white/80 text-[10px] font-black tracking-[0.15em] uppercase">{{ t('scholarship.card_tag') }}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-black text-white leading-tight mb-2">
              {{ t('scholarship.card_title') }}
            </h3>
            <p class="text-white/80 text-[13px] leading-relaxed">
              {{ t('scholarship.card_desc') }}
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              <span class="bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-[11px] font-semibold hover:bg-white/20 transition-colors cursor-default">{{ t('scholarship.card_pill1') }}</span>
              <span class="bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-[11px] font-semibold hover:bg-white/20 transition-colors cursor-default">{{ t('scholarship.card_pill2') }}</span>
              <span class="bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-[11px] font-semibold hover:bg-white/20 transition-colors cursor-default">{{ t('scholarship.card_pill3') }}</span>
              <span class="bg-white/10 border border-white/20 text-white/90 px-3 py-1.5 rounded-full text-[11px] font-semibold hover:bg-white/20 transition-colors cursor-default">{{ t('scholarship.card_pill4') }}</span>
            </div>
          </div>
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
