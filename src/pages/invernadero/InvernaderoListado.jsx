import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllInvernaderosUsuario } from '../../services/invernadero'
import { IoEyeSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from '../../components/messages/ErrorMessage';
import ErrorBusqueda from '../../components/messages/ErrorBusqueda';
import LoaderTableList from '../../components/table/LoaderTableList';
import MainTableList from '../../components/table/MainTableList';

const InvernaderoListado = () => {
  const [showModal, setShowModal] = useState(false);
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]
  const [messageError , setMessageError]= useState([])
  const [showError , setShowError]= useState(false)
  const [invernadero,setInvernadero] = useState([])
  const [onlyInvernadero,setOnlyInvernadero] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()
  const [busqueda,setBusqueda] = useState("")
  const [size,setSize]=useState(5)
  const [countItem,setCountItem] = useState(0)
  const [showAlert,setShowAlert]=useState(true)
  useEffect(()=>{
    obtenerInvernaderos()
  },[size])

  const obtenerInvernaderos = () =>{
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
      switch (error.response.status) {
        case 404:
            setMessageError(error.response.data.message)
          break;
        case 409:
            setMessageError(error.response.data.message)
           break;
        default:
          break;
      }
    })
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
                                    <button onClick={()=>{setShowModal(true)}} className="text-white"type="button">
                                      <IoMdRemoveCircle className="text-3xl text-red-600" />
                                    </button>
                                    <button onClick={()=>{navigate(`${data.id_invernadero}`)}}>
                                      <IoEyeSharp className='text-3xl text-blue-400' />
                                    </button>
                                  </div>
                                  {/* INICIO MODAL */}
                                  {showModal ? 
                                  <>
                                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                              <h3 className="text-3xl font-semibold"> Eliminar Invernadero</h3>
                                              <button onClick={() => setShowModal(false)} className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                  <h1>x</h1>
                                              </span>
                                              </button>
                                          </div>
                                          {/*body*/}
                                          <div className="relative p-6 flex-auto whitespace-normal">
                                            <p className="my-4 text-black text-xl font-semibold leading-relaxed ">
                                                  ¿Estas seguro que deseas eliminar el invernadero? 
                                              </p>
                                              <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                                                  Toda la información relacionada a tu invernadero sera eliminada, esto incluye camas y cultivos.
                                                  <h1 className='text-red-500 font-bold' >Esta acción no se puede deshacer</h1>
                                              </p>
                                          </div>
                                          {/*footer*/}
                                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                              <button type="button" onClick={() => setShowModal(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                  Cancelar
                                              </button>
                                              <button type="button" className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                              onClick={()=>{
                                                  setShowModal(false)
                                              }}>
                                                  Eliminar
                                              </button>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="opacity-5 fixed inset-0 z-40 bg-gray-200  "></div>
                                  </>:null}
                                  {/* TERMINO MODAL */}
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
    </>
  )
}

export default InvernaderoListado