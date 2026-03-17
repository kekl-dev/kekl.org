<script setup lang="ts">
</script>

<template>
  <section class="bg-white py-16 md:py-20 px-6 md:px-36 overflow-hidden">
    <div class="max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      
      <!-- Left Content: Text & CTA -->
      <div class="flex-1 space-y-6 md:space-y-10 text-left">
        <h2 class="text-3xl md:text-4xl font-serif font-black text-[#1a1a1a] leading-[1.1] tracking-tight">
          Connect • Share • Collaborate<br>
          All in <span class="highlight">One Place</span>
        </h2>
        
        <div class="space-y-4 md:space-y-6 max-w-2xl mx-auto lg:mx-0 text-[15px] md:text-[16px] text-[#4a4a4a] leading-relaxed font-medium">
          <p>
            Find various events, experiences and many ways to connect with, and support other KEKL member. Update your profile today and start making more meaningful and impactful connections.
          </p>
          <p>
            Check out our <a href="#" class="text-loyola-red border-b-2 border-loyola-red font-bold hover:text-loyola-red/80 transition-colors">video</a> for tips on how to user the Alumni Directory and start making connections today!
          </p>
        </div>

        <div class="pt-2 md:pt-4">
          <a href="#" class="group relative inline-flex items-center gap-2 text-loyola-red text-lg md:text-xl font-bold transition-all">
            <span class="border-b-2 border-loyola-red pb-1 group-hover:border-loyola-red/40 transition-colors">Update your Directory profile</span>
          </a>
        </div>
      </div>

      <!-- Right Content: Embedded Video -->
      <div class="flex-1 w-full max-w-2xl">
        <div class="relative group">
          <!-- Video Container -->
          <div class="relative aspect-video overflow-hidden shadow-2xl border border-black/5">
            <iframe 
              class="w-full h-full"
              src="https://www.youtube.com/embed/E9JcZlfTJZE" 
              title="Welcome to the Loyola Alumni Directory"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
          
          <!-- Caption styling -->
          <div class="mt-6 text-right space-y-1">
            <p class="text-sm font-bold text-[#4a4a4a]">How to Update Your Alumni Directory Profile</p>
            <p class="text-[12px] text-[#8a8a8a] italic">Please note that the LinkedIn Import feature has been discontinued as of March 31, 2024.</p>
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
