import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })
    // 2.1 axios请求拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        // console.log(err);
    })

    // 2.2 axios响应拦截
    instance.interceptors.response.use(res => {
        return res.data 
    }, err => {
        console.log(err);
    })  

    return instance(config)
}