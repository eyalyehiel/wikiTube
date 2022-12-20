<template>
    <section class="video-wrapper flex">
    <article v-if="currSong" class="iframe-container">
        <iframe
            class="video-frame"
            width="634"
            height="350"
            :src="`https://www.youtube.com/embed/${currSong.videoId}?${autoplay}`"
        >
        </iframe>
    </article>
    <h5 v-if="currSong">Currently playing: {{ currSong.title }}</h5>
</section>
</template>

<script>
export default {
    props: {
        currSong: Object,
        isAutoPlay: Boolean
    },
    data(){
        return{
        autoPlay: this.autoPlay
    }
},
    computed: {
        autoPlay(){
            return (isAutoPlay) ? '?autoplay=0&mute=1' : '?autoplay=1&mute=0'

        }
    }
    
};
</script>
