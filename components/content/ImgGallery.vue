<script setup lang="ts">

defineProps<{
    images: {
        src: string,
        bgpos: {
            type: [string, null],
            default: 'center'
        }
        fit: {
            type: string,
            default: 'cover'
        },
        description: [string, null]
        quality: string | number | undefined,
    }[]
}>()
</script>

<template>
    <div class="flex flex-row gap-12 mb-8 py-4">
        <div v-for="(image, index) in images"
            :key="index"
            class=" grow h-[50vh] bg-center rounded-huge relative flex flex-col items-start gap-2">
            <NuxtImg :src="image.src"
                class="w-full h-full object-cover rounded-imgProject"
                :class="image.bgpos"
                :quality="image.quality"
                fit="cover" />
            <p class="text-gray-500 italic text-sm">{{ image.description }}</p>
        </div>
        <!-- <img v-for="(image, index) in images" :key="index" :src="image" alt="Image galerie" class="rounded-huge object-cover grow"> -->
    </div>
</template>

<style scoped></style>