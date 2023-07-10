<script>
export default {
    name: "Pagination",
    props: {
        currentPage: Number,
        lastPage: Number
    },
    emits: [
        "changePage"
    ]
}

</script>

<template>
    <div>
        <nav class="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
            <ul class="pagination">

                <!-- Previous -->
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a @click.prevent="$emit('changePage', currentPage - 1)" class="page-link"><i
                            class="fa-solid fa-arrow-left"></i></a>
                </li>

                <li class="page-item" :class="{ 'disabled': currentPage === pageNum }" v-for="pageNum in lastPage"
                    :key="pageNum">
                    <a @click.prevent="$emit('changePage', pageNum)" class="page-link">{{ pageNum }}</a>
                </li>

                <!-- Next -->
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                    <a @click.prevent="$emit('changePage', currentPage + 1)" class="page-link"><i
                            class="fa-solid fa-arrow-right"></i></a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.page-link {
    height: 40px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 10px;
    margin: 0 10px;
    color: $green_deli;
}
</style>