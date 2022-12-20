<template>
    <section class="tube-preview" v-if="result">
        <div>
            <img :src="result.image.url">
        </div>
        <div class="text-song-area">
            <h2>{{ result.title }}</h2>
            <p>{{ result.description }}</p>
        </div>
        <div class="play-video-btn">
            <button @click="selectSong">Play</button>
        </div>

    </section>

</template>

<script>
export default {
    name: 'tube-preview',
    emits: ['selectSong'],
    props: {
        result: Object,
    },
    methods: {
        selectSong() {
            this.$emit('selectSong', this.result)
        },
    },

}

</script>