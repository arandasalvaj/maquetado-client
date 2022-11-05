import axios from "axios"

const API_URL = 'https://tuinvernadero.xyz/'

export const addUser=async(user)=> await axios.post(`${API_URL}v1/auth/registro`,user) 

export const loginUser=async(user)=> await axios.post(`${API_URL}v1/auth/login`,user) 

export const editUser=async(id,user)=> await axios.patch(`${API_URL}v1/usuarios/${id}`,user)  

export const verifyUser= async(token)=> await axios.get(`${API_URL}v1/auth/verify/${token}`)   