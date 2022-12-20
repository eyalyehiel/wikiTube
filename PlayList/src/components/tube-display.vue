<template>
    <article v-if="currSong" class="iframe-container">
        <iframe
            class="video-frame"
            width="634"
            height="350"
            :src="`https://www.youtube.com/embed/${currSong.videoId}?autoplay=0&mute=1`"
        >
        </iframe>
    </article>
</template>

<script>
export default {
    props: {
        currSong: Object
    }
};
</script>
