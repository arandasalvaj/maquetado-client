import axios from "axios"
<<<<<<< HEAD
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
// const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
=======

//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
>>>>>>> 36ef79e514902a79224feead4f79e4bcb58a2644

export const addCama=async(cama,idCultivo,token)=> await axios.post(`${API_URL}v1/cultivo/${idCultivo}/cama`,cama,{headers: {'Authorization': token}}) 

export const deleteCama=async(idCama,token)=> await axios.delete(`${API_URL}v1/cultivo/cama/${idCama}`,{headers: {'Authorization': token}}) 

export const updateCama=async(cama,idCama,token)=> await axios.patch(`${API_URL}v1/cultivo/cama/${idCama}`,cama,{headers: {'Authorization': token}})  

export const getCama= async(idCama,token)=> await axios.get(`${API_URL}v1/cultivo/cama/${idCama}`,{headers: {'Authorization': token}})   

export const getAllCamas= async(idCultivo,token)=> await axios.get(`${API_URL}v1/cultivo/${idCultivo}/cama`,{headers: {'Authorization': token}}) 

export const getAllCamasUsuario= async(idUsuario,token,size)=> await axios.get(`${API_URL}v1/usuario/${idUsuario}/cultivo/cama?size=${size}`,{headers: {'Authorization': token}})

  export const getAllSensores= async(token, fecha_inicio, fecha_fin, id_cama)=> await axios.get(`${API_URL}v1/nodemcu/data/${id_cama}?fechaInicio=${fecha_inicio}&fechaFin=${fecha_fin}`,{headers: {'Authorization': token}})

<<<<<<< HEAD
=======
//  export const getAllSensores= async(token, fecha_inicio, fecha_fin, id_cama)=> {
//     console.log('//'+token +'/'+ fecha_inicio+'/'+ fecha_fin);
//     console.log(id_cama)
//  }
>>>>>>> 28611da964d77c854bf88287d8fcc5da7484fb6e
