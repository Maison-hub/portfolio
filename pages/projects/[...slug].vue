<script setup>
import '~/assets/css/project.css';

</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <header>
        <div class="p-14">
          <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex items-center justify-center relative">
            <HeaderNav class="absolute top-0 left-0" />
            <h1 class="text-white title text-center">{{ doc.title }}</h1>
          </div>
        </div>
      </header>

      <div class="flex flex-col gap-8 px-14 pb-14 items-center">
        <div class="max-w-screen-lg">
          <div class="flex flex-col justify-center">
            <span class="sub-title text-center">{{ doc.year }}</span>
            <p class="text-center">
              {{ doc.description }}
            </p>
          </div>
          <div class="w-full aspect-video">
            <img :src="doc.cover"
              alt="project"
              class="h-full w-full object-cover rounded-imgProject" />
          </div>
          <div class="separator"></div>
        </div>
      </div>

      <main class="px-14 pb-14 flex justify-center w-full ">
        <div class="max-w-screen-lg">
          <ContentRenderer :value="doc" />
        </div>
      </main>
    </ContentDoc>

    <!-- TODO: link to next {doc} by date -->

    <Footer />
  </div>
</template>
