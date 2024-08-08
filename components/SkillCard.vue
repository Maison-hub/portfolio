<script lang="ts" setup>

defineProps<{
    icon: string,
    text: string,
    iconColor: string,
}>()

</script>

<template>
    <div class="inline-flex flex-row gap-4 items-center bg-surface rounded-xl">

        <div>
            <Icon :name="icon" color="#DBE8FE15" fill="none" class="text-6xl text-aqua"/>
        </div>

        <!-- <div>
            <span class="text-md">{{ text }}</span>
        </div> -->

    </div>


</template>