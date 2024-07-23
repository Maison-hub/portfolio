<script setup lang="ts">
const iconColor = '#2194FF';

onMounted(() => {
    useGsap.to("#leftIcon", {
        scrollTrigger: {
            trigger: "#leftIcon", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(-120%) translateY(15%) rotate(-8deg)", // L'état final de l'animation
        duration: 1,
    })

    useGsap.to("#rightIcon", {
        scrollTrigger: {
            trigger: "#rightIcon", // L'élément qui déclenche l'animation
            start: "top 60%", // Quand le haut de "monElement" atteint le milieu de la fenêtre
            end: "bottom 30%", // Quand le bas de "monElement" quitte le haut de la fenêtre
            scrub: 1,
            markers: false,
        },
        transform: "translateX(120%) translateY(15%) rotate(8deg)", // L'état final de l'animation
        duration: 1,
    })
});

</script>

<template>

    <section id="iam">

        <h2 class="text-2xl font-bold mb-8 text-center">
            Je suis
        </h2>
        <div class="flex flex-row w-full items-center justify-center gap-8 p-9">
            <IconCard icon="tabler:search"
                :iconColor="iconColor"
                text="Méticuleux"
                class="absolute"
                ref="leftIcon"
                id="leftIcon"
                style="transform: translateX(-1%) translateY(0%) rotate(-2deg)" />
            <IconCard icon="tabler:flame"
                :iconColor="iconColor"
                text="Passioné"
                class="relative" />
            <IconCard icon="tabler:palette"
                :iconColor="iconColor"
                text="Créatif"
                class="absolute"
                id="rightIcon"
                style="transform: translateX(1%) translateY(0%) rotate(2deg);" />
        </div>

        <div>
            <p class="px-[12vw] py-4 md:py-8 lg:py-12 text-justify">
                Passionné par les nouvelles technologies, je consacre une grande partie de mon temps libre à coder,
                apprendre et créer. J'aime me lancer dans de nouveaux projets web, de l'idée à la réalisation. En
                parallèle, je suis avide d'apprentissage, que ce soit à travers des cours en ligne, des forums ou
                même en sollicitant l'aide de Chat GPT parfois. Les idées de création fusent et je m'en donne à cœur
                joie pour les concrétiser, découvrant ainsi de nouvelles techniques et mettant en pratique mon
                imagination. En dehors de cela, je me détends en regardant des vidéos, que ce soit sur YouTube, des
                films, des séries ou des animés. Ma passion pour les jeux vidéo m'amène souvent à rejoindre des amis
                sur Discord pour des parties animées. Voilà, c'est moi en un mot : passionné.
            </p>
        </div>
    </section>

</template>
