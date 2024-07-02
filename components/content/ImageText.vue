<script setup lang="ts">
defineProps<{
    image: {
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
        width: {
            type: string,
            default: 'w-[20vw]'
        }
    }
    text: string,
    textPosition: {
        type: String,
        default: 'left'
    }
}>()
</script>

<template>

    <div class="flex flex-row flex-row-reverse items-center justify-center"
        :class="textPosition === 'left' ? 'flex-row' : 'flex-row-reverse'">
        <p>{{ text }}</p>
        <NuxtImg :src="image.src"
            class="w-full h-full object-cover rounded-imgProject"
            :class="image.bgpos"
            :quality="image.quality"
            fit="cover" />
    </div>
</template>