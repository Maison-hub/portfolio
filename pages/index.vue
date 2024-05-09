<template>
    <div class="relative overflow-y-hidden overflow-x-clip">
        <section class="p-14 h-[85vh]" >

            <div class="p-14 bg-mainBg bg-cover w-full h-full rounded-huge flex flex-col justify-center items-start gap-8">

                <span class="capitalize text-white text-4xl title">
                    RUBEO-LISA
                </span>

                <span class="text-white flex flex-col sm:flex-row sm:items-center w-full items-start gap-10">
                    <span class="text-4xl sub-title">Antoine</span> 
                    <div class="flex items-center h-full w-3/12">
                        <div class="h-1 bg-white w-full"></div>
                    </div>
                    <span class="title">BUT MMI</span>
                </span>

            </div>
        </section>
        <IndexHScroll :comp="['Développement Front', 'UX Design', 'SEO', 'Illustration', 'UI Design', 'Développement Back', 'Gestion de projet', 'Photographie']" />
        <section class="flex flex-row items-center justify-center w-full bg-red-500 px-4 py-[10vh]" >  
            <div class="md:text-5xl sm:text-3xl text-xl font-semibold lg:w-6/12 w-9/12 relative z-0 after:content-[''] after:absolute after:bg-star after:top-0 after:left-0 after:w-[8vw] after:h-[8vw] after:bg-cover after:bg-no-repeat after:translate-y-[-55%] after:translate-x-[-55%] after:z-[-1]">
                Enthousiaste du web et animé par un esprit créatif, je suis curieux et désireux de relever de nouveaux challenges. Je suis étudiant en BUT MMI et spécialisé dans le développement web. Déterminé à créer de meilleures expériences en ligne en alliant ma créativité et mes compétences techniques, j’ai pour objectif de devenir développeur web.
            </div>

            <svg width="1597" height="1597" viewBox="0 0 1597 1597" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-0 translate-x-[50%]" >
                <circle cx="798.5" cy="798.5" r="798.5" fill="url(#paint0_radial_679_70)" fill-opacity="0.49"/>
                <defs>
                <radialGradient id="paint0_radial_679_70" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(797.988 799.012) rotate(90) scale(673.175)">
                <stop stop-color="#2E79FA"/>
                <stop offset="0.393874" stop-color="#4977C5" stop-opacity="0.606126"/>
                <stop offset="1" stop-color="#737373" stop-opacity="0"/>
                </radialGradient>
                </defs>
            </svg>

        </section>

        <section id="projects" class="mb-16">

            <IndexProjects />

        </section>

        <section id="iam">
            <h2 class="text-2xl font-bold mb-8 text-center">
                Je suis
            </h2>
            <div class="flex flex-row items-center justify-center gap-8">
                <IconCard icon="tabler:palette" :iconColor="iconColor" text="Créatif" />
                <IconCard icon="tabler:flame" :iconColor="iconColor" text="Passioné" />
                <IconCard icon="tabler:search" :iconColor="iconColor" text="Méticuleux" />
            </div>

            <div>
                <p class="px-[12vw] py-4 md:py-8 lg:py-12">
                    Passionné par les nouvelles technologies, je consacre une grande partie de mon temps libre à coder, apprendre et créer. J'aime me lancer dans de nouveaux projets web, de l'idée à la réalisation. En parallèle, je suis avide d'apprentissage, que ce soit à travers des cours en ligne, des forums ou même en sollicitant l'aide de Chat GPT parfois. Les idées de création fusent et je m'en donne à cœur joie pour les concrétiser, découvrant ainsi de nouvelles techniques et mettant en pratique mon imagination. En dehors de cela, je me détends en regardant des vidéos, que ce soit sur YouTube, des films, des séries ou des animés. Ma passion pour les jeux vidéo m'amène souvent à rejoindre des amis sur Discord pour des parties animées. Voilà, c'est moi en un mot : passionné.
                </p>
            </div>

        </section>

        <section class="comp">
            <h2>
                Mes compétences
            </h2>

            <div>
                <SkillCard icon="tabler:palette" :iconColor="iconColor" text="Créatif" />

            </div>
        </section>
        
    </div>
</template>

<script lang="ts" setup>

//set icon default color
const iconColor = '#2194FF';



</script>

<style>
    .title{
        font-weight: 800;
        font-size: clamp(2rem, 7vw, 8rem) !important;
    }
    .sub-title{
        font-weight: 800;
        font-size: clamp(1.5rem, 6vw, 4rem) !important;
    }
</style>