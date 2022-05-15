import axios from "axios"

export const RequestsAPI = {
    post (success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}