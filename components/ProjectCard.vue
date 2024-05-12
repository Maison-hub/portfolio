<script setup lang="ts">

defineProps<{
    date : string,
    title : string,
    description : string,
    tags : Array<string>,
    img : string | undefined
}>()
</script>

<template>
    <div class="border border-surface2 shadow-md rounded-projectCard h-full">
        <a href="#">
            <div class="p-projectCard w-[32vw] h-[32vw]">
                <img :src="img"
                    alt="project" class="h-full w-full object-cover rounded-imgProject" />
            </div>
            
            <div class="px-4 py-3 space-y-2 w-full">
                <span class="text-gray-400 mr-3 uppercase text-xs">{{ date }}</span>
                <p class="text-lg font-bold text-white truncate block capitalize">{{ title }}</p>

                <div class="flex flex-col gap-4">
                    <p class="text-gray-300 cursor-auto text-xs">
                        {{ description }}
                    </p>
                    <div class="flex flex-row flex-wrap w-full gap-2 justify-end items-center">
                        <!-- loop on tags -->
                        <Tag v-for="(tag, index) in tags" :key="index">
                            {{ tag }}
                        </Tag>

                    </div>
                </div>
            </div>
        </a>
    </div>
</template>