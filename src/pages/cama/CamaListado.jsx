import React, { useEffect, useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdGridView } from "react-icons/md"
import CamaCrear from './CamaCrear'
import { RiSearchLine,RiArrowDownSLine} from "react-icons/ri"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBusqueda from '../../components/messages/ErrorBusqueda'

import { AiOutlineDollarCircle } from 'react-icons/ai'
import ErrorMessage from '../../components/messages/ErrorMessage'
import LoaderTableList from '../../components/table/LoaderTableList'
import { getAllCamasUsuario } from '../../services/cama'
import { BiEdit,BiTrash } from 'react-icons/bi'
import ModalEliminarCama from '../../components/modal/ModalEliminarCama'
import { UserContext } from '../../context/UserContext'
import moment from 'moment'
const CamaListado = () => {
  
  const {showModal,setShowModal,token,messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
  
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  
  
  const [cama,setCama] = useState([])
  const [busqueda,setBusqueda] = useState("")
  const [onlyCama,setOnlyCama] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  const [size,setSize]=useState(5)
  const [countItem,setCountItem] = useState(0)
  const [idEliminar,setIdEliminar] = useState(0)

    useEffect(()=>{
      obtenerCama()
    },[size,counterRender])

    const obtenerCama = async () =>{
      setCounterRender(0)
      getAllCamasUsuario(id_usuario,token,size)
      .then((response)=>{
        if(response.data.length === 0){
          setShowError(true)
          setLoader(false)
          setMessageError("NO HAY CAMAS")
        }else{
          setShowError(false)
          setMessageError("")
          setLoader(false)
          setCama(response.data)
          setOnlyCama(response.data)
          setCountItem(response?.data[0].full_count)
        }
      })
    }

    const handleSelectPage = (e)=>{
      setSize(e.target.value)
    }


    const handleBuscar = (e) =>{
      setBusqueda(e.target.value)
      filtrar(e.target.value)

      if(onlyCama.length === 0){
        setShowError(true)
        setMessageError("CAMA NO ENCONTRADA")
        if(e.target.value === ""){
          setShowError(false)
          setMessageError("")
        }
        if(cama.length===0 && e.target.value === ""){
          setShowError(true)
          setMessageError("NO HAY CAMAS")
        }
      }else{
        setShowError(false)
        setMessageError("")
      }

    }
  
    const filtrar = (terminoBusqueda)=>{
      var resultadoBusqueda = cama.filter((elemento)=>{
        if(elemento.nombre_cama.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento
        }
      }) 
      setOnlyCama(resultadoBusqueda)
    }

    const eliminarCama = (id_cama) =>{
      setIdEliminar(id_cama)
      setShowModal(true)
    }

    return (
      <>
      <div className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de Camas</h1>
                <p className='text-3sm font-semibold text-gray-500'>Visualiza y crea camas aquí</p>
            </div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col items-center  justify-between ml-11">
            <div className='flex'>
                <div className="relative">
                    <select  className="rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-green-800">
                        <option value={0}>Camas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <RiArrowDownSLine />
                    </div>
                </div>
                <div className="relative ml-5">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                    </span>
                    <input placeholder="Buscar Cama" onChange={handleBuscar} value={busqueda} className="appearance-none rounded-xl  border border-gray-400 block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" />
                </div>
            </div>
            <div className='pr-10'>
              <Link to={'/cama/crear'} element={<CamaCrear/>} className="border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2 text-center">Crear Cama</Link>
            </div>
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
                                  Nombre
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Cultivo
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Invernadero
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Tamaño
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Brotes
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
                            onlyCama === 0 ? cama : onlyCama.map((data,index)=>{
                              return (
                                  <tr className="bg-white border-b" key={index}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                      {index+1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.nombre_cama}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.nombre_cultivo}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.nombre_invernadero}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.tamano_cama} m²  
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.brotes_cama}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      { moment(data.created_at).format("DD-MM-YYYY")}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      <div className="flex gap-4 justify-center items-center">
                                        <button onClick={()=>eliminarCama(data.id_cama)} className="text-white"type="button">
                                          <div className='bg-red-200 rounded-full px-2 py-2'>
                                            <BiTrash className="text-xl text-red-600" />
                                          </div>
                                        </button>
                                        <button onClick={()=>{navigate(`editar/${data.id_cama}`)}} className="text-white"type="button">
                                          <div className='bg-green-200 rounded-full px-2 py-2'>
                                            <BiEdit className="text-xl text-green-600" />
                                          </div>
                                        </button>
                                        <button onClick={()=>{navigate(`detalle/${data.id_cama}`)}}>
                                          <div className='bg-blue-200 rounded-full px-2 py-2'>
                                            <MdGridView className='text-xl text-blue-600' />
                                          </div>
                                        </button>
                                        <button onClick={()=>{navigate(`editar/${data.id_cama}`)}} className="text-white"type="button">
                                          <div className='bg-yellow-200 rounded-full px-2 py-2'>
                                            <AiOutlineDollarCircle className="text-xl text-yellow-600" />
                                          </div>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                              )
                            })
                          }
                        </tbody>
                  </table>
                  {loader ? <LoaderTableList/> : "" }
                  {showError ? <ErrorMessage message={messageError}/>:null}

                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-md xs:text-sm text-gray-900">
                        Mostrando {onlyCama.length} de {countItem} Camas
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
      {showModal ? <ModalEliminarCama idCama={idEliminar} /> : null}
      </>
    )
  }

export default CamaListado