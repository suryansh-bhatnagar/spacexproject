import axios from "axios";

const axiosInstance = axios.create({
    baseURL : `https://api.spacexdata.com/v4`,

})

export default axiosInstance;