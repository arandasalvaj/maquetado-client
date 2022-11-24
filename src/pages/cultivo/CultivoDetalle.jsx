import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import IndicadoresOptimos from "../../components/invernadero/IndicadoresOptimos"
import { getAllCamas } from '../../services/cama'
import CultivoCrear from "./CultivoCrear"
import { IoEyeSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
const CultivoDetalle = () => {
    const {idCultivo} = useParams()
    const [messageError , setMessageError]= useState([])
    const [showError , setShowError]= useState(false)
    const [loader,setLoader] = useState(true)
    const [camaTodas,setCamaTodas] = useState([])
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
    useEffect(()=>{
        obtenerCamas()
    },[])

    const obtenerCamas = () =>{
      getAllCamas(idCultivo,token)
      .then((response)=>{
        setLoader(false)
        setShowError(false)
        setCamaTodas(response.data)
      })
      .catch((error)=>{
        if(error.response.status === 404 ){
          setShowError(true)
          setLoader(false)
          setMessageError(error.response.data.message)
          throw error.response.data.message
        }
        if(error.response.status === 409 ){
          setShowError(true)
          setLoader(false)
          setMessageError(error.response.data.error)
          throw error.response.data.message
        }
      })
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
                {data.created_at}
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
      <div className=' grid grid-cols-12 '> 
        <div className='col-span-2 flex px-6 '>
          <nav>
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to={'../'} className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                        <AiTwotoneHome className="mr-1 w-5 h-5"/>
                        Cultivo
                    </Link>
                </li>
                <li>
                <div className="flex items-center">
                    <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                    <span className="text-lg font-medium text-gray-600 md:ml-2">Detalle</span>
                </div>
                </li>
            </ol>
          </nav>
        </div>
      </div>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Detalle de Cultivo</h1>
                <p className='text-3sm font-semibold text-gray-500'>Puedes ver los detalles de tu cultivo aqui</p>
            </div>
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