import axios from "axios"
//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addCama=async(cama,idCultivo,token)=> await axios.post(`${API_URL}v1/cultivo/${idCultivo}/cama`,cama,{headers: {'Authorization': token}}) 

export const deleteCama=async(idCama,idCultivo,token)=> await axios.delete(`${API_URL}v1/cultivo/${idCultivo}/cama/${idCama}`,{headers: {'Authorization': token}}) 

export const updateCama=async(cama,idCultivo,idCama,token)=> await axios.patch(`${API_URL}v1/cultivo/${idCultivo}/cama/${idCama}`,cama,{headers: {'Authorization': token}})  

export const getCama= async(idCultivo,idCama,token)=> await axios.get(`${API_URL}v1/cultivo/${idCultivo}/cama/${idCama}`,{headers: {'Authorization': token}})   

export const getAllCamas= async(idCultivo,token)=> await axios.get(`${API_URL}v1/cultivo/${idCultivo}/cama`,{headers: {'Authorization': token}}) 

export const getAllCamasUsuario= async(idUsuario,token,size)=> await axios.get(`${API_URL}v1/usuario/${idUsuario}/cultivo/cama?size=${size}`,{headers: {'Authorization': token}}) 