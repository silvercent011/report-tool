import { defineStore } from "pinia";
import axios from 'axios'
import router from "@/router";
import { useUserStore } from "./user";

const API: string = <string>import.meta.env.VITE_GREENWICH_URL

interface iStudent {
    img_url?: string;
    _id: string;
    dt_nascimento: string;
    email: string;
    created: string;
    updated: string;
    enabled: boolean;
    matricula: string;
    nome: string;
    turma: string;
    nivel: string;
    turno: string;
    email_secondary: string;
}

export const useStudentsStore = defineStore('students', {
    state: () => {
        return {
            students: {} as Array<iStudent>
        }
    },
    actions: {
        async getAllStudents() {
            const user = useUserStore()
            this.students = <Array<iStudent>>await axios.get(`${API}/alunos/`, { headers: { auth: user.userData.token } }).then((data) => {
                return data.data
            })
        },
    },
})