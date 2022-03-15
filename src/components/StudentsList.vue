<template>
  <Pagination :items="students" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StudentCard from "@/components/StudentCard.vue";
import Pagination from "./Pagination.vue";

export default defineComponent({
  props: ["students"],
  setup() {
    return { StudentCard };
  },
  components: { Pagination },
});
</script>
