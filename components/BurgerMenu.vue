<script setup lang="ts">

import { useMenuStore } from '@/stores/menu'
import { computed } from 'vue'

const store = useMenuStore()

const isOpen = computed(() => store.isOpen)

function handleClickOutside() {
    console.log('click outside')
    if (store.isOpen) {
        console.log('close menu')
        store.closeMenu()
    }
    else {
        return
    }
}


</script>

<template>
    <Transition name="slide-fade">
        <div v-if="isOpen"
            class="fixed h-screen z-[999] bg-background right-0 top-0 w-[40vw] min-w-80">
            <nav class="burger-menu">
                <div class="w-full flex flex-row justify-end p-4">
                    <button @click="store.closeMenu"
                        class="p-4">
                        <Icon name="tabler:x"
                            size="44"
                            class="text-gray-600 hover:text-aqua transition-colors" />
                    </button>
                </div>
                <div class="flex flex-col gap-6 px-[6vw] py-4">
                    <MenuBurgerMenuLink text="Home"
                        :delay="1"
                        route="/" />
                    <MenuBurgerMenuLink text="Moi"
                        :delay="2"
                        route="/me" />
                    <MenuBurgerMenuLink text="Projets"
                        :delay="3"
                        route="/projects" />
                </div>
            </nav>
        </div>
    </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.2s cubic-bezier(.18, .58, 1, 1.14);
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(.18, .58, 1, 1.14);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(50%);
    opacity: 0;
}
</style>