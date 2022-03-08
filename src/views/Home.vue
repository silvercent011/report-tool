<template>
    <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div class="card w-100 mb-3">
            <div class="card-body">
                <h1 class="card-title">Oi, {{ user.nome.split(' ')[0] }}! :D</h1>
                <h5 class="card-text text-muted">{{ user.email }}</h5>
            </div>
        </div>

        <div class="card-group w-100">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Alunos</h5>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" @click="navigateTo('Students')">Listar Alunos</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Operações em Lote</h5>
                   <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Exportar boletins por turma.</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ user.nome.split(' ')[0] }} (Eu)</h5>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Aletar suporte</button>
                        <button class="btn btn-danger" type="button">Sair</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        const user = useUserStore().userData

        const navigateTo = (routeName: string) => {
            router.push({name: routeName})
        }

        return { user, navigateTo }
    },
})
</script>
