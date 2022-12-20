<template>
    <section class="search-bar">
        <form onsubmit="onSearch(event,'ev')" class="main-search-input flex">
            <input
                name="search"
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
export default {};
</script>
