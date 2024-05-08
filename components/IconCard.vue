<script setup>

defineProps<{
    icon: string,
    text: string,
    iconCcolor: string,
}>()

</script>

<template>
    <div>

        <div>
            <Icon name="{{ $icon }}" color="iconColor" />
        </div>

        <div>
            <span class="text-2xl font-semibold">{{ $text }}</span>
        </div>

    </div>


</template>