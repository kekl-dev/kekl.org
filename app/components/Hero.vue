<script setup lang="ts">
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img src="~/assets/img/KEKL-collage-hero.png" alt="Loyola Alumni" class="w-full h-full object-cover">
      <!-- Dark gradient overlay for premium look -->
      <div class="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90"></div>
    </div>

    <!-- Centered Content -->
    <div class="relative z-10 max-w-5xl px-8 text-center text-white flex-1 flex flex-col justify-center mb-10 ">
      <p class="w-fit mx-auto px-5 py-2 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-xs md:text-sm font-medium mb-8 animate-fade-in tracking-widest text-accent-yellow drop-shadow-sm uppercase">
        LOYOLA COLLEGE ALUMNI DIRECTORY
      </p>
      
      <h1 class="text-5xl md:text-7xl font-sans font-black mb-8 md:mb-10 leading-[1.05] animate-slide-up tracking-tight">
        Men & Women<br> 
        <span class="text-white relative inline-block">
          for Others
        </span>
      </h1>

      <p class="text-[15px] md:text-xl font-medium max-w-2xl mx-auto mb-12 md:mb-16 text-white/90 leading-relaxed drop-shadow-md px-4 md:px-0">
        Find and connect with fellow KEKL. Explore any potential collaboration with other alumni within the same value.
      </p>

      <!-- Action Links -->
      <div class="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 text-[16px] font-bold">
        <!-- Visit the Directory -->
        <a href="#" class="group flex items-center gap-4 hover:text-accent-yellow transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-yellow group-hover:text-black transition-all border border-white/20 shadow-lg group-hover:scale-110">
            <Icon name="lucide:book-open" class="w-6 h-6" />
          </div>
          <div class="relative py-1">
            <span>Visit the Directory <Icon name="lucide:arrow-right" class="text-accent-yellow group-hover:translate-x-1 inline-block transition-transform ml-1" /></span>
            <!-- Animated Sliding Underline -->
            <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        </a>
        
        <!-- Update your Profile -->
        <a href="#" class="group flex items-center gap-4 hover:text-accent-yellow transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-yellow group-hover:text-black transition-all border border-white/20 shadow-lg group-hover:scale-110">
            <Icon name="lucide:user" class="w-6 h-6" />
          </div>
          <div class="relative py-1">
            <span>Update your Profile <Icon name="lucide:arrow-right" class="text-accent-yellow group-hover:translate-x-1 inline-block transition-transform ml-1" /></span>
            <!-- Animated Sliding Underline -->
            <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        </a>

        <!-- Read FAQs -->
        <a href="#faq" class="group flex items-center gap-4 hover:text-accent-yellow transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-yellow group-hover:text-black transition-all border border-white/20 shadow-lg group-hover:scale-110">
            <Icon name="lucide:help-circle" class="w-6 h-6" />
          </div>
          <div class="relative py-1">
            <span>Read FAQs <Icon name="lucide:chevron-down" class="text-accent-yellow group-hover:translate-y-1 inline-block transition-transform ml-1" /></span>
            <!-- Animated Sliding Underline -->
            <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        </a>
      </div>
    </div>

    <div class="relative w-full text-center text-sm font-semibold text-white/60">
      <p>
        CONNECT • SHARE • COLLABORATE
      </p>
    </div>

    <!-- Bottom Attribution Bar -->
    <div class="relative w-full py-5 text-center text-sm font-light text-white/60">
      <div class="max-w-4xl mx-auto px-8">
        Access to the KEKL Alumni Directory is restricted to registered members. A preliminary KYC verification will be carried out to confirm member authenticity.
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}
.animate-slide-up {
  animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
