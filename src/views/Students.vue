<template>
  <Tabs>
    <Tab title="Alunos Ativos" :index="0">
      <StudentsList :students="activeStudents" />
    </Tab>
    <Tab title="Alunos Desativados" :index="1">
      <StudentsList :students="nonActiveStudents" />
    </Tab>
  </Tabs>
</template>

<script lang="ts">
import StudentsList from "@/components/StudentsList.vue";
import { useStudentsStore } from "@/stores/students";
import { computed, defineComponent } from "vue";
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";

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

    return { activeStudents, nonActiveStudents };
  },
  components: { StudentsList, Tabs, Tab },
});
</script>
