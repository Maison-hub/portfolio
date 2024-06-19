<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu'

defineProps<{
    text: string,
    delay: number
}>()

const store = useMenuStore()

const isOpen = computed(() => store.isOpen)

</script>

<template>
    <Transition name="slide-fade">
        <div class="group" :class="{'open': isOpen}" :style="{ 'animation-delay': (delay/10) + 's' }">
            <a href="#" class="text-6xl	font-bold text-gray-600 flex flex-row items-start gap-2 group-hover:text-aqua transition-all">
                <div>
                    {{ text }}
                </div>
                <Icon name="material-symbols:arrow-insert" size="48" class="rotate-90 transition-transform group-hover:translate-y-2 group-hover:-translate-x-2" />
            </a>
        </div>
    </Transition>
</template>



<style scoped>
/* slide in keyframe annimation */
@keyframes slide-in {
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
.group{
    transform: translateX(20%);
    opacity: 0;
}
.open {
    animation: slide-in 0.5s cubic-bezier(.27,.27,.35,1.21) forwards;
}


</style>