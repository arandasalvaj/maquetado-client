import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import CamaCrear from './CamaCrear';
import { RiSearchLine,RiArrowDownSLine} from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBusqueda from '../../components/messages/ErrorBusqueda';
import ErrorMessage from '../../components/messages/ErrorMessage';
import LoaderTableList from '../../components/table/LoaderTableList';
import { getAllCamasUsuario } from '../../services/cama';
import { BiEdit,BiTrash } from 'react-icons/bi'

const CamaListado = () => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    const {id_usuario} = JSON.parse(loggedUser)
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];

    const [messageError , setMessageError]= useState([])
    const [showError , setShowError]= useState(false)
    const [cama,setCama] = useState([])
    const [busqueda,setBusqueda] = useState("")
    const [onlyCama,setOnlyCama] = useState([])
    const [loader,setLoader] = useState(true)
    const navigate = useNavigate()
    const [size,setSize]=useState(5)
    const [countItem,setCountItem] = useState(0)

    useEffect(()=>{
        obtenerCultivo()
    },[size])
    
    const obtenerCultivo = async () =>{
      try{
        getAllCamasUsuario(id_usuario,token,size)
        .then((response)=>{
            setLoader(false)
            setCama(response.data)
            setOnlyCama(response.data)
            setCountItem(response?.data[0].full_count)
        })
        .catch((error)=>{
          console.log(error)
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
    const handleSelectPage = (e)=>{
      setSize(e.target.value)
    }
    const handleBuscar = (e) =>{
      setBusqueda(e.target.value)
      filtrar(e.target.value)
    }
  
    const filtrar = (terminoBusqueda)=>{
      var resultadoBusqueda = cama.filter((elemento)=>{
        if(elemento.nombre_cama.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento
        }
      }) 
      setOnlyCama(resultadoBusqueda)
    }

    return (
      <>
      <div className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de Camas</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea camas y editalas aqui</p>
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
                          {console.log(cama)}
                          {
                            onlyCama.map((data,index)=>{
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
                                      {data?.created_at.split("T")[0]}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-4 justify-center items-center">
                                      <button className="text-white"type="button">
                                        <div className='bg-red-200 rounded-full px-2 py-2'>
                                          <BiTrash className="text-xl text-red-600" />
                                        </div>
                                      </button>
                                      <button className="text-white"type="button">
                                        <div className='bg-green-200 rounded-full px-2 py-2'>
                                          <BiEdit className="text-xl text-green-600" />
                                        </div>
                                      </button>
                                      <button onClick={()=>{navigate(`${data.id_cultivo}`)}}>
                                        <div className='bg-blue-200 rounded-full px-2 py-2'>
                                          <MdGridView className='text-xl text-blue-600' />
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
                  {showError ? <ErrorMessage message={messageError}/>:""}
                  {onlyCama.length===0 ? <ErrorBusqueda message ={"Cama no encontrada"}/>:""}
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
      </>
    )
  }

export default CamaListado