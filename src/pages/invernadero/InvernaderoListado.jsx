import React, { useEffect, useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllInvernaderosUsuario } from '../../services/invernadero'
import { MdGridView } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorMessage from '../../components/messages/ErrorMessage'
import LoaderTableList from '../../components/table/LoaderTableList'
import MainTableList from '../../components/table/MainTableList'
import { BiEdit,BiTrash } from 'react-icons/bi'
import ModalEliminarInvernadero from '../../components/modal/ModalEliminarInvernadero'
import { UserContext } from '../../context/UserContext'

const InvernaderoListado = () => {
  const {showModal,setShowModal,token,id_usuario,messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
  const [invernadero,setInvernadero] = useState([])
  const [onlyInvernadero,setOnlyInvernadero] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  const [busqueda,setBusqueda] = useState("")
  const [size,setSize]=useState(5)
  const [countItem,setCountItem] = useState(0)
  const [showAlert,setShowAlert]=useState(true)
  const [idEliminar,setIdEliminar] = useState(0)

  useEffect(()=>{
    obtenerInvernaderos()
  },[size,counterRender])

  const obtenerInvernaderos = () =>{
    try{
      setCounterRender(0)
      getAllInvernaderosUsuario(id_usuario,token,size)
      .then((response)=>{
        setLoader(false)
        setInvernadero(response.data)
        setOnlyInvernadero(response.data)
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
  const handleSelectPage = (e)=>{
    setSize(e.target.value)
  }
  const handleBuscar = (e) =>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (terminoBusqueda)=>{
    var resultadoBusqueda = invernadero.filter((elemento)=>{
      if(elemento.nombre_invernadero.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    }) 
    setOnlyInvernadero(resultadoBusqueda)
  }
const alert = ()=> {
  return (
    <>
      <div className={`mx-28 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative transition-all`} role="alert ">
        <strong className="font-bold">Recuerda!</strong>
        <span className="block sm:inline"> Solo puedes eliminar aquellos Invernaderos que no tengan asignado un cultivo.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <button type="button" className=" " onClick={()=>setShowAlert(!showAlert)}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </button>
        </span>
      </div>
    </>
    )
  }


  const eliminarCultivo = (id_invernadero) =>{
    setIdEliminar(id_invernadero)
    setShowModal(true)
  }
  return (
    <>
    {showAlert?alert():null}
    <MainTableList nombre={"Invernaderos"} pathname={"/invernadero/crear"} busqueda={busqueda} handleBuscar={handleBuscar}/>

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
                                Ubicación
                              </th>
                              <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                Inicio Temporada
                              </th>
                              <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                Termino Temporada
                              </th>
                              <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                Estado
                              </th>
                              <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                Tamaño
                              </th>
                              <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                Acciones
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          onlyInvernadero.map((data,index)=>{
                            return (
                              <tr className="bg-white border-b" key={index}>
                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                { index+1}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data.nombre_invernadero}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data.ubicacion_invernadero}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data?.inicio_temporada.split("T")[0]}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data?.termino_temporada.split("T")[0]}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data.estado_invernadero === 0 ? <p className="bg-red-600 rounded-xl text-white">Desactivado</p> : <p className="bg-blue-500">Activado</p>}
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  {data.tamano_invernadero} m²
                                </td>
                                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                  <div className="flex gap-4 justify-center items-center">
                                    <button onClick={()=>eliminarCultivo(data.id_invernadero)} className="text-white"type="button">
                                      <div className='bg-red-200 rounded-full px-2 py-2'>
                                        <BiTrash className="text-xl text-red-600" />
                                      </div>
                                    </button>
                                    <button onClick={()=>{navigate(`editar/${data.id_invernadero}`)}} className="text-white"type="button">
                                      <div className='bg-green-200 rounded-full px-2 py-2'>
                                        <BiEdit className="text-xl text-green-600" />
                                      </div>
                                    </button>
                                    <button onClick={()=>{navigate(`detalle/${data.id_invernadero}`)}}>
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
                {showError ? <ErrorMessage message={messageError}/>:null}
                {onlyInvernadero.length===0 ? <ErrorMessage message={"Invernadero no encontrado"}/>:null}

                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-md xs:text-sm text-gray-900">
                      Mostrando {onlyInvernadero.length} de {countItem} Invernaderos
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
    {showModal ? <ModalEliminarInvernadero idInvernadero={idEliminar} /> : null}
    </>
  )
}

export default InvernaderoListado