import axios from "axios"

//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const deleteAlerta=async(idAlerta,token)=> await axios.delete(`${API_URL}v1/usuario/alerta/${idAlerta}`,{headers: {'Authorization': token}}) 
