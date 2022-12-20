<template>
    <section class="tube-app">
        <tube-search />
        <section class="results flex">
            <tube-list />
            <tube-display />
        </section>
    </section>
</template>

<script>
import tubeDisplay from "../components/tube-display.vue";
import tubeList from "../components/tube-list.vue";
import tubeSearch from "../components/tube-search.vue";
export default {
    components: {
        tubeDisplay,
        tubeList,
        tubeSearch,
    },
};
</script>
