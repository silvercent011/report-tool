<template>
    <ul class="nav nav-pills bg-light p-2">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Alunos Ativos</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Alunos Desativados</a>
        </li>
    </ul>
    <StudentsList :students="activeStudents" />
</template>

<script lang="ts">
import StudentsList from '@/components/StudentsList.vue';
import { useStudentsStore } from '@/stores/students'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    async setup() {
        const studentsStore = useStudentsStore();
        await studentsStore.getAllStudents();
        const students = computed(() => {
            return studentsStore.students;
        });
        const activeStudents = computed(() => {
            return students.value.filter((student) => {
                if (student.enabled === true) {
                    return student;
                }
            });
        });
        const nonActiveStudents = computed(() => {
            return students.value.filter((student) => {
                if (student.enabled === false) {
                    return student;
                }
            });
        });

        return { activeStudents };
    },
    components: { StudentsList }
})
</script>
