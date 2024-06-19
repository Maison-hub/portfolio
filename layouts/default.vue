<script lang="ts" setup>
import { useSmoothScroll } from '~/composable/useSmoothScroll';


    onMounted(() => {
        useSmoothScroll();
    });


</script>


<template>
    <div>
        <slot />
    </div>
</template>