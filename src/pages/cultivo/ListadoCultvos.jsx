import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import CultivoCrear from './CultivoCrear';
import { getAllCultivosUsuario } from '../../services/cultivo';

const ListadoCultvos = () => {
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)

  /**
   * Mostrar Errores
   */
  const [messageError , setMessageError]= useState([])
  const [showError , setShowError]= useState(false)
  const [cultivo,setCultivo] = useState([])
  const [indexInv,setIndexInv] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    obtenerCultivo()
  },[indexInv])

  const obtenerCultivo = async () =>{
    try{
        getAllCultivosUsuario(id_usuario)
        .then((response)=>{
          setLoader(false)
          setShowError(false)
          setCultivo(response.data)
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


  const invernaderos = cultivo.map((data,index)=>{
    const fecha = data.created_at.split('T')
    return (
      <tr className="bg-white border-b" key={index}>
        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
          {index+1}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.nombre_cultivo}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.nombre_invernadero}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {data.cantidad_camas}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          {fecha[0]}
        </td>
        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
          <div className="flex gap-4 justify-center items-center">
          <button className="text-white"type="button">
            <IoMdRemoveCircle className="text-3xl text-red-600" />
          </button>
          <button onClick={()=>{navigate(`${data.id_cultivo}`)}}>
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
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de Cultivos</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea Cultivos y editalos aqui</p>
            </div>
            <Link to={'/cultivo/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear Cultivos</Link>
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
                                Cultivo
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Invernadero
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Camas
                              </th>
                              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Fecha
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

export default ListadoCultvos