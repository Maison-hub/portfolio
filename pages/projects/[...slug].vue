<script setup>

import '~/assets/css/project.css'


</script>

<template>
    
    <ContentDoc v-slot="{ doc }">
      <header>
        <div class="p-14">
          <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex items-center justify-center relative">
            <HeaderNav class="absolute top-0 left-0" />
            <span class="text-white title">{{ doc.title }}</span>
          </div>
        </div>
      </header>

      <main class="px-14">
        <ContentRenderer :value="doc" />
      </main>
    </ContentDoc>
 
  <Footer />
</template>


