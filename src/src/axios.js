import axios from "axios"
import config from "./config"

const axiosConfig = axios.create({
    baseURL: config.SERVER_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default axiosConfig