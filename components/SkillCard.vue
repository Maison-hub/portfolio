<script lang="ts" setup>

defineProps<{
    icon: string,
    text: string,
    iconColor: string,
}>()

</script>

<template>
    <div class="flex flex-row gap-2 items-center border border-surface rounded-xl py-2">

        <div>
            <Icon :name="icon" color="#2EFAFA" class="text-2xl text-aqua"/>
        </div>

        <div>
            <span class="text-2xl font-semibold">{{ text }}</span>
        </div>

    </div>


</template>