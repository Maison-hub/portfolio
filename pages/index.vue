<template>
    <div class="relative overflow-x-hidden">
        <section class="p-14 h-[85vh]">

            <div
                class="p-14 bg-mainBg bg-cover w-full h-full rounded-huge flex flex-col justify-center items-start gap-8 relative">
                <HeaderNav class="absolute top-0 left-0" />
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
        <IndexHScroll
            :comp="['Développement Front', 'UX Design', 'SEO', 'Illustration', 'UI Design', 'Développement Back', 'Gestion de projet', 'Photographie']" />
        <section class="flex flex-row items-center justify-center w-full bg-red-500 px-4 py-[10vh]">
            <div class="md:text-5xl sm:text-3xl text-xl font-semibold lg:w-10/12 w-9/12 relative z-10 after:content-[''] after:absolute after:bg-star after:top-0 after:left-0 after:w-[8vw] after:h-[8vw] after:bg-cover after:bg-no-repeat after:z-[-1] text-justify"
                id="starAfter"
                :style="{ '--animate': animateValue }">
                Enthousiaste du web et animé par un esprit créatif, je suis curieux et désireux de relever de nouveaux
                challenges. Je suis étudiant en BUT MMI et spécialisé dans le développement web. Déterminé à créer de
                meilleures expériences en ligne en alliant ma créativité et mes compétences techniques, j’ai pour
                objectif de devenir développeur web.
            </div>

            <svg width="1597"
                height="1597"
                viewBox="0 0 1597 1597"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-0 translate-x-[50%] pointer-events-none z-0">
                <circle cx="798.5"
                    cy="798.5"
                    r="798.5"
                    fill="url(#paint0_radial_679_70)"
                    fill-opacity="0.49" />
                <defs>
                    <radialGradient id="paint0_radial_679_70"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(797.988 799.012) rotate(90) scale(673.175)">
                        <stop stop-color="#2E79FA" />
                        <stop offset="0.393874"
                            stop-color="#4977C5"
                            stop-opacity="0.606126" />
                        <stop offset="1"
                            stop-color="#737373"
                            stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>

        </section>

        <section id="projects">

            <IndexProjects />

        </section>

        <IndexIamSection />

        <section class="comp mb-16">
            <h2 class="text-2xl font-bold mb-8 text-center">
                Mes compétences
            </h2>
            <div class="flex flex-col items-center gap-6 mb-8">
                <div class="font-semibold text-lg">
                    Full-stack
                </div>
                <div class="flex flex-row gap-4 w-[50%] flex-wrap justify-center">
                    <SkillCard icon="skill-icons:nuxtjs-dark"
                        :iconColor="iconColor"
                        text="Nuxt" />
                    <SkillCard icon="devicon:livewire"
                        :iconColor="iconColor"
                        text="Livewire" />

                </div>
            </div>
            <div class="flex flex-col items-center gap-6 mb-8">
                <div class="font-semibold text-lg">
                    Front-end
                </div>
                <div class="flex flex-row gap-4 w-[50%] flex-wrap justify-center">
                    <SkillCard icon="skill-icons:tailwindcss-dark"
                        :iconColor="iconColor"
                        text="Tailwind" />
                    <SkillCard icon="skill-icons:alpinejs-dark"
                        :iconColor="iconColor"
                        text="Alpine" />
                    <SkillCard icon="skill-icons:htmx-dark"
                        :iconColor="iconColor"
                        text="Htmx" />
                    <SkillCard icon="skill-icons:flutter-dark"
                        :iconColor="iconColor"
                        text="Flutter" />
                    <SkillCard icon="skill-icons:threejs-dark"
                        :iconColor="iconColor"
                        text="Three js" />
                </div>
            </div>
            <div class="flex flex-col items-center gap-6 mb-8">
                <div class="font-semibold text-lg">
                    Back-end
                </div>
                <div class="flex flex-row gap-4 w-[50%] flex-wrap justify-center">
                    <SkillCard icon="skill-icons:nodejs-dark"
                        :iconColor="iconColor"
                        text="Node" />
                    <SkillCard icon="skill-icons:expressjs-dark"
                        :iconColor="iconColor"
                        text="Express" />
                    <SkillCard icon="skill-icons:php-dark"
                        :iconColor="iconColor"
                        text="PHP" />
                    <SkillCard icon="skill-icons:python-dark"
                        :iconColor="iconColor"
                        text="Python" />
                    <SkillCard icon="skill-icons:mysql-dark"
                        :iconColor="iconColor"
                        text="MySQL" />
                </div>
            </div>
            <div class="flex flex-col items-center gap-6 mb-8 ">
                <div class="font-semibold text-lg">
                    Design
                </div>
                <div class="flex flex-row gap-4 w-[50%] flex-wrap justify-center">
                    <SkillCard icon="skill-icons:figma-dark"
                        :iconColor="iconColor"
                        text="Figma" />
                    <SkillCard icon="skill-icons:aftereffects"
                        :iconColor="iconColor"
                        text="Adobe XD" />
                    <SkillCard icon="skill-icons:photoshop"
                        :iconColor="iconColor"
                        text="Photoshop" />
                    <SkillCard icon="skill-icons:illustrator"
                        :iconColor="iconColor"
                        text="Illustrator" />
                </div>
            </div>
        </section>

        <section id="more"
            class="mb-16">
            <h2 class="text-2xl font-bold mb-8 text-center">Mon parcour</h2>
            <div>
                <p class="px-[12vw] py-4 md:py-8 lg:py-12">
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
                    continuellement.</p>
            </div>
        </section>


        <Footer />


    </div>
</template>

<script lang="ts" setup>
import SplitType from 'split-type'

//set icon default color
const iconColor = '#2194FF';

const animateValue = ref(0)


//rotate cross on scroll
onMounted(() => {
    const text = SplitType.create('#starAfter')

    let tl = useGsap.timeline({
        scrollTrigger: {
            trigger: '#starAfter',
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: true,
            markers: false,
        },
    });
    tl.from(text.words, { opacity: 0.2, stagger: 0.1 })

    useGsap.to(animateValue, {
        scrollTrigger: {
            trigger: '#starAfter',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            markers: false
        },
        duration: 1,
    })
})


</script>

<style>
#starAfter::after {
    transform: translate(-55%, -55%) rotate(calc(var(--animate) * 1deg));
}
</style>