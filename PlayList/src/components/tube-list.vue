<template>
    <section class="tube-list"></section>
    <ul>
        <li v-for="result in results">
            <tubePreview :result="result"/>
        </li>
    </ul>
</template>

<script>
import tubePreview from "../components/tube-preview.vue"

export default {
  name: 'tube-list',
  props:{
    results: Array,
  },
  data() {
    return {
        chosenVideo:null,
     
    }
  },
  methods: {
      setFilter(filterBy) {
          this.$store.dispatch({ type: 'setFilter', filterBy })
          // this.$store.dispatch({ type: 'loadToys' })
        },
        goToEdit() {
            this.$router.push(`/toy/edit`)
        },
        removeToy(toyId) {
            this.$store.dispatch({ type: 'removeToy', _id: toyId })
        },
    },
    computed: {
    },
    components: {
        tubePreview,
    },
}
</script>

