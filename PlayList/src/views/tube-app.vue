<template>
    <section class="tube-app">
        <tube-search @search="getSongs"/>
        <section class="results flex">
            <tube-list :results="results" @selectSong="selectSong"/>
            <tube-display :currSong="currSong" />
        </section>
    </section>
</template>

<script>
import { tubeService } from "../services/wiki.service.js"

import tubeDisplay from "../components/tube-display.vue"
import tubeList from "../components/tube-list.vue"
import tubeSearch from "../components/tube-search.vue"
export default {
    created() {
        this.getSongs(this.searchKey)
    },
    data() {
        return {
            searchKey: "Fabrizio de Andre",
            results: null,
            currSong: null,
        }
    },
    methods: {
        async getSongs(value) {
            this.searchKey = value 
            this.results = await tubeService.getYouTubeData(this.searchKey)
            console.log(`this.results = `, this.results)
        },
        selectSong(result){
            this.currSong=result
        },
    },
    components: {
        tubeDisplay,
        tubeList,
        tubeSearch,
    },
}
</script>
