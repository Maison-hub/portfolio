<template>

    <div class="flex w-full justify-between">

        <div class="flex flex-col">
            <div class="flex flex-row items-start">
                <NuxtLink to="/">
                    <div class="px-6 py-2 bg-background rounded-br-2xl text-xl font-semibold">
                        Home
                    </div>
                </NuxtLink>
                <div class="inverted r"></div>
            </div>
            <div class="inverted r"></div>
        </div>

        <div class="flex flex-col items-end">
            <div class="flex flex-row items-start">
                <div class="inverted l"></div>
                <NuxtLink to="/">
                    <div class="px-6 py-2 bg-background rounded-bl-2xl text-xl font-semibold">Menu</div>
                </NuxtLink>
                
            </div>
            <div class="inverted l"></div>
        </div>

    </div>

</template>

<style scoped>

.inverted{
    --size: 1rem;
    height: var(--size);
    width: var(--size);
    background: transparent;;   
}

.inverted.r{
    background-image: radial-gradient(circle at 100% 100% , transparent var(--size), rgb(0 5 15 / var(--tw-bg-opacity)) var(--size))
}

.inverted.l{
    background-image: radial-gradient(circle at 0% 100% , transparent var(--size), rgb(0 5 15 / var(--tw-bg-opacity)) var(--size))
}


</style>