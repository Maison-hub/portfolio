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
        additionalClasses: string | undefined
    }[]
}>()
</script>

<template>
    <div class="flex flex-row justify-center items-center gap-12 mb-8 py-4 h-[50vh] max-h- ">
        <div v-for="(image, index) in images"
            :key="index"
            class=" grow h-full bg-center rounded-huge relative flex flex-col items-center gap-2">
            <NuxtImg :src="image.src"
            :class="[image.bgpos??'object-cover', image.additionalClasses]"
                class="w-full h-full rounded-imgProject"
                :quality="image.quality"
                fit="cover" />
            <p class="text-gray-500 italic text-sm ">{{ image.description }}</p>
        </div>
    </div>
</template>

<style scoped></style>