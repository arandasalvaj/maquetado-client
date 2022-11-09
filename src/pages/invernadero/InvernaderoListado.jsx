import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllInvernaderos } from '../../services/invernadero'
import InvernaderoCrear from "./InvernaderoCrear"
import { IoEyeSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";

const InvernaderoListado = () => {
  const [showModal, setShowModal] = useState(false);
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)

  /**
   * Mostrar Errores
   */
  const [messageError , setMessageError]= useState([])
  const [showError , setShowError]= useState(false)
  const [invernadero,setInvernadero] = useState([])
  const [indexInv,setIndexInv] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    obtenerInvernaderos()
  },[indexInv])

  const obtenerInvernaderos = async () =>{
    try{
        await getAllInvernaderos(id_usuario)
        .then((response)=>{
          setLoader(false)
          setShowError(false)
          setInvernadero(response.data)
        })
        .catch((error)=>{
          console.log(error)
          if(error.response.status === 404 ){
            setShowError(true)
            setLoader(false)
            setMessageError(error.response.data.message)
            //throw error.response.data.message
          }
        })
      }catch(error) {
        console.log(error)
        throw error
      }
  }

  const loaderView = () =>{
    return(
    <>
        <div className="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap text-center">
          Cargando...
        </div>
    </>
    )
  }
  const showErrorMessage = () =>{
    return(
    <>
      <div className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold text-center">
        {messageError}
      </div>
    </>
    )
  }


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
          {data.estado_invernadero === 0 ? <p className="bg-red-600 rounded-xl text-white">Desactivado</p> : <p className="bg-blue-500">Activado</p>}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.tamano_invernadero}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          <div className="flex gap-4 justify-center items-center">
          <button className="text-white"type="button">
            <IoMdRemoveCircle className="text-3xl text-red-600" />
          </button>
          <button onClick={()=>{navigate(`${data.id_invernadero}`)}}>
            <IoEyeSharp className='text-3xl text-blue-400' />
          </button>
        </div>
        </td>
      </tr>
      
    )
  })

  return (
    <>
    <main className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de Invernaderos</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea invernaderos y editalos aqui</p>
            </div>
            <Link to={'/invernadero/crear'} element={<InvernaderoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear invernadero</Link>
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
                                Tamaño
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
                {loader ? loaderView() : "" }
                {showError ? showErrorMessage():""}
            </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default InvernaderoListado