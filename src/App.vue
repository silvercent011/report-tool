<template>
  <div class="bg-dark min-vh-100">
    <Suspense>
      <router-view></router-view>
      <template #fallback>
        <h1>Loading</h1>
      </template>
    </Suspense>
  </div>
</template>
