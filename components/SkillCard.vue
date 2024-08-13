<script lang="ts" setup>

defineProps<{
    icon: string,
    text: string,
    iconColor: string,
}>()

</script>

<template>
    <div class="inline-flex flex-row gap-4 items-center bg-surface rounded-xl">

        <div class="relative skillIcon">
            <Icon :name="icon" color="#DBE8FE15" fill="none" class="skillIcon text-6xl text-aqua"/>
            <span class="absolute px-3 py-1 rounded-lg bg-gray-950  text-sm left-1/2 -translate-x-1/2 top-full translate-y-3/4 whitespace-nowrap helptext">{{ text }}</span>
        </div>

        <!-- <div>
            <span class="text-md">{{ text }}</span>
        </div> -->

    </div>

</template>

<style scoped>

.helptext{
    opacity: 0;
    transition: all 0.3s ease;
}

.skillIcon:hover .helptext {
    opacity: 1;
    transform: translateY(10%) translateX(-50%);
}

</style>