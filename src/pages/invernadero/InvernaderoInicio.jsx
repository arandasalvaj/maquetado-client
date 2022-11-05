import axios from "axios"
import {  useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import InvernaderoCrear from "./InvernaderoCrear"
import { IoMdRemoveCircle } from "react-icons/io";
import { getInvernadero } from "../../services/invernadero";
import { IoEyeSharp } from "react-icons/io5";
import Informacion from "../../components/invernadero/InformacionRendimiento";
import Indicadores from "../../components/invernadero/IndicadoresPromedio";


const InvernaderoInicio = () => {
  const [showModal, setShowModal] = useState(false);
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  
  /**
   * Mostrar Errores
   */
  const [messageError , setMessageError]= useState([])
  const [showError , setShowError]= useState(false)

  const [invernadero,setInvernadero] = useState([])
  const [nombre,setNombre] = useState([])
  const [indexInv,setIndexInv] = useState([])
  const [loader,setLoader] = useState(true)
  const navigate = useNavigate()

//{invernaderos.map(invernadero=>console.log(invernadero.nombre_invernadero))}
//<Link to={'/invernadero'}><IoMdRemoveCircle className='text-red-500 text-3xl'/></Link>

  useEffect(()=>{
    obtenerInvernaderos()
  },[indexInv])
  
  const obtenerInvernaderos = async () =>{
    try{
        await getInvernadero(id_usuario,token,setInvernadero,setMessageError)
        .then((response)=>{
          setLoader(false)
          setShowError(false)
          setInvernadero(response.data)
        })
        .catch((error)=>{
          if(error.response.status === 404 ){
            setShowError(true)
            setLoader(false)
            setMessageError(error.response.data.message)
            throw error.response.data.message
          }
        })
      }catch(error) {
        console.log(error)
        // throw error
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
          <button
            className="text-white"
            type="button"
            onClick={() => {setShowModal(true)
              setNombre(data.nombre_invernadero)
              setIndexInv(data.id_invernadero)
            }}
          >
            <IoMdRemoveCircle className="text-3xl text-red-600" />
          </button>
          <button onClick={()=>{navigate(`/invernadero`)}}>
            <IoEyeSharp className='text-3xl text-blue-400' />
          </button>
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
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Invernaderos</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea invernaderos y editalos aqui</p>
            </div>
            <Link to={'/invernadero/crear'} element={<InvernaderoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear invernadero</Link>
        </div>
    </main>
    <Indicadores/>
    <Informacion/>

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

    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Eliminar Invernadero
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  ¿Estás seguro que deseas eliminar el invernadero de {nombre} ?
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=>{
                      setShowModal(false)
                      axios.delete(`${url}api/usuarios/${id_usuario}/invernaderos/${indexInv}`)  
                      .then((res) => {
                        setIndexInv(0)
                      }) 
                    }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null
    }
    
  </>
  )
}

export default InvernaderoInicio