import axios from "axios"
<<<<<<< HEAD
//const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
=======
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.

// const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.

>>>>>>> d8b5527f74cfa201961f349fc9bd56083fb31c35


export const getAllNotificaciones=async(id_usuario,token)=> await axios.get(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${idInvernadero}`,{headers: {'Authorization': token}})

export const deleteInvernadero=async(id_usuario,idInvernadero,token)=> await axios.delete(`${API_URL}v1/usuarios/${id_usuario}/invernaderos/${idInvernadero}`,{headers: {'Authorization': token}})  

