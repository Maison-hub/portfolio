<script setup lang="ts">


const { data } = await useAsyncData('projects', () => queryContent('/projects').findOne())


</script>


<template>
    <div class="flex flex-col pl-12">
        <h2 class="text-2xl font-bold mb-8">Mes derniers projets</h2>

        <div class="flex flex-row gap-4 overflow-x-auto">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>

    </div>




    <!-- <div>
        heheh
        <ContentList path="/projects" v-slot="{ list }">
        <div v-for="project in list" :key="project._path">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <p>{{ project.date }}</p>
        </div>

        </ContentList>
    </div> -->

</template>