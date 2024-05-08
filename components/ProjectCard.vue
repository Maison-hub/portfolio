<script setup>

</script>

<template>
    <div class="w-80 border border-surface2 shadow-md rounded-projectCard">
        <a href="#">
            <div class="p-projectCard">
                <img src="/img/projects/projet3.png"
                    alt="project" class="h-80 w-80 object-cover rounded-imgProject" />
            </div>
            
            <div class="px-4 py-3 w-72 space-y-2">
                <span class="text-gray-400 mr-3 uppercase text-xs">2024</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Super projet</p>

                <div class="flex flex-col gap-4">
                    <p class="text-gray-300 cursor-auto text-xs">
                        description rapide du projet pour explique en quoi il consiste. de manière brève evidement là c’est un peu long exprès
                    </p>
                    <div class="flex flex-row flex-wrap w-full gap-2 justify-end items-center">

                        <Tag>Dev</Tag>
                        <Tag>Ui design</Tag>
                        <Tag>Photo</Tag>
                        <Tag>Projet</Tag>
                        <Tag>Ux design</Tag>
                        <Tag>Equipe</Tag>
                        <Tag>Budget</Tag>

                    </div>
                </div>
            </div>
        </a>
    </div>
</template>