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

    useGsap.to(".line", {
        scrollTrigger: {
            trigger: "#experiencePro",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
            markers: false,
        },
        height: "75%",
        duration: 1,
    });

});

</script>

<template>
    <section class="w-full">
        <div class="w-full flex justify-center">
            <h2 class="font-bold text-4xl">Expériences professionels</h2>
        </div>

        <div class="w-full my-14 relative" id="experiencePro">
            <div class="line"></div>
            <MeRow title="Stage WorkAdventure"
                date="Avril - Août 2024"
                position="left"
                duration="4mois"
                description="Develloppement full-stack" />

            <MeRow title="Stage Workadventure"
                date="Mars 2023"
                position="right"
                duration="2 semaines"
                description="Conception sur Figma de différents composants du nouveau design système. En garantissant une cohérence esthétique pour renforcer l’identité de l’entreprise." />
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
