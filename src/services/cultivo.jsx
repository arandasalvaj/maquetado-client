import axios from "axios"
const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
//const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addCultivo=async(cultivo,idInvernadero)=> await axios.post(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos`,cultivo,{headers: {'Authorization': token}}) 

export const deleteCultivo=async(idCultivo,idInvernadero)=> await axios.delete(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos/${idCultivo}`,{headers: {'Authorization': token}}) 

export const updateCultivo=async(cultivo,idInvernadero,idCultivo)=> await axios.patch(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos/${idCultivo}`,cultivo,{headers: {'Authorization': token}})  

export const getCultivo= async(idCultivo)=> await axios.get(`${API_URL}v1/invernaderos/cultivos/${idCultivo}`,{headers: {'Authorization': token}})   

export const getAllCultivos= async(idInvernadero)=> await axios.get(`${API_URL}v1/invernaderos/${idInvernadero}/cultivos`,{headers: {'Authorization': token}}) 

export const getAllCultivosUsuario= async(idUsuario)=> await axios.get(`${API_URL}v1/usuario/${idUsuario}/invernaderos/cultivos`,{headers: {'Authorization': token}})   
///usuario/invernaderos/cultivos/:idCultivo
export const getCultivoFind= async(idCultivo)=> await axios.get(`${API_URL}v1/usuario/invernaderos/cultivos/${idCultivo}`,{headers: {'Authorization': token}}) 

