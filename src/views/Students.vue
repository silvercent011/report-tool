<template>
    <div class="container d-flex flex-row justify-content-center min-vh-100">
        <div class="w-100">
            <div class="card" v-for="(std,index) in students" :key="index">
                <div class="card-body">
                    <p class="card-text">{{std}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useStudentsStore } from '@/stores/students'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const studentsStore = useStudentsStore()
        studentsStore.getAllStudents()
        const students = computed(() => {
            return Promise.all(studentsStore.students.filter((student) => {
                if (student.enabled === true){
                    return student
                }
            }))
        })
        return { students }
    },
})
</script>
