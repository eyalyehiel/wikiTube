<template>
  <section class="tube-app">
    <tube-search @search="getSongs" />
    <section class="list-display-wrapper flex">
      <tube-list @selectSong="selectSong" :results="results" />
      <tube-display :currSong="currSong" :isAutoPlay="isAutoPlay" />
    </section>
  </section>
</template>

<script>
  import { tubeService } from '../services/wiki.service.js'

  import tubeDisplay from '../components/tube-display.vue'
  import tubeList from '../components/tube-list.vue'
  import tubeSearch from '../components/tube-search.vue'
  export default {
    created() {
      this.getSongs(this.searchKey)
    },
    data() {
      return {
        searchKey: 'Fabrizio de Andre',
        results: null,
        currSong: null,
        isAutoPlay: false
      }
    },
    methods: {
      async getSongs(value) {
        this.searchKey = value
        this.results = await tubeService.getYouTubeData(this.searchKey)
        this.currSong = this.results[0]
      },
      selectSong(result) {
        this.currSong = result
        this.isAutoPlay = true
      },
    },
    components: {
      tubeDisplay,
      tubeList,
      tubeSearch,
    },
  }
</script>
