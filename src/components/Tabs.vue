<template>
  <div>
    <ul class="nav nav-pills bg-light p-2">
      <li class="nav-item" v-for="(title, index) in tabsTitles" :key="title">
        <button
          class="nav-link"
          :class="{ active: index === selectedIndex }"
          @click="selectedIndex = index"
        >
          {{ title }}
        </button>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, provide, defineComponent } from "vue";
export default defineComponent({
  setup(props, { slots }) {
    const tabsTitles = ref(slots.default().map((tab) => tab.props?.title));
    const selectedIndex = ref(0);
    provide("selectedIndex", selectedIndex);
    return { tabsTitles, selectedIndex };
  },
});
</script>
