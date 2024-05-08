<script setup lang="ts">


const { data } = await useAsyncData('projects', () => queryContent('/projects').findOne())


</script>


<template>
    <div class="flex flex-row gap-4 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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