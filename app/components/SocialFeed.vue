<script setup lang="ts">
import { ref, computed } from 'vue'
import { instagramPosts } from '@/data/instagramPosts'

const isExpanded = ref(false)
const expandedCaptions = ref<Set<number>>(new Set())

// Logic for stable masonry: distribute posts into 3 columns
const columns = computed(() => {
  const cols: any[][] = [[], [], []]
  const postsToShow = isExpanded.value ? instagramPosts : instagramPosts.slice(0, 3)
  
  postsToShow.forEach((post, index) => {
    const col = cols[index % 3]
    if (col) col.push(post)
  })
  
  return cols
})

const handleButtonClick = () => {
  if (isExpanded.value) {
    window.open('https://www.instagram.com/smakoleseloyola', '_blank')
  } else {
    isExpanded.value = true
  }
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
  <section class="bg-[#f9f9f9] py-24 px-8 border-t border-gray-100">
    <div class="max-w-[1240px] mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 md:mb-8 font-serif tracking-tight">
          Get Social
        </h2>
      </div>
      
      <!-- Stable Masonry Grid -->
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div 
          v-for="(column, colIndex) in columns" 
          :key="colIndex"
          class="flex-1 flex flex-col gap-8 w-full"
        >
          <div 
            v-for="post in column" 
            :key="post.id"
            class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden transition-all duration-300 w-full"
          >
            <!-- Card Header -->
            <div class="px-4 py-3 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full border border-gray-100 p-0.5 overflow-hidden">
                  <img 
                    src="~/assets/img/kekl-square-logo.jpg"
                    alt="Loyola Alumni" 
                    class="w-full h-full rounded-full object-contain"
                  >
                </div>
                <div>
                  <p class="text-[13px] font-bold text-gray-900 leading-tight">Keluarga Eks Kolese Loyola</p>
                  <p class="text-[11px] text-gray-500">@keklofficial</p>
                </div>
              </div>
              <div class="text-[#1a1a1a]/80">
                <Icon name="lucide:instagram" class="w-5 h-5" />
              </div>
            </div>

            <!-- Media Link (Redirection restricted to image only) -->
            <a 
              :href="post.link" 
              target="_blank"
              class="group block relative overflow-hidden bg-gray-50"
            >
              <img 
                :src="post.image" 
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                :alt="post.caption"
              >
              <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div class="flex items-center gap-6 text-white font-bold text-lg">
                  <div class="flex items-center gap-1.5 drop-shadow-lg">
                     <Icon name="lucide:heart" class="w-7 h-7" />
                     <span>{{ post.likes }}</span>
                  </div>
                </div>
              </div>
            </a>

            <!-- Caption Section -->
            <div class="p-4 pt-4">
              <p 
                class="text-[14px] text-gray-800 leading-normal transition-all duration-300"
                :class="isCaptionExpanded(post.id) ? 'whitespace-pre-wrap' : ''"
                v-html="formatCaption(isCaptionExpanded(post.id) ? post.caption : (post.caption.length > 250 ? post.caption.slice(0, 250) + '...' : post.caption))"
              >
              </p>
              <button 
                v-if="post.caption.length > 250"
                @click="toggleCaption(post.id)"
                class="mt-1 text-[12px] font-bold text-loyola-red hover:text-loyola-red/80 transition-colors uppercase tracking-tight cursor-pointer"
              >
                {{ isCaptionExpanded(post.id) ? 'SHOW LESS' : 'SHOW MORE...' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="text-center mt-16">
        <button 
          @click="handleButtonClick"
          class="inline-flex items-center gap-2 border-2 px-10 py-4 font-bold text-[14px] transition-all duration-300 tracking-wider uppercase rounded-full group cursor-pointer"
          :class="isExpanded 
            ? 'bg-loyola-red border-loyola-red text-white hover:bg-loyola-red/90' 
            : 'bg-transparent border-[#1a1a1a] text-[#1a1a1a] hover:border-loyola-red hover:text-loyola-red'"
        >
          {{ isExpanded ? 'Follow Us On Instagram' : 'See All' }}
          <Icon v-if="!isExpanded" name="lucide:chevron-down" class="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          <Icon v-else name="lucide:arrow-up-right" class="w-4 h-4" />
        </button>
      </div>

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
