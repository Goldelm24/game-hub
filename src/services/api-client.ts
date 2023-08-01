import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a3acafc580554912ab59e28f60fbc95a'
    }
})