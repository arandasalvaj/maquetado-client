import axios from "axios"
//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const addInvernadero=async(invernadero,id_usuario,token)=> await axios.post(`${API_URL}v1/usuarios/${id_usuario}/invernaderos`,invernadero,{headers: {'Authorization': token}})

export const getInvernadero=async(id_usuario,idInvernadero,token)=> await axios.get(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${idInvernadero}`,{headers: {'Authorization': token}})

export const getAllInvernaderosUsuario=async(id_usuario,token,size)=> {
    return await axios.get(`${API_URL}v1/usuarios/${id_usuario}/invernaderos?size=${size}`,{headers: {'Authorization': token}})
}
export const getAllSelect=async(id_usuario,token)=> {
    return await axios.get(`${API_URL}v1/usuarios/${id_usuario}/indernaderos/out/cultivos`,{headers: {'Authorization': token}})
}
export const deleteInvernadero=async(idInvernadero,token)=> await axios.delete(`${API_URL}v1/usuarios/invernaderos/${idInvernadero}`,{headers: {'Authorization': token}})  

