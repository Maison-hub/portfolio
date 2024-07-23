<script lang="ts" setup>
import { useSmoothScroll } from '~/composable/useSmoothScroll';


    onMounted(() => {
        useSmoothScroll();
    });


</script>


<template>
    <div>
        <BurgerMenu />
        <slot />
    </div>
</template>