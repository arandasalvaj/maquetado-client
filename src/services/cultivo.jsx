import axios from "axios"
<<<<<<< HEAD
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
// const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
=======

//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
>>>>>>> 36ef79e514902a79224feead4f79e4bcb58a2644

export const addCultivo=async(cultivo,idInvernadero,token)=> await axios.post(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos`,cultivo,{headers: {'Authorization': token}}) 

export const deleteCultivo=async(idCultivo,token)=> await axios.delete(`${API_URL}v1/invernaderos/cultivos/${idCultivo}`,{headers: {'Authorization': token}}) 

export const updateCultivo=async(cultivo,idCultivo,token)=> await axios.patch(`${API_URL}v1/invernaderos/cultivos/${idCultivo}`,cultivo,{headers: {'Authorization': token}})  

export const getCultivo= async(idCultivo,token)=> await axios.get(`${API_URL}v1/invernaderos/cultivos/${idCultivo}`,{headers: {'Authorization': token}})   

export const getAllCultivos= async(idInvernadero,token)=> await axios.get(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos`,{headers: {'Authorization': token}}) 

export const getAllCultivosUsuario= async(idUsuario,token,size)=> await axios.get(`${API_URL}v1/usuario/${idUsuario}/invernaderos/cultivos?size=${size}`,{headers: {'Authorization': token}})   

export const getCultivoFind= async(idCultivo,token)=> await axios.get(`${API_URL}v1/usuario/invernaderos/cultivos/${idCultivo}`,{headers: {'Authorization': token}}) 

