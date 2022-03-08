<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link">Previous</a>
            </li>
            <li class="page-item" :class="{ 'active': page == actualIndex }" v-for="page in Math.ceil(students.length / itemsPerPage)" :key="page">
                <a class="page-link" href="#" @click="changeIndex(page)">{{ page }}</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    <div class="container d-flex flex-row justify-content-center min-vh-100">
        <div class="w-100 row row-cols-1 row-cols-md-2 g-4 mb-4">
            <StudentCard v-for="(std, index) in itemsForPage" :key="index" :student="std" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import StudentCard from '@/components/StudentCard.vue'

export default defineComponent({
    props: ["students"],
    setup(props) {
        const actualIndex = ref(1);
        const itemsPerPage = ref(30);
        const itemsForPage = computed(() => {
            return props.students.slice((actualIndex.value - 1) * itemsPerPage.value, actualIndex.value * itemsPerPage.value);
        });
        const changeIndex = (index: number) => {
            actualIndex.value = index;
        };
        return { actualIndex, itemsPerPage, changeIndex, itemsForPage };
    },
    components: { StudentCard }
})
</script>
