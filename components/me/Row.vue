<script setup lang="ts">

defineProps<{
    title: string | null
    description: string | null
    date: string | null
    duration: string | null
    position: 'left' | 'right'
}>()

</script>

<template>
    <div class="row flex flex-row  w-full relative py-12 "
        :class="$props.position === 'left' ? 'justify-start' : 'justify-end'">
        <div class=" card relative flex flex-col gap-3 bg-surface p-4 rounded-xl w-[40%] opacity-0 -translate-y-1/4"
        :class="$props.position === 'left' ? '-translate-x-12 rotate-12' : 'translate-x-1/3 -rotate-12'">
            <div class="font-bold flex flex-row flex-wrap justify-between w-full">
                <span class="text-xl"
                    v-if="$props.title !== null">
                    {{ $props.title }}
                </span>
                <span class="font-normal text-md "
                    v-if="$props.date !== null">
                    {{ $props.date }}
                </span>
            </div>
            <div class="flex flex-col gap-1">
                <p class="text-sm text-gray-500"
                    v-if="$props.description !== null">
                    {{ $props.description }}
                </p>
                <div class="w-full flex justify-end text-sm">({{ $props.duration }})</div>
            </div>
        </div>
        <div class="dot"></div>
    </div>
</template>

<style scoped>
.dot {
    @apply bg-white;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>