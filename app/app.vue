<template>
  <div class="bg-bg-base min-h-screen text-text-body font-sans">
    <NuxtRouteAnnouncer />
    
    <Header />
    <main>
      <NuxtPage />
    </main>

    <Footer />

  </div>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
  background-color: #111;
}

body {
  margin: 0;
  padding: 0;
}
</style>
