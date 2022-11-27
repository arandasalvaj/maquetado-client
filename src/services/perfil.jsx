import axios from "axios"
const API_URL = 'https://tuinvernadero.xyz/' //URL DE PRODUCCION, SOLO CUANDO ESTA EN PRODUCCION.
<<<<<<< HEAD
// const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
=======
//const API_URL = 'http://localhost:8000/' //URL LOCAL, SOLO DE DESARROLLO.
>>>>>>> 0d611a5c32d61ef037841c49feb05ceda42686cf

export const editarPerfil=async(perfil,id_usuario,token)=> await axios.patch(`${API_URL}v1/usuarios/${id_usuario}`,perfil,{headers: {'Authorization': token}}) 