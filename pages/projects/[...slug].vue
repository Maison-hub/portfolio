<script setup>

import '~/assets/css/project.css'

</script>

<template>
    
    <ContentDoc v-slot="{ doc }">
      <header>
        <div class="p-14">
          <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex items-center justify-center relative">
            <HeaderNav class="absolute top-0 left-0" />
            <h1 class="text-white title">{{ doc.title }}</h1>
          </div>
        </div>
      </header>

      <div class="flex flex-col gap-8 px-14 pb-14 items-center ">
        <div class="w-2/4 flex flex-col justify-center">
            <span class="sub-title text-center">{{ doc.date }}</span>
          <p class="text-center">
            {{ doc.description }}
          </p>
        </div>
        <div class="w-2/4">
          <img :src="doc.cover"
                    alt="project" class="h-full w-full object-cover rounded-imgProject" />
        </div>

        <div class="separator"></div>
      </div>

      <main class="px-14">
        <ContentRenderer :value="doc" />
      </main>
    </ContentDoc>
  
  <Footer />
</template>


