<template>
    <section class="search-bar">
        <section class="logo-container">
            <h1>Wiki<span>Tube</span></h1>
        </section>
        <form @submit.prevent="search" class="main-search-input">
            <input
                v-model="searchKey"
                class="search-bar-input"
                type="search"
                placeholder="Type your search here..."
                autocomplete="off"
            />
            <button
                type="submit"
                class="search-bar-input btn input"
            >Search</button>
                <!-- :style="{'background-image': 'url("../assets/imgs/search.png")'}" -->
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            searchKey: ''
        }
    },
    methods: {
        search(){
            this.$emit('search',this.searchKey)
        }
    },
};
</script>
