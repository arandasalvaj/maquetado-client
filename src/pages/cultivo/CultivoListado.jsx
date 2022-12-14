import React, { useEffect, useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdGridView } from "react-icons/md"
import CultivoCrear from './CultivoCrear'
import { getAllCultivosUsuario } from '../../services/cultivo'
import { RiSearchLine,RiArrowDownSLine} from "react-icons/ri"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBusqueda from '../../components/messages/ErrorBusqueda'
import ErrorMessage from '../../components/messages/ErrorMessage'
import LoaderTableList from '../../components/table/LoaderTableList'
import { BiEdit,BiTrash } from 'react-icons/bi'
import ModalEliminarCultivo from '../../components/modal/ModalEliminarCultivo'
import { UserContext } from '../../context/UserContext'
import moment from 'moment'

const CultivoListado = () => {
  
  const {showModal,setShowModal,token,messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const [estadoFiltro,setEstadoFiltro]=useState("0")
  const [cultivo,setCultivo] = useState([])
  const [busqueda,setBusqueda] = useState("")
  const [onlyCultivo,setOnlyCultivo] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  const [showAlert,setShowAlert]=useState(true)
  const [size,setSize]=useState(5)
  const [countItem,setCountItem] = useState(0)
  const [idEliminar,setIdEliminar] = useState(0)

    useEffect(()=>{
      obtenerCultivo()
    },[size,counterRender])
    
    const obtenerCultivo = async () =>{
      setCounterRender(0)
      getAllCultivosUsuario(id_usuario,token,size)
      .then((response)=>{
        if(response.data.length === 0){
          setShowError(true)
          setLoader(false)
          setMessageError("NO HAY CULTIVOS")
        }else{
          setShowError(false)
          setMessageError("")
          setLoader(false)
          setCultivo(response.data)
          setOnlyCultivo(response.data)
          setCountItem(response?.data[0].full_count)
        }
      })
    }
    const handleSelectPage = (e)=>{
    setSize(e.target.value)
  }
  // const filtrarInvernadero = (terminoBusqueda)=>{
  //   var resultadoBusqueda = cultivo.filter((elemento)=>{
  //     if(elemento.nombre_cultivo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
  //       return elemento
  //     }
  //   }) 
  //   setOnlyCultivo(resultadoBusqueda)
  // }

  const filtrarCultivo = (terminoBusqueda)=>{
    var resultadoBusqueda = cultivo.filter((elemento)=>{
      if(elemento.nombre_cultivo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    }) 
    setOnlyCultivo(resultadoBusqueda)
  }
  const handleBuscarCultivo = (e) =>{
    setBusqueda(e.target.value)
    filtrarCultivo(e.target.value)

    if(onlyCultivo.length === 0){
      setShowError(true)
      setMessageError("CULTIVO NO ENCONTRADO")
      if(e.target.value === ""){
        setShowError(false)
        setMessageError("")
      }
      if(cultivo.length===0 && e.target.value === ""){
        setShowError(true)
        setMessageError("NO HAY CULTIVOS")
      }
    }else{
      setShowError(false)
      setMessageError("")
    }
  }
  // const handleBuscarInvernadero = (e) =>{
  //   setBusqueda(e.target.value)
  //   filtrarInvernadero(e.target.value)

  //   if(onlyCultivo.length === 0){
  //     setShowError(true)
  //     setMessageError("CULTIVO NO ENCONTRADO")
  //     if(e.target.value === ""){
  //       setShowError(false)
  //       setMessageError("")
  //     }
  //     if(cultivo.length===0 && e.target.value === ""){
  //       setShowError(true)
  //       setMessageError("NO HAY CULTIVOS")
  //     }
  //   }else{
  //     setShowError(false)
  //     setMessageError("")
  //   }
  // }
  const handleSelect = (e) =>{
    setEstadoFiltro(e.target.value)
  }

  const inputFiltro = (estadoFiltros) =>{
    switch (estadoFiltros) {
      case "0":
        return (
          <>
            <div className="relative ml-5">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
              </span>
              <input placeholder="Buscar por Cultivo" onChange={handleBuscarCultivo} value={busqueda} className="appearance-none rounded-xl  border border-gray-400 block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" />
            </div>
          </>
        )
      // case "1":
      //   return (
      //     <>
      //       <div className="relative ml-5">
      //         <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
      //           <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
      //         </span>
      //         <input placeholder="Buscar por Invernadero" onChange={handleBuscarInvernadero} value={busqueda} className="appearance-none rounded-xl  border border-gray-400 block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" />
      //       </div>
      //     </>
      //   )
      default:
        break;
    }
  }
  const alert = ()=> {
    return (
      <>
        <div className={`mx-28 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative transition-all`} role="alert ">
          <strong className="font-bold">??Recuerda!</strong>
          <span className="block sm:inline"> Solo puedes eliminar aquellos cultivos que no tengan asignado una cama.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <button type="button" className=" " onClick={()=>setShowAlert(!showAlert)}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </button>
          </span>
        </div>
      </>
      )
    }



    const eliminarCultivo = (id_cultivo) =>{
      setIdEliminar(id_cultivo)
      setShowModal(true)
    }

    const estadoInvernadero = (estado) =>{

      if(estado => 0 ){
        <p className="bg-green-600 rounded-xl text-white">Activado</p>
      }else{
        <p className="bg-red-600 rounded-xl text-white">Desactivado</p>
      }

    }
    return (
      <>
    {showAlert?alert():null}
      <main className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
              <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de Cultivos</h1>
              <p className='text-3sm font-semibold text-gray-500'>Visualiza y crea cultivos aqu??</p>
            </div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col items-center  justify-between ml-11">
          <div className='flex'>
            <div className="relative">
                <select onChange={handleSelect} className="rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-green-800">
                    <option value={0}>Cultivo</option>
                    {/* <option value={1}>Invernadero</option> */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <RiArrowDownSLine />
                </div>
            </div>
            {inputFiltro(estadoFiltro )}
          </div>
            <div className='pr-10'>
              <Link to={'/cultivo/crear'} element={<CultivoCrear/>} className="border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2 text-center">Crear Cultivo</Link>
            </div>
        </div>
      </main>
  
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
                                  Invernadero
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Estado
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
                                      {data.nombre_invernadero}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.estado_cultivos > 0 ? <p className="bg-green-600 rounded-xl text-white">Activado</p>:<p className="bg-red-600 rounded-xl text-white">Desactivado</p>}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {moment(data.created_at).format('YYYY-MM-DD')}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      <div className="flex gap-4 justify-center items-center">
                                        {data.estado_cultivos > 0 ? null:<button onClick={()=>eliminarCultivo(data.id_cultivo)} className="text-white"type="button"><div className='bg-red-200 rounded-full px-2 py-2'><BiTrash className="text-xl text-red-600" /></div></button>}
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
                  {showError ? <ErrorMessage message={messageError}/>:null}

                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-md xs:text-sm text-gray-900">
                        Mostrando {onlyCultivo.length} de {countItem} Cultivos
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <select onChange={handleSelectPage} className=' border-gray-500 border-2 rounded'>
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={50}>50</option>
                        </select>
                    </div>
                    <h1 className=' text-gray-900' >Entradas por p??gina</h1>
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

export default CultivoListado