import React, { useContext, useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import IndicadoresPromedio from "../../components/invernadero/IndicadoresPromedio";
import { getAllCultivos } from '../../services/cultivo';
import { getInvernadero } from '../../services/invernadero';
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import { UserContext } from '../../context/UserContext';

import moment from 'moment'


const InvernaderoInicio = () => {
  const {showModal,setShowModal,token,messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
  
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
    <div className='px-28'>
        <IndicadoresPromedio invernadero={invernadero} />
        <div className=" grid rounded-xl bg-gray-200 my-4 ">
          <div className=" grid grid-cols-4 gap-4 px-4 py-4 grid-flow-cols-dense">
            <div className=" sm:col-span-2 row-span-4 flex items-center justify-center"> 
              <div className="google-map-code rounded-lg shadow-sm  col-span-3 sm:col-span-2 row-span-4 flex items-center justify-center">
                <iframe src="https://maps.google.com/maps?q=calama&t=&z=15&ie=UTF8&iwloc=&output=embed" width="645" height="300" frameborder="0" style={{border:0}} className='rounded-lg' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
            <div className="bg-[#154D80] rounded-lg shadow-sm h-[300px] col-span-3 sm:col-span-2 row-span-4 flex items-center justify-center"> 
                <div className="py-16 sm:py-0">
                  <h1 className='text-4xl text-white font-bold text-center'>{onlyCultivo.nombre_cultivo}</h1>
                  <p className='text-2xl text-white  text-center grid grid-rows-3 font-semibold'>Fecha de creación
                      <span className="font-semibold">{moment(onlyCultivo.created_at).format('DD-MM-YYYY')}</span>
                  </p>
                </div>  
            </div>
          </div>
        </div>
    </div>
  </>
)
}

export default InvernaderoInicio