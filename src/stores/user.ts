import { defineStore } from "pinia";
import axios from 'axios'
import router from "@/router";

const API: string = <string>import.meta.env.VITE_GREENWICH_URL

interface iUser {
    _id: string;
    level: string;
    created: string;
    updated: string;
    cpf: string;
    email: string;
    nome: string;
    token: string;
    passed: boolean;

}

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userData: {} as iUser
        }
    },
    actions: {
        async signin(login: string, password: string) {
            const dataSend = {
                cpf: login,
                password: password
            }
            await axios.post(`${API}/users/auth`, dataSend).then((data) => {
                this.userData = data.data
                router.replace({ name: 'Home' })
            })
        },

        signout() {
            this.userData = {} as iUser
            router.replace({ name: 'Index' })
        }
    }
})