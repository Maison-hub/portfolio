<script setup>

// onMounted(() => {
//     useGsap.from('#mail', {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         delay: 0.5,
//         scrollTrigger: {
//             trigger: '#mail',
//             start: 'top bottom',
//             end: 'bottom 80%',
//             scrub: 1,
//             markers: true
//         }
//     })
// })

</script>

<template>
    <div class="p-14">
        <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex flex-col items-center justify-center">
            <span class="text-white title">Une Questions ?</span>
            <span class="text-white sub-title">Contactez moi</span>

        </div>


    <div class="flex w-full justify-start">
        <span class="sub-title uppercase text-surface" id="mail">
            HELLO@antoinerubeo.ME
        </span>
    </div>
    <div class="flex w-full justify-end">
        <span class="sub-title capitalize text-surface">
            06 02 15 75 22    
        </span>
    </div>

    <div>
        <Icon name="mdi:linkedin" fill="none" class="text-4xl text-surface title"/>
        <Icon name="mdi:github" fill="none" class="text-4xl text-surface title"/>
    </div>

    <p class="text-center text-xs">Website made with ❤️ by maison-hub</p>

    </div>

</template>

