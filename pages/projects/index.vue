<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { path: '/projects', sort: [{ date: -1 }] }


</script>


<template>
    <BurgerMenu />
    <header>
        <div class="p-14">
            <div class="bg-mainBg bg-cover w-full h-full rounded-huge py-24 flex items-center justify-center relative">
                <HeaderNav class="absolute top-0 left-0" />
                <h1 class="text-white title">Projets</h1>
            </div>
        </div>
    </header>


    <div class="flex flex-row justify-center gap-4 flex-wrap p-14"
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
        </div>
</template>