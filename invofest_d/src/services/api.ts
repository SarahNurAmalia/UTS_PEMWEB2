import axios from "axios";

const api = axios.create({

    baseURL: "https://utspemweb2-backend.up.railway.app",

    headers: {
        "Content-Type": "application/json",
    },
});

export default api;