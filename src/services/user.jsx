import axios from "axios"
const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
//const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addUser=async(user)=> await axios.post(`${API_URL}v1/auth/registro`,user) 

export const deleteUser=async(id_usuario,indexInv)=> await axios.delete(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${indexInv}`) 

export const loginUser=async(user)=> await axios.post(`${API_URL}v1/auth/login`,user) 

export const editUser=async(id,user)=> await axios.patch(`${API_URL}v1/usuarios/${id}`,user)  

export const verifyUser= async(token)=> await axios.get(`${API_URL}v1/auth/verify/${token}`)   

export const recoveryPasword= async(email)=> await axios.post(`${API_URL}v1/auth/recovery`,email)   

export const changePassword= async(password,token)=> await axios.patch(`${API_URL}v1/auth/recovery/${token}`,password)   