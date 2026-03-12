<script setup lang="ts">
import { ref, computed } from 'vue'
import { faqData } from '~/data/faq'

const expandedItems = ref<boolean[]>(new Array(faqData.length).fill(false))

const allExpanded = computed(() => expandedItems.value.length > 0 && expandedItems.value.every(item => item === true))
const allCollapsed = computed(() => expandedItems.value.every(item => item === false))

const toggleItem = (index: number) => {
  expandedItems.value[index] = !expandedItems.value[index]
}

const expandAll = () => {
  expandedItems.value = new Array(faqData.length).fill(true)
}

const collapseAll = () => {
  expandedItems.value = new Array(faqData.length).fill(false)
}
</script>

<template>
  <section id="faq" class="bg-[#f9f9f9] pt-40 pb-20 px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl md:text-5xl font-serif font-black text-[#1a1a1a] mb-10">
        Frequently Asked Questions
      </h2>
      
      <!-- Expand / Collapse Controls -->
      <div class="flex justify-end gap-3 mb-6">
        <button 
          @click="expandAll" 
          :disabled="allExpanded"
          class="border px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden"
          :class="allExpanded ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed' : 'border-loyola-red text-loyola-red hover:bg-loyola-red/5 cursor-pointer'"
        >
          Expand all +
        </button>
        <button 
          @click="collapseAll" 
          :disabled="allCollapsed"
          class="border px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden"
          :class="allCollapsed ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed' : 'border-gray-400 text-gray-600 hover:bg-gray-100 cursor-pointer hover:border-gray-500 hover:text-gray-900'"
        >
          Collapse all −
        </button>
      </div>

      <!-- FAQ Accordion List -->
      <div class="border-t border-gray-400">
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
            class="w-full flex justify-between items-center py-5 pl-6 text-left hover:bg-gray-50 transition-colors group/btn focus:outline-hidden cursor-pointer"
          >
            <span 
              class="text-[17px] font-bold font-sans text-[#1a1a1a] pr-8 leading-tight group-hover/btn:underline decoration-1 underline-offset-4"
              :class="{ 'underline text-loyola-red': expandedItems[index] }"
            >
              {{ faq.question }}
            </span>
            <span class="text-loyola-red text-2xl font-bold leading-none shrink-0 group-hover/btn:scale-110 transition-transform">
              {{ expandedItems[index] ? '−' : '+' }}
            </span>
          </button>
          
          <div 
            v-show="expandedItems[index]" 
            class="pb-6 pl-6 text-[#4a4a4a] text-[15px] leading-relaxed pr-8"
          >
            {{ faq.answer }}
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
