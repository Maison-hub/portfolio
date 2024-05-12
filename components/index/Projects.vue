<script setup lang="ts">

</script>


<template>
    <div class="flex flex-col pl-12">
        <h2 class="text-2xl font-bold mb-8">Mes derniers projets</h2>

        <div class="flex flex-row gap-4 overflow-x-auto" id="fetchProject">
            <ContentList path="/projects" v-slot="{ list }">
                    <NuxtLink :to="project._path" v-for="project in list" :key="project._path">
                        <ProjectCard :date="project.date" :title="project.title ?? ''" :description="project.description" :tags="project.tags" :img="project.img" />
                    </NuxtLink>
            </ContentList>
        </div>

    </div>

</template>