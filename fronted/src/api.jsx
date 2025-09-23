import axios from 'axios'


const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'


export const api = axios.create({ baseURL })


// attach token to requests
api.interceptors.request.use(config => {
const token = localStorage.getItem('token')
if (token) config.headers.Authorization = `Bearer ${token}`
return config
})
api.interceptors.response.use(res => res, err => {
if (err.response && err.response.status === 401) {
// simple global logout
localStorage.removeItem('token')
localStorage.removeItem('user')
window.location.href = '/login'
}
return Promise.reject(err)
})


export default api