import { defineStore } from 'pinia';

export const useMenuStore = defineStore('openMenu', ()=>{
    const isOpen = ref(false);
    function openMenu(){
        isOpen.value = !isOpen.value;
    }
    function closeMenu(){
        isOpen.value = false;
    }
    return {isOpen, openMenu, closeMenu}
});
