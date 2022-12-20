<template>
    <section v-if="currSong" class="video-wrapper flex">
    <article class="iframe-container">
        <iframe
            class="video-frame"
            width="705"
            height="400"
            :src="`https://www.youtube.com/embed/${currSong.videoId}?`+calcAutoPlay()"
        >
        </iframe>
    </article>
    <h3>Currently playing:  &nbsp {{ currSong.title }}</h3>
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
        autoPlay: this.calcAutoPlay
    }
},
    methods: {
        calcAutoPlay(){
            console.log(this.isAutoPlay)
            return (!this.isAutoPlay) ? 'autoplay=0&mute=1' : 'autoplay=1&mute=0'

        }
    }
    
};
</script>
