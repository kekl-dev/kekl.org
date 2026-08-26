<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { faqData as localFaqData } from '@/data/faq'

const { t, currentLang } = useLanguage()

// --- API Fetching (Commented out for development) ---
/*
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
*/

// --- Local Sample Data for Development ---
const faqData = computed(() => {
  return localFaqData.map((item: any) => ({
    question: item[currentLang.value].question,
    answer: item[currentLang.value].answer
  }))
})
const pending = ref(false)
const error = ref(null)

const expandedItems = ref<boolean[]>([])

// Watch faqData to reset expandedItems when data arrives
watch(faqData, (newData) => {
  expandedItems.value = new Array(newData.length).fill(false)
}, { immediate: true })

const allExpanded = computed(() => faqData.value.length > 0 && expandedItems.value.length === faqData.value.length && expandedItems.value.every(item => item === true))

const toggleItem = (index: number) => {
  expandedItems.value[index] = !expandedItems.value[index]
}

const toggleAll = () => {
  const targetState = !allExpanded.value
  expandedItems.value = new Array(faqData.value.length).fill(targetState)
}
</script>

<template>
  <section id="faq" class="bg-white py-20 md:py-28 px-6 md:px-10">
    <div class="max-w-[900px] mx-auto">

      <!-- Heading -->
      <div class="text-center mb-12 md:mb-16">
        <p class="inline-flex items-center gap-2 text-[16px] font-black tracking-[0.25em] uppercase text-loyola-red mb-4">
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
          {{ t('faq.tag') }}
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
        </p>
        <h2 class="text-3xl md:text-5xl font-sans  text-[#111111] leading-tight tracking-tight mt-1">
          {{ t('faq.title1') }}<span class="font-bold text-loyola-red">{{ t('faq.title2') }}</span>
        </h2>
        <p class="text-[15px] md:text-[16px] text-[#5a6373] font-medium mt-5">
          {{ t('faq.desc') }}
        </p>
      </div>

      <!-- Expand / Collapse Controls -->
      <div class="flex justify-center mb-8 md:mb-10">
        <button
          @click="toggleAll"
          class="border border-loyola-red text-loyola-red bg-white hover:bg-loyola-red hover:text-white px-5 py-2.5 text-[11px] font-black tracking-[0.18em] uppercase transition-all focus:outline-hidden flex items-center gap-2 rounded-full cursor-pointer shadow-[0_4px_16px_rgba(140,21,21,0.12)]"
        >
          {{ allExpanded ? t('faq.btn_collapse') : t('faq.btn_expand') }}
          <Icon :name="allExpanded ? 'lucide:minus' : 'lucide:plus'" class="w-3.5 h-3.5" />
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="py-20 text-center">
        <Icon name="lucide:loader-2" class="h-8 w-8 animate-spin text-loyola-red mb-4" />
        <p class="text-[#5a6373] font-medium">{{ t('faq.loading') }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="py-20 text-center text-red-500">
        <p class="font-bold mb-2">{{ t('faq.error_title') }}</p>
        <p class="text-sm">{{ t('faq.error_desc') }}</p>
      </div>

      <!-- FAQ Accordion List -->
      <div v-else class="space-y-3">
        <div
          v-for="(faq, index) in faqData"
          :key="index"
          class="rounded-2xl border overflow-hidden transition-all duration-300"
          :class="expandedItems[index]
            ? 'border-loyola-red/25 shadow-[0_4px_20px_rgba(140,21,21,0.08)] bg-white'
            : 'border-black/8 bg-white hover:border-black/14 shadow-[0_2px_10px_rgba(0,0,0,0.04)]'"
        >
          <!-- Question row -->
          <button
            @click="toggleItem(index)"
            class="w-full flex justify-between items-center px-6 py-5 text-left transition-colors focus:outline-hidden cursor-pointer group/btn"
          >
            <span
              class="text-[14px] md:text-[15px] font-black text-[#111111] pr-4 md:pr-8 leading-tight group-hover/btn:text-loyola-red transition-colors"
              :class="{ 'text-loyola-red': expandedItems[index] }"
            >
              {{ faq.question }}
            </span>
            <div
              class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
              :class="expandedItems[index]
                ? 'bg-loyola-red text-white rotate-45'
                : 'bg-[#f0f0f0] text-[#444] group-hover/btn:bg-loyola-red/10 group-hover/btn:text-loyola-red'"
            >
              <Icon name="lucide:plus" class="w-4 h-4" />
            </div>
          </button>

          <!-- Answer -->
          <div
            v-show="expandedItems[index]"
            class="px-6 pb-6 text-[#5a6373] text-[14px] leading-relaxed border-t border-black/5 pt-4"
          >
            {{ faq.answer }}
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="faqData.length === 0" class="py-10 text-center text-[#5a6373]">
          {{ t('faq.empty') }}
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

