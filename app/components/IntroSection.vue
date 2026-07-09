<script setup lang="ts">
const { t } = useLanguage()
</script>

<template>
  <section class="bg-loyola-red py-16 md:py-20 px-6 md:px-20 overflow-hidden">
    <div class="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

      <!-- Left Content: Text & CTA -->
      <div class="flex-1 space-y-6 md:space-y-10 text-left">
        <h2 class="text-3xl md:text-4xl font-sans text-[#f9f9f9] leading-[1.1] tracking-tight">
          Connect • Share • Collaborate<br>
          <span class="text-accent font-bold">{{ t('intro.title2') }}</span>
        </h2>

        <div class="space-y-4 md:space-y-6 max-w-2xl mx-auto lg:mx-0 text-[15px] md:text-[16px] text-[#f9f9f9] leading-relaxed font-medium">
          <p>
            {{ t('intro.desc1') }}
          </p>
          <p>
            {{ t('intro.desc2_start') }}<a href="#" class="text-accent border-b-2 border-accent font-bold hover:text-accent/80 transition-colors">{{ t('intro.desc2_link') }}</a>{{ t('intro.desc2_end') }}
          </p>
        </div>

        <div class="pt-2 md:pt-4">
        <a href="#" class="inline-flex items-center gap-2 bg-accent text-loyola-red px-10 py-4 font-black text-[11px] hover:bg-accent/90 transition-all rounded-full shadow-[0_8px_28px_rgba(140,21,21,0.30)] hover:shadow-[0_14px_40px_rgba(140,21,21,0.40)] hover:-translate-y-0.5 tracking-[0.22em] uppercase">
          <Icon name="ph:youtube-logo-fill" class="w-6 h-6" />
          {{ t('intro.btn_visit') }}
        </a>
        </div>
      </div>

      <!-- Right Content: Embedded Video -->
      <div class="flex-1 w-full max-w-2xl">
        <div class="relative group">
          <!-- Video Container -->
          <div class="relative aspect-video overflow-hidden rounded-[16px] shadow-2xl border border-black/5">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/fBSmMYrX6Os?si=Gd1P2WMYFM6uQzX1"
              title="Welcome to the Loyola Alumni Directory"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>

          <!-- Caption styling -->
          <div class="mt-6 text-right space-y-1">
            <p class="text-sm font-bold text-[#f9f9f9]">{{ t('intro.video_title') }}</p>
            <p class="text-[12px] text-[#f9f9f9] italic" v-html="t('intro.video_caption')"></p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
h2 {
  letter-spacing: -0.02em;
}
</style>
