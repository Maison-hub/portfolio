<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { path: '/projects', limit: 5, sort: [{ date: -1 }] }

const projectGallery = ref<HTMLElement | null>(null)
let projectsWidth = 0

onMounted(() => {
    projectsWidth = projectGallery.value ? projectGallery.value.offsetWidth : 0
    const ammountToScroll = Math.abs(projectsWidth - window.innerWidth);

    console.log('windows width', window.innerWidth);
    console.log('projectsWidth', projectsWidth);
    console.log('amount to scroll', ammountToScroll);

    useGsap.to('#projectsContainer', {
        scrollTrigger: {
            trigger: '#projectsContainer',
            start: 'top top',
            end: '+=' + ammountToScroll,
            scrub: 1,
            pin: true,
            markers: false
        },
        x: -ammountToScroll,
        duration: 5,
    })
})


</script>



<template>
    <div class="flex flex-col pl-12 h-screen w-fit p-4 "
        id="projectsContainer"
        ref="projectGallery">
        <h2 class="text-2xl font-bold mb-8">Mes derniers projets</h2>

        <div class="flex flex-row gap-4"
            id="fetchProject">
            <ContentList :query="query"
                v-slot="{ list }">
                <NuxtLink v-for="project in list"
                    :key="project._path"
                    id="realProject"
                    :to="project._path">
                    <ProjectCard :date="project.year"
                        :title="project.title ?? ''"
                        :description="project.description"
                        :tags="project.categories"
                        :img="project.cover" />
                </NuxtLink>
            </ContentList>
            <div>
                <NuxtLink to="/projects">
                    <div
                        class="flex flex-col items-center gap-4 bg-surface2 p-20 h-full rounded-projectCard justify-center text-white">
                        <!-- WIP Diplay local item withnuxt-icon See: https://nuxt.com/modules/icon#custom-local-collections -->
                        <svg width="42"
                            height="42"
                            viewBox="0 0 323 323"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M147.096 0C146.52 0 146.053 0.467197 146.053 1.04349V118.152C146.053 118.617 145.491 118.85 145.162 118.521L61.0829 34.442C60.6754 34.0345 60.0147 34.0345 59.6072 34.442L37.2503 56.7989C36.8428 57.2064 36.8428 57.8671 37.2503 58.2746L121.328 142.353C121.657 142.681 121.424 143.243 120.959 143.243H1.04348C0.467182 143.243 0 143.71 0 144.287V175.904C0 176.48 0.467197 176.948 1.04349 176.948H120.407C120.871 176.948 121.104 177.51 120.776 177.838L37.2516 261.362C36.8441 261.77 36.8441 262.43 37.2516 262.838L59.6085 285.195C60.016 285.602 60.6767 285.602 61.0842 285.195L145.162 201.117C145.491 200.788 146.053 201.021 146.053 201.486V321.957C146.053 322.533 146.52 323 147.096 323H178.714C179.29 323 179.757 322.533 179.757 321.957V202.041C179.757 201.576 180.319 201.343 180.648 201.672L264.17 285.194C264.578 285.602 265.238 285.602 265.646 285.194L288.003 262.837C288.41 262.43 288.41 261.769 288.003 261.362L204.479 177.838C204.151 177.51 204.383 176.948 204.848 176.948H321.957C322.533 176.948 323 176.48 323 175.904V144.287C323 143.71 322.533 143.243 321.957 143.243H204.295C203.83 143.243 203.598 142.681 203.926 142.353L288.004 58.275C288.411 57.8675 288.411 57.2068 288.004 56.7993L265.647 34.4424C265.24 34.0349 264.579 34.0349 264.171 34.4424L180.648 117.966C180.319 118.295 179.757 118.062 179.757 117.597V1.04348C179.757 0.467181 179.29 0 178.714 0H147.096Z"
                                fill="currentColor" />
                        </svg>
                        <span class="whitespace-nowrap">Voir tous les projets</span>
                    </div>
                </NuxtLink>
            </div>
        </div>

    </div>

</template>