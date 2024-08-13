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
    textPosition: 'left' | 'right'
}>()

</script>

<template>

    <div class="flex items-center justify-center md:gap-8 relative mb-8"
        :class="textPosition === 'left' ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'">
        <p class="w-full md:w-2/4">
            <slot />
        </p>
        <NuxtImg :src="image.src"
            class="object-cover rounded-imgProject w-full md:w-2/4 min-w-[100px]"
            :class="image.bgpos"
            :quality="image.quality"
            fit="cover" />
    </div>
</template>