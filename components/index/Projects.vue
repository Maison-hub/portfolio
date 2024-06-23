<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/projects', limit: 5, sort: [{ date: -1 }] }

const projectGallery = ref<HTMLElement | null>(null)
let projectsWidth = 0

onMounted(() => {
    projectsWidth = projectGallery.value ? projectGallery.value.offsetWidth : 0
    const ammountToScroll = Math.abs(projectsWidth - window.innerWidth);

    console.log('windows width',window.innerWidth);
    console.log('projectsWidth',projectsWidth);
    console.log('amount to scroll',ammountToScroll);
    
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
        duration: 3,
        value: 220,
    })
})


</script>



<template>
    <div class="flex flex-col pl-12 h-screen w-fit p-4 " id="projectsContainer" ref="projectGallery">
        <h2 class="text-2xl font-bold mb-8">Mes derniers projets</h2>

        <div class="flex flex-row gap-4" id="fetchProject">
            <ContentList :query="query" v-slot="{ list }">
                    <NuxtLink v-for="project in list" :key="project._path" id="realProject" :to="project._path">
                        <ProjectCard :date="project.date" :title="project.title ?? ''" :description="project.description" :tags="project.tags" :img="project.img" />
                    </NuxtLink>                    
            </ContentList>
            <div>
                <NuxtLink to="/projects">
                    <div class="flex flex-col items-center gap-4">
                        
                        <span class="text-surface">Voir tous mes projets</span>
                    </div>
                </NuxtLink>
            </div>
        </div>

    </div>

</template>