import axios from "axios"
const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
//const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addInvernadero=async(invernadero,id_usuario)=> await axios.post(`${API_URL}v1/usuarios/${id_usuario}/invernaderos`,invernadero,{headers: {'Authorization': token}})

export const getInvernadero=async(id_usuario,idInvernadero)=> await axios.get(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${idInvernadero}`,{headers: {'Authorization': token}})

export const getAllInvernaderos=async(id_usuario)=> await axios.get(`${API_URL}v1/usuarios/${id_usuario}/invernaderos`,{headers: {'Authorization': token}})

export const deleteInvernadero=async(id,user)=> await axios.patch(`${API_URL}v1/usuarios/${id}`,user,{headers: {'Authorization': token}})  
