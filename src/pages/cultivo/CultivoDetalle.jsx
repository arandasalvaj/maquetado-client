import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import IndicadoresOptimos from "../../components/invernadero/IndicadoresOptimos"
import { getAllCamas } from '../../services/cama'
import CultivoCrear from "./CultivoCrear"
import { IoEyeSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";

const CultivoDetalle = () => {
    const {idCultivo} = useParams()
    const [messageError , setMessageError]= useState([])
    const [showError , setShowError]= useState(false)
    const [loader,setLoader] = useState(true)
    const [camaTodas,setCamaTodas] = useState([])

    useEffect(()=>{
        obtenerCamas()
    },[])

    const obtenerCamas = async () =>{
        try{
            await getAllCamas(idCultivo)
            .then((response)=>{
              setLoader(false)
              setShowError(false)
              setCamaTodas(response.data)
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
      //onClick={()=>{navigate(`cultivo/${data.id_cultivo}`)}}
  
      const camas = camaTodas.map((data,index)=>{
        const fecha = data.created_at.split('T')
        return (
          <tr className="bg-white border-b" key={index}>
            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
              {index+1}
            </td>
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
              {data.nombre_cama}
            </td>
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
              {data.tamano_cama}
            </td>
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                {data.brotes_cama}
            </td>
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                {fecha[0]}
            </td>
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
              <div className="flex gap-4 justify-center items-center">
              <button className="text-white"type="button">
                <IoMdRemoveCircle className="text-3xl text-red-600" />
              </button>
              <Link to={`../../cultivo/${data.id_cultivo}`} element={<CultivoDetalle/>}>
                <IoEyeSharp className='text-3xl text-blue-400' />
              </Link>
            </div>
            </td>
          </tr>
          
        )
      })

  return (
    <>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Detalle de Cultivo</h1>
                <p className='text-3sm font-semibold text-gray-500'>Detalle de cultivos</p>
            </div>
            <Link to={'/cultivo/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear cultvo</Link>
        </div>
        <IndicadoresOptimos idCultivo={idCultivo}/>
    </main>


    <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Listado de Camas</h1>
        </div>
    </div>

    <div className="flex justify-center">
        <div className="overflow-x-auto w-[70%]  sm:-mx-6 lg:-mx-8 ">
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
                                    Tamaño
                                </th>
                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                    Brotes
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
                          {camas}
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

export default CultivoDetalle