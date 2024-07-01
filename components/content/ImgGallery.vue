<script setup lang="ts">

defineProps<{
    images: Array<string>
}>()

</script>

<template>
    <div class="flex flex-row gap-12 mb-8">
        <div v-for="(image, index) in images"
            :key="index"
            class=" grow h-[50vh] bg-center rounded-huge relative">
            <NuxtImg :src="image"
                class="w-full h-full object-cover rounded-imgProject"
                quality="70"
                fit="cover" />
        </div>
        <!-- <img v-for="(image, index) in images" :key="index" :src="image" alt="Image galerie" class="rounded-huge object-cover grow"> -->
    </div>
</template>

<style scoped></style>