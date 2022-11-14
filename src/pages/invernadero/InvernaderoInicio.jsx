import {  useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom"

import { getAllInvernaderos } from "../../services/invernadero";
import { deleteUser } from "../../services/user";
import IndicadoresPromedio from "../../components/invernadero/IndicadoresPromedio";
import InformacionRendimiento from "../../components/invernadero/InformacionRendimiento";
import { getInvernadero } from '../../services/invernadero'


const InvernaderoInicio = () => {
  const [showModal, setShowModal] = useState(false);
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)

  /**
   * Mostrar Errores
   */

  const [invernaderoSolo,setInvernaderoSolo] = useState([])
  const [invernaderoId,setInvernaderoId] = useState([])
  const [nombre,setNombre] = useState([])
  const [indexInv,setIndexInv] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    obtenerInvernaderos()
  },[indexInv])
  
  const obtenerInvernadero = () =>{
    getInvernadero(id_usuario,invernaderoId)
    .then((response)=>{
      setInvernaderoSolo(response.data)
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
                      deleteUser(id_usuario,indexInv)  
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