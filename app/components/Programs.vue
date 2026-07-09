<script setup lang="ts">
import { computed } from 'vue'
const { t } = useLanguage()

const programs = computed(() => [
  {
    title: t('regional.title1') + ' ' + t('regional.title2'),
    description: t('regional.description'),
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: t('endowment.title1') + ' ' + t('endowment.title2'),
    description: t('endowment.description'),
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop',
    link: 'https://kekl-scholarship-danaabadi.framer.website/dana-abadi'
  },
  {
    title: t('scholarship.title_black') + ' ' + t('scholarship.title_red'),
    description: t('scholarship.description'),
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    link: 'https://kekl-scholarship-danaabadi.framer.website/'
  }
])
</script>

<template>
  <section id="programs" class="bg-loyola-red py-6 md:py-20 px-6 md:px-20 overflow-hidden">
    <div class="max-w-[1240px] mx-auto">

      <!-- Heading -->
      <div class="max-w-2xl mx-auto text-center mb-14 md:mb-18 animate-fade-in">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-white/80 mb-4">
          <span class="h-px w-6 bg-white/80 inline-block"></span>
          {{ t('programs.tag') }}
          <span class="h-px w-6 bg-white/80 inline-block"></span>
        </p>
        <h2 class="text-xl md:text-3xl font-sans font-black text-white leading-tight tracking-tight mt-1">
          {{ t('programs.title1') }} <span class="text-white/80">{{ t('programs.title2') }}</span>
        </h2>
        <p class="text-[15px] md:text-[16px] text-white/80 leading-relaxed font-medium mt-5">
          {{ t('programs.description') }}
        </p>
      </div>

      <!-- Programs Grid -->
      <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="group animate-slide-up"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <div class="bg-white rounded-3xl border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-full flex flex-col hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-400 p-4">

            Image — inset with rounded corners
            <div class="relative rounded-2xl overflow-hidden bg-[#ececec] aspect-[4/3]">
              <img
                :src="program.image"
                :alt="program.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
            </div>

            Content
            <div class="pt-5 px-2 pb-2 flex-1 flex flex-col gap-3">

              Title
              <h3 class="text-[16px] md:text-[17px] font-sans font-bold text-[#111111] leading-snug">
                {{ program.title }}
              </h3>



              Description
              <p class="text-[13px] text-[#5a6373] leading-relaxed flex-1">
                {{ program.description }}
              </p>

              Full-width CTA Button
              <div class="pt-3 mt-auto">
                <a
                  :href="program.link"
                  class="flex items-center justify-center w-full rounded-xl bg-loyola-red text-white py-3.5 text-[12px] font-black tracking-[0.18em] uppercase hover:bg-loyola-red/90 transition-all duration-300 shadow-[0_4px_16px_rgba(140,21,21,0.20)] hover:shadow-[0_8px_24px_rgba(140,21,21,0.30)]"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

h2 {
  letter-spacing: -0.02em;
}
</style>
