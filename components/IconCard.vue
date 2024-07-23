<script lang="ts" setup>

defineProps<{
    icon: string,
    text: string,
    iconColor: string,
}>()

</script>

<template>
    <div class="flex flex-col items-center border border-surface bg-background rounded-xl w-1/6 py-8">

        <div>
            <Icon :name="icon"
                :color="iconColor"
                class="text-4xl" />
        </div>

        <div>
            <span class="text-2xl font-semibold">{{ text }}</span>
        </div>

    </div>


</template>