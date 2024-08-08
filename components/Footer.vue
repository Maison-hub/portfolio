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
    <div class="">
        <div class="bg-mainBg bg-cover w-full rounded-t-[55px]  py-16 px-12 flex flex-col items-center justify-between gap-6 ">
            <div class="flex w-full justify-center">
                <a href="mailto:hello@antoinerubeo.me">
                    <span class="text-4xl font-bold uppercase transition-all text-white hover:text-aqua " id="mail">
                        HELLO@antoinerubeo.ME
                    </span>
                </a>
                </div>
                <div class="flex w-full justify-center">
                    <a href="tel:0602157522">
                        <span class="text-4xl font-bold capitalize transition-all  text-white hover:text-aqua ">
                            06 02 15 75 22    
                        </span>
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/antoine-rubeo/" target="_blank">
                        <Icon name="mdi:linkedin" fill="none" class="text-4xl text-white hover:text-aqua title"/>
                    </a>
                    <a href="https://github.com/Maison-hub" target="_blank">
                        <Icon name="mdi:github" fill="none" class="text-4xl text-white hover:text-aqua title"/>
                    </a>
                </div>

            <p class="text-center text-xs">Website made with ❤️ by me</p>
        </div>
    </div>
</template>

