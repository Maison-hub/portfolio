<script setup lang="ts">


onMounted(() => {
    const rows = useGsap.utils.toArray<HTMLElement>(".row");

    rows.forEach(row => {
        useGsap.to(row.querySelector('.card'), {
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1,
                markers: false,
            },
            opacity: 1,
            transform: "translateX(0px) rotate(0deg)",
            duration: 1,
        });
    });

    // useGsap.to(".line", {
    //     scrollTrigger: {
    //         trigger: "#education",
    //         start: "top 80%",
    //         end: "bottom 80%",
    //         scrub: 0,
    //         markers: true,
    //     },
    //     height: "75%",
    //     duration: 1,
    // });

});

</script>

<template>
    <section class="w-full">
        <div class="w-full flex justify-center items-center gap-4">
            <Icon name="tabler:school" fill="none" class="text-6xl"/>
            <h2 class="font-bold text-4xl">Education</h2>

        </div>

        <div class="w-full my-14 relative" id="education">
            <div class="line"></div>
            <MeRow title="BUT MMI"
                date="2022 - Aujourd'hui"
                position="left"
                duration="Métiers du multimedia et de l’internet"
                description="IUT Nancy-Charlemagne" />

            <MeRow title="BAC Géneral "
                date="2019 - 2022"
                position="right"
                duration="Spécialité Mathématiques et Informatique"
                description="Mention très bien au lycée Hélène Boucher - Thionville" />
        </div>

    </section>
</template>

<style scoped>
.line {
    @apply bg-white;
    top: 0;
    height: 0%;
    width: 1px;
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
}
</style>
