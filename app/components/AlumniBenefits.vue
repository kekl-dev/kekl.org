<script setup lang="ts">
const benefits = [
  {
    title: 'Any Platform. Anytime. Anywhere',
    description: `Reconnect, build new relationships, and relive your best moments with ease, whether you're browsing on your phone, tablet, or desktop. Enjoy a smooth, intuitive experience designed to keep you connected wherever life takes you.`,
    image: 'https://img.buzzfeed.com/buzzfeed-static/static/2024-06/1/15/asset/bb36008c8025/sub-buzz-8947-1717257505-1.jpg'
  },
  {
    title: 'Community Connections',
    description: 'Get closer to the communities that matter to you with search fields like community affinity, interests, area of study, location, and class year.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Career Connections',
    description: 'Open the door for future opportunities by finding others based on industry, company, skills & specialties, job title, and availability to offer career support.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1TVnn0S55fsUy0xPk506rK72a38bKAtJVg&s'
  }
]
</script>

<template>
  <section class="bg-white py-24 px-8 overflow-hidden">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Heading Section -->
      <div class="max-w-4xl mx-auto space-y-4 md:space-y-8 mb-12 md:mb-20 animate-fade-in">
        <h2 class="text-3xl md:text-5xl font-serif font-black text-[#2d2d2d] leading-tight tracking-tight">
          Keluarga Eks Kolese Loyola<br>
          At Your <span class="highlight">Fingertips</span>
        </h2>
        
        <p class="text-[15px] md:text-[16px] text-[#4a4a4a] leading-relaxed font-medium px-4 md:px-0">
          The Alumni Directory is the only verified online listing of Loyola alumni. 
          Whether you're looking to reconnect with a classmate, seek advice, discover alumni with similar interests, or find out if a company is a right fit for you, the Alumni Directory is a helpful resource for alumni and students looking to make personal and professional connections.
        </p>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 md:mb-20">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-lg border border-black/5 flex flex-col hover:shadow-2xl transition-all duration-300 animate-slide-up"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <div class="h-[200px] md:h-[300px] relative overflow-hidden">
            <img 
              :src="benefit.image" 
              :alt="benefit.title" 
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            >
          </div>
          <div class="px-5 py-5 md:px-6 md:py-6 flex-1 flex flex-col text-left space-y-2 md:space-y-3">
            <h3 class="text-xl md:text-xl font-bold text-[#1a1a1a] leading-snug">{{ benefit.title }}</h3>
            <p class="text-[14px] md:text-[16px] text-[#4a4a4a] leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="animate-slide-up" style="animation-delay: 0.4s">
        <a href="#" class="inline-block bg-loyola-red text-white px-5 py-5 font-bold text-md hover:bg-loyola-red/90 transition-all rounded shadow-lg hover:shadow-xl hover:-translate-y-1">
          Visit the Directory
        </a>
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
