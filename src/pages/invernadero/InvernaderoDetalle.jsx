import React, { useContext, useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import IndicadoresPromedio from "../../components/invernadero/IndicadoresPromedio";
import InformacionRendimiento from "../../components/invernadero/InformacionRendimiento";
import { getAllCultivos } from '../../services/cultivo';
import { getInvernadero } from '../../services/invernadero';
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import LoaderTableList from '../../components/table/LoaderTableList';
import ErrorMessage from '../../components/messages/ErrorMessage';
import ErrorBusqueda from '../../components/messages/ErrorBusqueda';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../context/UserContext';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { MdGridView } from 'react-icons/md';
import ModalEliminarCultivo from '../../components/modal/ModalEliminarCultivo';



const InvernaderoDetalle = () => {
    const {showModal,setShowModal,token,messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
    const {idInvernadero} = useParams()
    const [invernadero,setInvernadero] = useState([])
    const [loader,setLoader] = useState(true)
    const [size,setSize]=useState(5)
    const [countItem,setCountItem] = useState(0)
    const [idEliminar,setIdEliminar] = useState(0)
    const [onlyCultivo,setOnlyCultivo] = useState([])

    useEffect(()=>{
        obtenerInvernadero()
        obtenerCultivo()
      },[size])

    const obtenerInvernadero = () =>{
        getInvernadero(idInvernadero,token)
        .then((response)=>{
            setInvernadero(response.data)
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

    const obtenerCultivo = async () =>{
      try{
        setCounterRender(0)
        getAllCultivos(idInvernadero,token,size)
        .then((response)=>{
          setLoader(false)
          setShowError(false)
          setOnlyCultivo(response.data)
          setCountItem(response?.data[0].full_count)
        })
        .catch((error)=>{
          setShowError(true)
          setLoader(false)
          if(error.response.status === 404 ){
            setMessageError(error.response.data.message)
            throw error.response.data.message
          }
          if(error.response.status === 409 ){
            setMessageError(error.response.data.error)
            throw error.response.data.message
          }
        })
        }catch(error) {
          throw error
        }
    }

    const eliminarCultivo = (id_cultivo) =>{
      setIdEliminar(id_cultivo)
      setShowModal(true)
    }
    const handleSelectPage = (e)=>{
    setSize(e.target.value)
  }
    const loaderView = () =>{
      return(
      <>
          <div className="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap text-center">
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          </svg>
            Cargando...
          </div>
      </>
      )
    }
    const showErrorMessage = () =>{
      return(
      <>
        <div className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold text-center border bg-[#FFFFFF] pb-6">
          {messageError}
        </div>
      </>
      )
    }
    //onClick={()=>{navigate(`cultivo/${data.id_cultivo}`)}}

  return (
    <>

      <div className=' grid grid-cols-12 '> 
        <div className='col-span-2 flex px-6 '>
          <nav>
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to={'../'} className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                        <AiTwotoneHome className="mr-1 w-5 h-5"/>
                        Invernadero
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

      <main className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Detalle de Invernadero</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea invernaderos y editalos aqui</p>
            </div>
        </div>
      </main>



      <div className='px-28'>
          <IndicadoresPromedio invernadero={invernadero} />
          <InformacionRendimiento ubicacion={invernadero.ubicacion_invernadero} invernadero={invernadero} />
      </div>
      <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Listado de Cultivos</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="overflow-x-auto w-[90%] sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full text-center leading-normal">
                        <thead className="border bg-gray-800 ">
                            <tr className=''>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  ID
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4 ">
                                  Cultivo
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Camas
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Fecha
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            onlyCultivo.map((data,index)=>{
                              return (
                                
                                  <tr className="bg-white border-b" key={index}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                      {index+1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.nombre_cultivo}
                                    </td> 
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {0}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.created_at}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      <div className="flex gap-4 justify-center items-center">
                                        <button onClick={()=>eliminarCultivo(data.id_cultivo)} className="text-white"type="button">
                                          <div className='bg-red-200 rounded-full px-2 py-2'>
                                            <BiTrash className="text-xl text-red-600" />
                                          </div>
                                        </button>
                                        <button onClick={()=>{navigate(`editar/${data.id_cultivo}`)}} className="text-white"type="button">
                                          <div className='bg-green-200 rounded-full px-2 py-2'>
                                            <BiEdit className="text-xl text-green-600" />
                                          </div>
                                        </button>
                                        <button onClick={()=>{navigate(`detalle/${data.id_cultivo}`)}}>
                                          <div className='bg-blue-200 rounded-full px-2 py-2'>
                                            <MdGridView className='text-xl text-blue-600' />
                                          </div>
                                        </button>
                                      </div>
                                      {showModal ?<ModalEliminarCultivo/> :null}
                                    </td>
                                  </tr>
                              )
                            })
                          }
                        </tbody>
                  </table>
                  {loader ? <LoaderTableList/> : "" }
                  {showError ? <ErrorMessage message={messageError}/> :""}
                  {onlyCultivo.length===0 ? <ErrorBusqueda message ={"Cultivo no encontrado"}/>:""}

                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-md xs:text-sm text-gray-900">
                        Mostrando {onlyCultivo.length} de {countItem} Invernaderos
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <select onChange={handleSelectPage} className=' border-gray-500 border-2 rounded'>
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={50}>50</option>
                        </select>
                    </div>
                    <h1 className=' text-gray-900' >Entradas por página</h1>
                  </div>
              </div>
          </div>
          <ToastContainer />
        </div>
      </div>
      {showModal ? <ModalEliminarCultivo idCultivo={idEliminar} /> : null}
    </>
  )
}

export default InvernaderoDetalle