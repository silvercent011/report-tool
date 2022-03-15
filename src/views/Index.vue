<template>
  <div
    class="container d-flex flex-row justify-content-center align-items-center min-vh-100"
  >
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">Report Studio Tool</h5>
        <p class="card-text">Insira abaixo as suas credenciais para entrar.</p>
        <form @submit.prevent="doSignIn">
          <div class="mb-3">
            <label for="login" class="form-label">Login/CPF</label>
            <input
              type="number"
              class="form-control"
              id="login"
              required
              v-model="login"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
            />
            <input type="submit" value="Entrar" class="btn btn-primary mt-3" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const login = ref("");
    const password = ref("");
    const doSignIn = () => userStore.signin(login.value, password.value);
    return { login, password, doSignIn };
  },
});
</script>
