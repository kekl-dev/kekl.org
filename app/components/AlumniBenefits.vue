<script setup lang="ts">
const benefits = [
  {
    title: 'Any Platform. Anytime. Anywhere',
    description: `Reconnect, build new relationships, and relive your best moments with ease, whether you're browsing on your phone, tablet, or desktop. Enjoy a smooth, intuitive experience designed to keep you connected wherever life takes you.`,
    image: 'https://img.buzzfeed.com/buzzfeed-static/static/2024-06/1/15/asset/bb36008c8025/sub-buzz-8947-1717257505-1.jpg',
    icon: 'lucide:monitor-smartphone'
  },
  {
    title: 'Community Connections',
    description: 'Get closer to the communities that matter to you with search fields like community affinity, interests, area of study, location, and class year.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    icon: 'lucide:users'
  },
  {
    title: 'Career Connections',
    description: 'Open the door for future opportunities by finding others based on industry, company, skills & specialties, job title, and availability to offer career support.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1TVnn0S55fsUy0xPk506rK72a38bKAtJVg&s',
    icon: 'lucide:badge-check'
  }
]
</script>

<template>
  <section class="bg-[#f2f2f2] py-6 md:py-20 px-6 md:px-20 overflow-hidden">
    <div class="max-w-[1240px] mx-auto">

      <!-- Heading — right-aligned -->
      <div class="flex justify-end mb-12 md:mb-16 animate-fade-in">
        <div class="max-w-[640px] text-right">
          <p class="inline-flex items-center justify-end gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-4">
            Benefits
            <span class="h-px w-6 bg-loyola-red inline-block"></span>
          </p>
          <h2 class="text-xl md:text-3xl font-sans text-[#111111] leading-tight tracking-tight">
            Keluarga Eks Kolese Loyola At Your <span class="font-bold text-loyola-red">Fingertips</span>
          </h2>
          <p class="text-[14px] md:text-[15px] text-[#5a6373] leading-relaxed font-medium mt-4">
            The Alumni Directory is the only verified online listing of Loyola alumni.
            Whether you're looking to reconnect with a classmate, seek advice, or find professional connections.
          </p>
        </div>
      </div>

      <!-- 3 Benefit Cards — landscape 4:3 ratio -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 animate-slide-up"
          :class="index === 0
            ? 'bg-loyola-red text-white shadow-[0_16px_48px_rgba(140,21,21,0.28)]'
            : 'bg-white border border-black/6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]'"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <!-- Icon -->
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center"
            :class="index === 0 ? 'bg-white/15' : 'bg-loyola-red/8'"
          >
            <Icon
              :name="benefit.icon"
              class="w-5 h-5"
              :class="index === 0 ? 'text-white' : 'text-loyola-red'"
            />
          </div>

          <!-- Text block -->
          <div>
            <h3
              class="text-[20px] font-sans font-bold leading-snug mb-2"
              :class="index === 0 ? 'text-white' : 'text-[#111111]'"
            >
              {{ benefit.title }}
            </h3>
            <p
              class="text-[16px] leading-relaxed line-clamp-4"
              :class="index === 0 ? 'text-white/75' : 'text-[#5a6373]'"
            >
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <!-- <div class="flex justify-center animate-slide-up" style="animation-delay: 0.4s">
        <a href="#" class="inline-flex items-center gap-2 bg-loyola-red text-white px-10 py-4 font-black text-[11px] hover:bg-loyola-red/90 transition-all rounded-full shadow-[0_8px_28px_rgba(140,21,21,0.30)] hover:shadow-[0_14px_40px_rgba(140,21,21,0.40)] hover:-translate-y-0.5 tracking-[0.22em] uppercase">
          Visit the Directory
          <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
        </a>
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
