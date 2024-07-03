<script setup lang="ts">
const iconColor = '#2194FF';

const container = ref<HTMLElement | null>(null);
const icon  = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!container.value || !icon.value) return;
    console.log(icon.value.getBoundingClientRect());


})
defineExpose({ icon, container })

</script>

<template>

    <section id="iam">

    <h2 class="text-2xl font-bold mb-8 text-center">
        Je suis
    </h2>
            <div class="gap-8 *:absolute" ref="container">
                <IconCard icon="tabler:palette"
                    :iconColor="iconColor"
                    text="Créatif" />
                <IconCard icon="tabler:flame"
                    :iconColor="iconColor"
                    text="Passioné" ref="icon" key="middleIcon"/>
                <IconCard icon="tabler:search"
                    :iconColor="iconColor"
                    text="Méticuleux" />
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
