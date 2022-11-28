
import axios from "axios"
//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const getCosecha=async(idCama,token)=> await axios.get(`${API_URL}v1/usuario/cama/cosecha/${idCama}`,{headers: {'Authorization': token}}) 
export const updateCosecha=async(idCosecha,cosecha,token)=> await axios.patch(`${API_URL}v1/usuario/cama/cosecha/${idCosecha}`,cosecha,{headers: {'Authorization': token}}) 