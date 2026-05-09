<script setup lang="ts">
import { ref, computed } from 'vue'
import { instagramPosts } from '@/data/instagramPosts'

const isExpanded = ref(false)
const expandedCaptions = ref<Set<number>>(new Set())

const previewPosts = computed(() => instagramPosts.slice(0, 8))

const handleButtonClick = () => {
  window.location.href = '/#'
}

const toggleCaption = (id: number) => {
  if (expandedCaptions.value.has(id)) {
    expandedCaptions.value.delete(id)
  } else {
    expandedCaptions.value.add(id)
  }
}

const isCaptionExpanded = (id: number) => expandedCaptions.value.has(id)

const formatCaption = (text: string) => {
  if (!text) return ''
  // Basic XSS protection: escape < and >
  const escaped = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  // Highlight hashtags (#tag) and mentions (@user)
  return escaped.replace(/((?:#|@)\w+)/g, (match) => {
    const className = match.startsWith('#') ? 'hashtag' : 'mention'
    return `<span class="${className}">${match}</span>`
  })
}
</script>

<template>
  <section class="bg-[#f7f7f7] py-20 md:py-28 px-6 md:px-20 border-t border-black/5">
    <div class="max-w-[1240px] mx-auto">

      <!-- Section Header Row: Title left, Button right -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 md:mb-12">
        <div>
          <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-3">
            <span class="h-px w-6 bg-loyola-red inline-block"></span>
            Instagram
          </p>
          <h2 class="text-xl md:text-3xl font-sans text-[#111111] leading-tight tracking-tight">
            Update Terbaru dari <span class="font-bold text-loyola-red"> Instagram Kami </span>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/keklofficial/"
          target="_blank"
          class="shrink-0 items-center justify-center gap-2 px-7 py-3.5 font-black text-[11px] transition-all duration-300 tracking-[0.2em] uppercase rounded-full cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-loyola-red text-white hover:bg-loyola-red/90 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(140,21,21,0.30)] self-start sm:self-auto hidden md:flex"
        >
        <Icon name="lucide:instagram" class="w-6 h-6" />
          See More
      </a>
      </div>

      <!-- Instagram Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <a
          v-for="post in previewPosts"
          :key="post.id"
          :href="post.link"
          target="_blank"
          class="group relative rounded-xl overflow-hidden bg-[#e8e8e8] border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
        >
          <img
            :src="post.image"
            :alt="post.caption"
            class="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          >

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
            <div class="w-full p-3 md:p-4">
              <div class="flex items-center justify-between text-white">
                <div class="flex items-center gap-1.5">
                  <Icon name="lucide:heart" class="w-4 h-4" />
                  <span class="text-[12px] font-black">{{ post.likes }}</span>
                </div>
                <Icon name="lucide:instagram" class="w-4 h-4 opacity-80" />
              </div>
            </div>
          </div>
        </a>
      </div>
       <a
          href="https://www.instagram.com/keklofficial/"
          target="_blank"
          class="flex items-center justify-center gap-2 w-full rounded-full bg-loyola-red text-white py-3.5 text-[12px] font-black tracking-[0.18em] uppercase hover:bg-loyola-red/90 transition-all duration-300 shadow-[0_4px_16px_rgba(140,21,21,0.20)] hover:shadow-[0_8px_24px_rgba(140,21,21,0.30)] self-start sm:self-auto md:hidden mt-10"
        >
        <Icon name="lucide:instagram" class="w-6 h-6" />
          See More
      </a>

    </div>
  </section>
</template>

<style scoped>
:deep(.hashtag),
:deep(.mention) {
  color: #405DE6;
  font-weight: 500;
}
</style>
