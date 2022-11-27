import axios from "axios"
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
// const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

export const editarPerfil=async(perfil,id_usuario,token)=> await axios.patch(`${API_URL}v1/usuarios/${id_usuario}`,perfil,{headers: {'Authorization': token}}) 