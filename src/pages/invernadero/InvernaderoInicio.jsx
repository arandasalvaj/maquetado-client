import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import InvernaderoCrear from "./InvernaderoCrear"
import { IoMdRemoveCircle } from "react-icons/io";

const InvernaderoInicio = () => {
  const loggedUser = window.localStorage.getItem('loggedUser')
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const {url} =useContext(UserContext)
  const [invernadero,setInvernadero] = useState([])
//{invernaderos.map(invernadero=>console.log(invernadero.nombre_invernadero))}


  useEffect(()=>{
    const {id_usuario} = JSON.parse(loggedUser)
    axios.get(`${url}api/usuarios/${id_usuario}/invernaderos`, {
      headers: {
        'Authorization': token
      }
    }).then((response)=>{
      setInvernadero(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const invernaderos = invernadero.map((data,index)=>{
    const fecha = data.created_at.split('T')
    return (
      <tr className="bg-white border-b" key={index}>
        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
          {index+1}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.nombre_invernadero}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.ubicacion_invernadero}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {fecha[0]}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.estado_invernadero === 0 ? 'Desactivado':'Activado'}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          <Link to={'/invernadero'}><IoMdRemoveCircle className='text-red-500 text-3xl'/></Link>
        </td>
      </tr>
      
    )
  })


  return (
  <>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div>
                <h1 className='text-2xl font-semibold leading-relaxed text-gray-800'>Invernaderos</h1>
                <p className='text-sm font-semibold text-gray-500'>Crea invernaderos y editalos aqui</p>
            </div>
            <Link to={'/invernadero/crear'} element={<InvernaderoCrear/>} className='py-2.5 px-6 text-white bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear invernadero</Link>
        </div>
    </main>
    <div className="flex justify-center">
      <div className="overflow-x-auto w-[90%]  sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                      <thead className="border-b bg-gray-800">
                          <tr>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                ID
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Nombre
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Ubicación
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Creado
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Estado
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Acciones
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                      {invernaderos}
                      </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default InvernaderoInicio