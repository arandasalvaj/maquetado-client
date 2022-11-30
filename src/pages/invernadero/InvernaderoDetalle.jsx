import React, { useContext, useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCultivos } from '../../services/cultivo';
import { getInvernadero } from '../../services/invernadero';
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../context/UserContext';
import moment from 'moment'


const InvernaderoDetalle = () => {
    const {token,setMessageError,setCounterRender} = useContext(UserContext)
    
    const {idInvernadero} = useParams()
    const [invernadero,setInvernadero] = useState([])
    const [onlyCultivo,setOnlyCultivo] = useState([])

    useEffect(()=>{
        obtenerInvernadero()
        obtenerCultivo()
      },[])

    const obtenerInvernadero = () =>{
        getInvernadero(idInvernadero,token)
        .then((response)=>{
            setInvernadero(response.data)
        })
        .catch((error)=>{
          setMessageError(error.response.data.message)
        })
    }

    const obtenerCultivo = async () =>{
      try{
        setCounterRender(0)
        getAllCultivos(idInvernadero,token)
        .then((response)=>{
          setOnlyCultivo(response.data)
        })
        .catch((error)=>{
          setMessageError(error.response.data.message)
        })
        }catch(error) {
          throw error
        }
    }

    //https://i.ibb.co/w0myntm/IMAGEN-HRIDRO-JAJAJAJA.png
    const estadoInvernadero = (estado) =>{
      switch (estado) {
      case 0:
          return <h1 className='bg-red-600 px-4 rounded-xl text-white font-semibold'>Desactivado</h1>
      case 1:
          return <h1 className='bg-yellow-500 px-4 rounded-xl text-white font-semibold'>Proceso</h1>
      case 2:
          return <h1 className="bg-green-600 px-4 rounded-xl text-white font-semibold">Activado</h1>
      default:
          break;
      }
  }
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
                <h1 className='text-3sm font-semibold text-gray-500'>Puedes ver el detalle de tu invernadero aquí</h1>
            </div>
        </div>
      </main>

      <div className="grid grid-rows-3 grid-flow-col gap-3 px-28">


        <div className="row-span-1 sm:row-span-3">
          <div className="p-4 rounded-xl bg-gray-200">
            <div className='rounded-full bg-white'>
              <img className="w-200 h-100 object-cover"src="https://i.ibb.co/TwZY9Gy/invernadero-HD-INVER.png"alt=""/>
            </div>

            <div className="py-16 sm:py-4">
              <div className='py-2'>
                <h1 className='text-3xl text-gray-900 font-bold text-center'>Nombre de Invernadero</h1>
                <h1 className='text-xl text-black font-semibold text-center'>{invernadero.nombre_invernadero}</h1>
              </div>

              <div className='py-2'>
                <h1 className='text-3xl text-gray-900 font-bold text-center'>Fecha de creación</h1>
                <h1 className='text-xl text-black font-semibold text-center'>{moment(invernadero.created_at).format('YYYY-MM-DD')}</h1>
              </div>

              <div className='py-2'>
                <h1 className='text-3xl text-gray-900 font-bold text-center'>Ubicación</h1>
                <h1 className='text-xl text-black font-semibold text-center'>{invernadero.ubicacion_invernadero}</h1>
              </div>

              <div className='py-2'>
                <h1 className='text-3xl text-gray-900 font-bold text-center'>Nombre de Cultivo</h1>
                <h1 className='text-xl text-black font-semibold text-center'>{onlyCultivo.length === 0 ? "No hay cultivo asignado":onlyCultivo.nombre_cultivo}</h1>
              </div>

            </div>  
          </div>
        </div>


        <div className="col-span-1 sm:col-span-2">
          <div className="col-span-3 rounded-xl bg-gray-200">
            <div className=" grid grid-cols-2 gap-4 p-4 grid-flow-cols-dense border-2 rounded-xl bg-gray-200">
              <div className=' flex flex-col gap-4'>
                <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
                    <div className="flex items-end gap-3 ">
                        <div>
                            <div className='flex flex-col gap-2 p-2'>
                                <h1 className="text-xl text-black-500 font-bold text-center">Inicio de Temporada</h1>
                                <h1 className='text-center text-[40px] font-semibold'>
                                    {moment(invernadero.inicio_temporada).format('YYYY-MM-DD')}
                                </h1>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                    <div className="flex items-end gap-3 ">
                        <div>
                            <div className='flex flex-col gap-2 p-2'>
                                <h1 className="text-xl text-black-500 font-bold text-center">Término de Temporada</h1>
                                <h1 className='text-center  text-[40px] font-semibold'>
                                    {moment(invernadero.termino_temporada).format('YYYY-MM-DD')}
                                </h1>
                            </div>
                        </div>
                    </div> 
                </div>
              </div>
              <div className=' flex flex-col gap-4'>
                <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
                    <div className="flex items-end gap-3 ">
                        <div>
                            <div className='flex flex-col gap-2 p-2'>
                                <h1 className="text-xl text-black-500 font-bold text-center">Tamaño</h1>
                                    <h1 className='text-center text-[40px] font-semibold'>
                                        {invernadero.tamano_invernadero} m²
                                    </h1>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                    <div className="flex items-end gap-3 ">
                        <div>
                            <div className='flex flex-col gap-2 p-2'>
                                <h1 className="text-xl text-black-500 font-bold text-center">Estado</h1>
                                <h1 className='text-center text-[25px] font-semibold p-3'>
                                    {estadoInvernadero(invernadero.estado_invernadero )}
                                </h1>
                            </div>
                        </div>
                    </div> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-1 sm:row-span-2">
          <div className=" grid rounded-xl bg-gray-200 ">
            <div className="google-map-code rounded-lg shadow-sm col-span-3 row-span-4 flex items-center p-4">
              <iframe src="https://maps.google.com/maps?q=calama&t=&z=15&ie=UTF8&iwloc=&output=embed" width="850" height="443" frameBorder="0" style={{border:0}} className='rounded-lg' allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
        </div>


        
      </div>
    </>
  )
}

export default InvernaderoDetalle