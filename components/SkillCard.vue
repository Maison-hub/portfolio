<script lang="ts" setup>

defineProps<{
    icon: string,
    text: string,
    iconColor: string,
}>()

</script>

<template>
    <div class="inline-flex flex-row gap-4 items-center border border-surface rounded-xl p-3">

        <div>
            <Icon :name="icon" color="#2EFAFA" fill="none" class="text-4xl text-aqua"/>
        </div>

        <div>
            <span class="text-md">{{ text }}</span>
        </div>

    </div>


</template>