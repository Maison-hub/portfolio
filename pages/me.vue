<script setup lang="ts">

onMounted(() => {
    useGsap.to("#me1", {
        scrollTrigger: {
            trigger: "#imgrow1", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(-1%) translateY(0%) rotate(0deg)", // L'état final de l'animation
        duration: 1,
    })

    useGsap.to("#me2", {
        scrollTrigger: {
            trigger: "#imgrow1", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(-1%) translateY(0%) rotate(0deg)", // L'état final de l'animation
        duration: 1,
    })

    useGsap.to("#me3", {
        scrollTrigger: {
            trigger: "#imgrow2", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(-1%) translateY(0%) rotate(0deg)", // L'état final de l'animation
        duration: 1,
    })

    useGsap.to("#me4", {
        scrollTrigger: {
            trigger: "#imgrow2", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(1%) translateY(0%) rotate(0deg)", // L'état final de l'animation
        duration: 1,
    })
});

</script>

<template>
    <header>
        <div class="p-14">
            <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex items-center justify-center relative">
                <HeaderNav class="absolute top-0 left-0" />
                <h1 class="text-white title uppercase"> à propos de moi</h1>
            </div>
        </div>
    </header>
    <div class="min-h-screen p-14">

        <div class="flex flex-row w-full justify-center gap-4 py-8"
            id="imgrow1">
            <NuxtImg src="/img/me/me1.jpg"
                class="object-cover rounded-imgProject w-[40%] h-[20%]"
                fit="cover"
                id="me1"
                style="transform: translateX(-50%) translateY(15%) rotate(-8deg)" />

            <NuxtImg src="/img/me/me2.jpg"
                class="object-cover rounded-imgProject w-[30%] h-[30%]"
                fit="cover"
                id="me2"
                style="transform: translateX(50%) translateY(15%) rotate(8deg);" />
        </div>

        <section class="flex flex-row items-center justify-center w-full bg-red-500 px-4 py-[10vh]">
            <div class="md:text-xl sm:text-l text-base font-semibold lg:w-10/12 w-9/12 relative z-10 text-justify ">
                étudiant en BUT MMI, passionné par les nouvelles technologies depuis mon plus jeune âge. Mon
                parcours a débuté avec Scratch en classe de 3ème, suivi d'un stage d'une semaine chez TCM, une
                agence web parisienne. Au lycée, la spécialité NSI m'a introduit au langage Python, tandis que j'ai
                développé des compétences en photographie, montage vidéo et création de sites web en parallèle. Le
                BUT MMI s'est imposé comme une opportunité idéale, combinant création numérique, communication et
                développement web. Au semestre 4, j'ai choisi de me spécialiser dans le développement web, explorant
                le back-end, le front-end et le développement d'applications mobiles. Mes compétences incluent HTML,
                CSS, JavaScript, PHP, Python, SQL, WordPress, Figma, Illustrator, SEO, After Effects et la
                photographie. La programmation m'a conduit à m'intéresser à l'UX et l'UI design, cherchant à allier
                esthétique, efficacité et rapidité dans mes projets web. J'explore également des frameworks tels
                qu'Express, Django et Vue.js, car pour moi, l'informatique est une passion qui m'incite à apprendre
                continuellement.
            </div>


        </section>

        <div class="flex flex-row w-full justify-center gap-4 py-8"
            id="imgrow2">
            <NuxtImg src="/img/me/me3.jpg"
                class="object-cover rounded-imgProject w-[25%] h-[35%]"
                fit="cover"
                id="me3"
                style="transform: translateX(-50%) translateY(15%) rotate(-8deg)" />

            <NuxtImg src="/img/me/me4.jpg"
                class="object-cover rounded-imgProject w-[35%] h-[15%]"
                fit="cover"
                id="me4"
                style="transform: translateX(50%) translateY(15%) rotate(8deg);" />

        </div>

        <Footer />

    </div>
</template>

<style scoped></style>