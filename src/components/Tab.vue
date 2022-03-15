<template>
  <div v-show="index === selectedIndex">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  props: ["title", "index"],
  setup() {
    const selectedIndex = inject("selectedIndex");
    return { selectedIndex };
  },
});
</script>
