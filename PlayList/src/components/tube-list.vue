<template>
  <section class="videos-preview">
    <ul>
      <li v-for="result in results">
        <tubePreview :result="result" @selectSong="selectSong" />
      </li>
    </ul>
  </section>
</template>

<script>
  import tubePreview from '../components/tube-preview.vue'

  export default {
    name: 'tube-list',
    emits: ['selectSong'],
    props: {
      results: Array,
    },
    data() {
      return {
        chosenVideo: null,
      }
    },
    methods: {
      selectSong(result) {
        this.$emit('selectSong', result)
      },
    },
    computed: {},
    components: {
      tubePreview,
    },
  }
</script>
