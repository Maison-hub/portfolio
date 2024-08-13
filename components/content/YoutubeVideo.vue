<template>
    <div class="youtube-video h-fit py-8 flex justify-center items-center">
        <iframe :src="embedUrl" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define the props
const props = defineProps({
    link: {
        type: String,
        required: true
    }
});

// Define the computed property
const embedUrl = computed(() => {
    // Extract the video ID from the YouTube link
    const videoId = getVideoId(props.link);
    // Construct the embed URL
    return `https://www.youtube.com/embed/${videoId}`;
});

// Define the method to extract the video ID
function getVideoId(link) {
    // Extract the video ID from the YouTube link
    // You can use a regular expression or any other method to extract the ID
    // For simplicity, let's assume the link is in the format "https://www.youtube.com/watch?v=VIDEO_ID"
    const url = new URL(link);
    return url.searchParams.get("v");
}
</script>

<style scoped>

.youtube-video iframe {
    width: 100%;
    @apply aspect-video
}
</style>