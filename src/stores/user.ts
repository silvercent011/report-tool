import { defineStore } from "pinia";
import axios from 'axios'

const API: string = <string>import.meta.env.VITE_GREENWICH_URL
console.log(API)
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userData: {}
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
                alert(data.data)
            })
        }
    }
})