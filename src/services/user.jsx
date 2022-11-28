import axios from "axios"
//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addUser=async(usuario)=> await axios.post(`${API_URL}v1/auth/registro/usuario`,usuario) 

export const deleteUser=async(id_usuario,indexInv,token)=> await axios.delete(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${indexInv}`,{headers: {'Authorization': token}}) 

export const loginUser=async(usuario)=> await axios.post(`${API_URL}v1/auth/login`,usuario) 

export const editUser=async(id,usuario,token)=> await axios.patch(`${API_URL}v1/usuarios/${id}`,usuario,{headers: {'Authorization': token}})  

export const verifyUser= async(token)=> await axios.get(`${API_URL}v1/auth/verify/${token}`)   

export const recoveryPasword= async(email)=> await axios.post(`${API_URL}v1/auth/recovery`,email)   

export const changePassword= async(password,token)=> await axios.patch(`${API_URL}v1/auth/recovery/${token}`,password)   