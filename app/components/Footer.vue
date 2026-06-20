<script setup lang="ts">
const mapLink = "https://maps.app.goo.gl/bpam6Qfk66JSzRA4A"
</script>

<template>
  <footer class="text-white w-full">
    <!-- Top Tier (Dark Section with Background) -->
    <div class="relative bg-[#0b0b0b] pt-20 pb-20 md:pb-24 overflow-hidden">
      <!-- Background Image Overlay (Subtle) -->
      <div class="absolute inset-0 z-0 opacity-15 mix-blend-luminosity">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop" alt="Campus Building" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-linear-to-b from-transparent to-[#0b0b0b]"></div>
      </div>

      <div class="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10">
        <!-- Links Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-[14px] text-white/70 leading-relaxed mb-12 md:mb-14">
          <!-- Column 1: Address -->
          <div class="space-y-1">
            <p class="font-black text-white text-[16px]">Loyola Senior High School</p>
            <p>Karang Anyar Street No.37</p>
            <p>Semarang, Central Java 50135</p>
            <a :href="mapLink" class="inline-flex items-center gap-2 text-white hover:text-loyola-red transition-colors font-black mt-3 text-[13px] tracking-[0.14em] uppercase">
              Map & Directions 
              <span class="text-loyola-red text-[11px] font-black">↗</span>
            </a>
          </div>

          <!-- Column 2 -->
          <ul class="space-y-4 font-black text-white">
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Event</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Story</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Programs</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Merchandise</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Volunteer</a></li>
          </ul>

          <!-- Column 3 -->
          <ul class="space-y-4 text-white">
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Alumni Regional Chapter (BPK)</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Endowment Fund (Dana Abadi)</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Scholarship (Beasiswa)</a></li>
            <li><a href="#" class="hover:text-loyola-red transition-colors text-[14px]">Hobby Club (Organisasi Hobi)</a></li>
          </ul>

          <!-- Column 4 -->
          <ul class="space-y-4 text-white/70">
            <li><a href="#" class="hover:text-white transition-colors text-[14px]">Access KEKL Directory <Icon name="lucide:arrow-up-right" class="w-3 h-3 opacity-60" /></a></li>
            <li><a href="#" class="hover:text-white transition-colors text-[14px]">Feedback</a></li>
            <!-- <li><a href="#" class="hover:text-white transition-colors text-[14px]">Terms of Use</a></li>
            <li><a href="#" class="hover:text-white transition-colors text-[14px]">Code of Conduct</a></li> -->
          </ul>
        </div>

        <!-- Social Icons -->
        <div class="flex gap-5 text-white">
          <a href="#" class="hover:text-loyola-red transition-colors" aria-label="Facebook">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
          </a>
          <a href="#" class="hover:text-loyola-red transition-colors" aria-label="LinkedIn">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="hover:text-loyola-red transition-colors" aria-label="Instagram">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" class="hover:text-loyola-red transition-colors" aria-label="YouTube">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Tier (Red Section) -->
    <div class="bg-loyola-red py-10 md:py-12">
      <div class="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <!-- Bottom Logo -->
        <div class="shrink-0 pt-1 flex justify-center w-full md:w-auto mb-2 md:mb-0">
          <img src="~/assets/img/kekl-white.png" alt="Loyola University" class="h-16 md:h-24 w-auto object-contain">
        </div>

        <!-- Bottom Links -->
        <div class="flex-1 w-full flex flex-col items-center md:items-start md:pl-10">
          <!-- Content Container: Columns on Mobile, Rows on Desktop -->
          <div class="flex flex-row md:flex-col justify-center md:justify-start gap-x-8 sm:gap-x-16 md:gap-y-3 mb-8 md:mb-6 w-full md:w-auto max-w-[420px] md:max-w-none">
            <!-- Group 1: Left Col (Mobile) / Row 1 (Desktop) -->
            <ul class="flex flex-col md:flex-row text-left gap-y-4 md:gap-x-6 lg:gap-x-8 font-black text-[13px] md:text-[14px] text-white tracking-[0.12em] uppercase">
              <li><a href="#" class="hover:opacity-80">Loyola College</a></li>
              <li><a href="#" class="hover:opacity-80">Map & Directions</a></li>
              <li><a href="#" class="hover:opacity-80">Committee</a></li>
            </ul>
            
            <!-- Group 2: Right Col (Mobile) / Row 2 (Desktop) -->
            <ul class="flex flex-col md:flex-row flex-wrap text-left gap-y-4 md:gap-x-5 lg:gap-x-6 font-medium text-[13px] text-white/90">
              <li><a href="#" class="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Privacy Policy </a></li>
              <li><a href="#" class="hover:text-white transition-colors">Feedback</a></li>
              <!-- <li><a href="#" class="hover:text-white transition-colors">Trademarks</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Non-Discrimination</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Accessibility</a></li> -->
            </ul>
          </div>

          <!-- Copyright -->
          <p class="text-white/85 text-[13px] text-center md:text-left mt-2 md:mt-0">
            © Keluarga Eks Kolese Loyola, Semarang.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>