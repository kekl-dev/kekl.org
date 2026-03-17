<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const config = useRuntimeConfig()
console.log('Fetching FAQ from:', config.public.spreadsheetApi)
const { data: rawData, pending, error } = await useFetch<any[]>(config.public.spreadsheetApi as string)

if (error.value) {
  console.error('FAQ Fetch Error:', error.value)
}

const faqData = computed(() => {
  let data: any = rawData.value

  // Safely handle string responses
  if (typeof data === 'string') {
    try {
      // Clean up potential Google Script garbage (often there's a prefix)
      const cleaned = data.trim();
      data = JSON.parse(cleaned)
    } catch (e) {
      if (data.includes('<html') || data.includes('<!DOCTYPE html>')) {
        console.error('API returned HTML instead of JSON. Check GAS permissions.')
      } else {
        console.error('Failed to parse FAQ response:', e)
      }
      return []
    }
  }

  // Handle common wrappers like { "data": [...] } or { "records": [...] }
  if (data && !Array.isArray(data)) {
    if (Array.isArray(data.data)) data = data.data
    else if (Array.isArray(data.records)) data = data.records
    else if (Array.isArray(data.items)) data = data.items
  }

  // Final check
  if (!Array.isArray(data)) {
    console.error('Resolved data is not an array:', typeof data)
    return []
  }
  
  // Sort and map
  return [...data]
    .filter(item => item && (item.Question || item.Answer || item.question || item.answer))
    .sort((a, b) => {
      const noA = Number(a.No || a.no || 0)
      const noB = Number(b.No || b.no || 0)
      return noA - noB
    })
    .map(item => ({
      question: item.Question || item.question || '',
      answer: item.Answer || item.answer || ''
    }))
})

const expandedItems = ref<boolean[]>([])

// Watch faqData to reset expandedItems when data arrives
watch(faqData, (newData) => {
  expandedItems.value = new Array(newData.length).fill(false)
}, { immediate: true })

const allExpanded = computed(() => faqData.value.length > 0 && expandedItems.value.length === faqData.value.length && expandedItems.value.every(item => item === true))
const allCollapsed = computed(() => expandedItems.value.length === faqData.value.length && expandedItems.value.every(item => item === false))

const toggleItem = (index: number) => {
  expandedItems.value[index] = !expandedItems.value[index]
}

const expandAll = () => {
  expandedItems.value = new Array(faqData.value.length).fill(true)
}

const collapseAll = () => {
  expandedItems.value = new Array(faqData.value.length).fill(false)
}
</script>

<template>
  <section id="faq" class="bg-[#f9f9f9] pt-40 pb-20 px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-serif font-black text-[#1a1a1a] mb-8 md:mb-10 text-center md:text-left">
        Frequently Asked Questions
      </h2>
      
      <!-- Expand / Collapse Controls -->
      <div class="flex justify-center md:justify-end gap-3 mb-8 md:mb-6">
        <button 
          @click="expandAll" 
          :disabled="allExpanded"
          class="border px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden flex items-center gap-2"
          :class="allExpanded ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed' : 'border-loyola-red text-loyola-red hover:bg-loyola-red/5 cursor-pointer'"
        >
          Expand all
          <Icon name="lucide:plus" class="w-4 h-4" />
        </button>
        <button 
          @click="collapseAll" 
          :disabled="allCollapsed"
          class="border px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden flex items-center gap-2"
          :class="allCollapsed ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed' : 'border-gray-400 text-gray-600 hover:bg-gray-100 cursor-pointer hover:border-gray-500 hover:text-gray-900'"
        >
          Collapse all
          <Icon name="lucide:minus" class="w-4 h-4" />
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="py-20 text-center">
        <Icon name="lucide:loader-2" class="h-8 w-8 animate-spin text-loyola-red mb-4" />
        <p class="text-gray-500 font-medium">Memuat Frequently Asked Questions...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="py-20 text-center text-red-500">
        <p class="font-bold mb-2">Gagal memuat FAQ</p>
        <p class="text-sm">Silakan coba lagi nanti atau hubungi administrator.</p>
      </div>

      <!-- FAQ Accordion List -->
      <div v-else class="border-t border-gray-400">
        <div 
          v-for="(faq, index) in faqData" 
          :key="index"
          class="border-b border-gray-400 group/item relative"
        >
          <!-- Red line that appears on hover/active state -->
          <div 
            class="absolute left-0 top-0 bottom-0 w-[5px] bg-loyola-red transition-opacity duration-200 pointer-events-none"
            :class="expandedItems[index] ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'"
          ></div>

          <button 
            @click="toggleItem(index)"
            class="w-full flex justify-between items-center py-4 md:py-5 pl-4 md:pl-6 text-left hover:bg-gray-50 transition-colors group/btn focus:outline-hidden cursor-pointer"
          >
            <span 
              class="text-[16px] md:text-[17px] font-bold font-sans text-[#1a1a1a] pr-4 md:pr-8 leading-tight group-hover/btn:underline decoration-1 underline-offset-4"
              :class="{ 'underline text-loyola-red': expandedItems[index] }"
            >
              {{ faq.question }}
            </span>
            <div class="text-loyola-red text-xl md:text-2xl font-bold leading-none shrink-0 group-hover/btn:scale-110 transition-transform flex items-center justify-center">
              <Icon :name="expandedItems[index] ? 'lucide:minus' : 'lucide:plus'" class="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </button>
          
          <div 
            v-show="expandedItems[index]" 
            class="pb-5 md:pb-6 pl-4 md:pl-6 text-[#4a4a4a] text-[14px] md:text-[15px] leading-relaxed pr-4 md:pr-8"
          >
            {{ faq.answer }}
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="faqData.length === 0" class="py-10 text-center text-gray-500">
          Belum ada pertanyaan yang tersedia.
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
