import axios from 'axios'

const instance = axios.create({
    baseURL:'/api',
    timeout: 30000,
})

instance.interceptors.request.use(
    config => {
        return config;
},error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    const res = response.data
    
    return res
}, error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
})

export default instance