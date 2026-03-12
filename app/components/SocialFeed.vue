<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

const posts = ref<InstagramPost[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// IMPORTANT: This needs a valid Instagram Access Token.
// Currently it uses a sample layout with placeholders if no token is provided.
const INSTAGRAM_TOKEN = import.meta.env.VITE_INSTAGRAM_TOKEN || ''

const fetchInstagramPosts = async () => {
  if (!INSTAGRAM_TOKEN) {
    loading.value = false
    // Load mock data so the UI still looks like the design while waiting for token
    posts.value = [
      {
        id: '1',
        caption: 'Meet Cathy Collette \'03, alumni lead for Loyola Alumni Day of Service. In celebration of International Women\'s Day 💜🌎💮, we are proud to spotlight Cathy\'s leadership and commitment to service. #LoyolaAlumni #InternationalWomensDay',
        media_type: 'IMAGE',
        media_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        permalink: '#',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        caption: 'Thank you to the many alumni who joined us for the Arts + Entertainment Mixer 🎬 🎨 and generously shared their time, insight, and experience with our students.',
        media_type: 'VIDEO',
        media_url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
        thumbnail_url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
        permalink: '#',
        timestamp: new Date().toISOString()
      },
      {
        id: '3',
        caption: 'Merry Christmas, Loyola alumni! 🎄 ✨ Wishing you a season full of joy, peace, and Lion pride wherever you are. 🦁 ❤️ 🎁',
        media_type: 'IMAGE',
        media_url: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=800&auto=format&fit=crop',
        permalink: '#',
        timestamp: new Date().toISOString()
      },
      {
        id: '4',
        caption: 'Holiday break plans, solved. 🎄 🏀 Round up your crew for game day on Dec. 28.',
        media_type: 'IMAGE',
        media_url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
        permalink: '#',
        timestamp: new Date().toISOString()
      },
      {
        id: '5',
        caption: 'Ready to feel confident about homeownership? Join us on Zoom Saturday, Jan. 24, 2026, from 9-11 a.m. for a virtual alumni forum.',
        media_type: 'IMAGE',
        media_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
        permalink: '#',
        timestamp: new Date().toISOString()
      }
    ]
    return
  }

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}`)
    if (!response.ok) throw new Error('Failed to fetch Instagram posts')
    
    const data = await response.json()
    posts.value = data.data.slice(0, 9) // Limit to 9 posts
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const truncateCaption = (caption: string, length: number = 150) => {
  if (!caption) return ''
  if (caption.length <= length) return caption
  return caption.substring(0, length) + '...'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

onMounted(() => {
  fetchInstagramPosts()
})
</script>

<template>
  <section class="bg-white py-24 px-8 border-t border-gray-100">
    <div class="max-w-[1400px] mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 md:mb-8 font-serif tracking-tight">
          Get Social
        </h2>
      </div>
      
      <!-- Loading & Error States -->
      <div v-if="loading" class="text-center py-20 text-gray-500">
        Loading posts...
      </div>
      <div v-else-if="error" class="text-center py-20 text-red-500">
        {{ error }}
      </div>

      <!-- Masonry Grid for Posts -->
      <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div 
          v-for="post in posts" 
          :key="post.id"
          class="break-inside-avoid bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Card Header (User Info) -->
          <div class="px-4 py-3 flex items-center justify-between border-b border-gray-50">
            <div class="flex items-center gap-3">
              <img src="~/assets/img/logo-loyola.png" alt="Loyola Alumni" class="w-8 h-8 rounded-full border border-gray-200 object-contain p-1">
              <div>
                <p class="text-[13px] font-bold text-gray-900 leading-tight">Loyola Alumni</p>
                <p class="text-[11px] text-gray-500">@smakoleseloyola</p>
              </div>
            </div>
            <!-- Instagram icon top right -->
            <a :href="post.permalink" target="_blank" class="text-pink-600 hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          <!-- Media Element (Image/Video) -->
          <a :href="post.permalink" target="_blank" class="block relative group">
            <img 
              :src="post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url" 
              class="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
              loading="lazy"
            >
            <!-- Video Play Overlay indicator -->
            <div v-if="post.media_type === 'VIDEO'" class="absolute inset-0 flex items-center justify-center">
              <div class="bg-white/50 backdrop-blur-xs rounded-full p-4 hover:scale-110 transition-transform">
                 <svg class="w-8 h-8 text-black/70 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <!-- Multiple image indicator -->
            <div v-if="post.media_type === 'CAROUSEL_ALBUM'" class="absolute top-3 right-3 bg-black/50 rounded p-1">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>
          </a>

          <!-- Caption Section -->
          <div class="p-4 md:p-5">
            <p class="text-[12px] md:text-[13px] text-[#4a4a4a] whitespace-pre-wrap leading-relaxed">
              {{ truncateCaption(post.caption, 180) }}
            </p>
            <a :href="post.permalink" target="_blank" class="mt-3 inline-block text-[11px] font-bold text-gray-400 uppercase tracking-wide hover:text-gray-700 transition-colors">
              SHOW MORE...
            </a>
          </div>
        </div>
      </div>

      <!-- Load More Button Placeholder -->
      <div v-if="posts.length > 0" class="text-center mt-12">
        <button class="border border-gray-300 bg-white text-gray-700 font-bold text-[13px] py-3 px-10 hover:bg-gray-50 transition-colors tracking-wide uppercase shadow-xs">
          Load More Posts
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Fallback for the masonry if needed, but Tailwind columns work perfectly */
</style>
