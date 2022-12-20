<template>
    <section class="search-bar">
        <form @submit.prevent="search" class="main-search-input flex">
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
            ></button>
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
