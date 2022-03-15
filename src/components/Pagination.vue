<template>
  <nav class="mt-4">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        :class="{ disabled: !isFirstPage }"
        @click="backOne"
      >
        <a class="page-link">Anterior</a>
      </li>
      <li
        class="page-item"
        :class="{ active: page == actualIndex }"
        v-for="page in Math.ceil(items.length / itemsPerPage)"
        :key="page"
      >
        <a class="page-link" href="#" @click="changeIndex(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: isLastPage }" @click="addOne">
        <a class="page-link" href="#">Próximo</a>
      </li>
    </ul>
  </nav>

  <div class="container d-flex flex-row justify-content-center min-vh-100">
    <div class="w-100 row row-cols-1 row-cols-md-2 g-4 mb-4">
      <StudentCard
        v-for="(std, index) in itemsForPage"
        :key="index"
        :student="std"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import StudentCard from "@/components/StudentCard.vue";

export default defineComponent({
  props: ["items"],
  setup(props) {
    const actualIndex = ref(1);
    const itemsPerPage = ref(30);
    const itemsForPage = computed(() => {
      return props.items.slice(
        (actualIndex.value - 1) * itemsPerPage.value,
        actualIndex.value * itemsPerPage.value
      );
    });
    const changeIndex = (index: number) => {
      actualIndex.value = index;
    };

    const isFirstPage = computed(() => {
      return actualIndex.value > 1;
    });

    const isLastPage = computed(() => {
      return (
        actualIndex.value == Math.ceil(props.items.length / itemsPerPage.value)
      );
    });

    function backOne() {
      if (actualIndex.value - 1 != 0) {
        changeIndex(actualIndex.value - 1);
      }
    }
    function addOne() {
      if (
        actualIndex.value != Math.ceil(props.items.length / itemsPerPage.value)
      ) {
        changeIndex(actualIndex.value + 1);
      }
    }

    return {
      actualIndex,
      itemsPerPage,
      changeIndex,
      itemsForPage,
      isFirstPage,
      backOne,
      isLastPage,
      addOne,
    };
  },
  components: { StudentCard },
});
</script>
