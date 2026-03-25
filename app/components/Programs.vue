<script setup lang="ts">
const programs = [
  {
    title: 'Alumni Regional Chapters',
    description: 'We are pleased to revive Alumni Regional Chapters in San Diego, Orange County, the Bay Area, Seattle, New York City, and the DMV. We look forward to working alongside alumni in each area to strengthen connections, foster networking, and provide meaningful avenues for engagement and service.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'KEKL Mentorship Program',
    description: 'The KEKL Mentorship Program connects experienced alumni with students and younger alumni to provide guidance, support, and professional development. Join us in building a stronger network of support for the next generation of Loyola leaders.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Professional Networking',
    description: 'Expand your professional reach through our networking events and interest-based groups. Whether you are looking for career advice or seeking to collaborate on new ventures, the KEKL network is here to help you succeed in your professional journey.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
]
</script>

<template>
  <section id="programs" class="bg-[#f9f9f9] pb-12 pt-10 px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Heading Section -->
      <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-fade-in">
        <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] leading-tight tracking-tight mb-6">
          Our <span class="highlight">Programs</span>
        </h2>
        <p class="text-[15px] md:text-[16px] text-[#4a4a4a] leading-relaxed font-medium">
          Dapatkan akses eksklusif ke berbagai program pengembangan diri, jaringan profesional, dan inisiatif komunitas yang dirancang khusus untuk Keluarga Eks Kolese Loyola.
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        <div 
          v-for="(program, index) in programs" 
          :key="index"
          class="flex flex-col space-y-6 group animate-slide-up"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <!-- Image -->
          <div class="aspect-square overflow-hidden rounded-xs">
            <img 
              :src="program.image" 
              :alt="program.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
          </div>

          <!-- Content -->
          <div class="space-y-4 flex-1">
            <h3 class="text-2xl font-bold text-loyola-red leading-tight">
              {{ program.title }}
            </h3>
            <p class="text-[15px] text-[#4a4a4a] leading-relaxed">
              {{ program.description }}
            </p>
          </div>

          <!-- Action -->
          <div class="pt-4">
            <a 
              :href="program.link" 
              class="inline-block w-full text-center border border-loyola-red py-4 text-[13px] font-black tracking-widest text-loyola-red hover:bg-loyola-red/5 transition-all duration-300 uppercase"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
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
