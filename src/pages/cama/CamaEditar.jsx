import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoChevronBack } from 'react-icons/io5'

import { getAllCultivosUsuario } from '../../services/cultivo';
import { updateCama, getCama } from '../../services/cama';

const CamaEditar = () => {
  const {idCama}= useParams()
  const { register, handleSubmit, formState: { errors }, setValue ,setFocus} = useForm()
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]
  const [cultivos, setCultivos] = useState([])
  const [estadoSelect,setEstadoSelect]=useState(true)
  const [showQuit,setShowQuit]=useState(false)
  
  useEffect(()=>{
    obtenerCama()
    getAllCultivosUsuario(id_usuario,token)
    .then((response)=>{
      setShowQuit(false)
      setEstadoSelect(false)
      setCultivos(response.data) 
    }).catch((error)=>{
      setShowQuit(true)
      if(error.response.status === 404){
        setEstadoSelect(true)
      }
    })
    
  },[])

  const obtenerCama = () =>{
    getCama(idCama,token)
    .then((response) =>{
      setShowQuit(false)
      setValue("nombre_cama",response.data[0].nombre_cama)
      setValue("tamano_cama",response.data[0].tamano_cama)
      setValue("brotes_cama",response.data[0].brotes_cama)
      setValue("id_cultivo",response.data[0].nombre_cultivo)
    })
    .catch((error)=>{
      setShowQuit(true)
      if(error.response.status === 404 ){
        throw error.response.data.message
      }
      if(error.response.status === 409 ){
        throw error.response.data.message
      }
    })
  }
  
    const onSubmit=(data)=>{
      updateCama(data,idCama,token)
      .then((response) =>{
        toast.success('CAMA ACTUALIZADA', {
          position: toast.POSITION.BOTTOM_CENTER
        })
        const interval = setInterval(() => {
          navigate('/cama')
          clearInterval(interval)
        }, 4000)
      })
      .catch((error)=>{
        if(error.response.status === 404 ){
          throw error.response.data.message
        }
        if(error.response.status === 409 ){
          throw error.response.data.message
        }
      })
    }


    const formActualizar = () =>{
      return (
        <>
          <div className='flex flex-col justify-center items-center '>
            <h1 className='text-5xl font-semibold text-center pb-20'>Actualizar Cama</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='rounded-xl bg-white border border-gray-300 mb-5'>
                  <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
                    <h1 className='text-xl font-semibold text-center'>Información general</h1>
                  </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                      <div className='flex flex-col text-[#505568] col-span-2'>
                          <label className='py-2 text-gray-600 font-bold'>Nombre</label>
                          <input  {...register("nombre_cama", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "  type="text" placeholder="Ingrese nombre"/>
                          {errors.nombre_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                      </div>
                      <div className='flex flex-col text-[#505568] col-span-1'>
                          <label className='py-2 text-gray-600 font-bold'>Tamaño de la cama (m²)</label>
                          <input  {...register("tamano_cama", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese tamaño"/>
                          {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                      </div>
                      <div className='flex flex-col text-[#505568] col-span-1'>
                          <label className='py-2 text-gray-600 font-bold'>Cantidad de brotes</label>
                          <input  {...register("brotes_cama", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "  type="text" placeholder="Ingrese nombre"/>
                          {errors.nombre_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                      </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                      <div className='flex flex-col text-[#505568] col-span-2'>
                          <label className='py-2 text-gray-600 font-bold'>Cultivo</label>
                            <select {...register("id_cultivo", {required:true})} className="form-select w-full py-2 px-3 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white" >
                              {cultivos ? cultivos.map((data,index)=>{return <option key={index} value={data.id_cultivo}>{data.nombre_cultivo}</option>}) :<option selected>No tienes invernaderos disponibles</option>}
                            </select>
                          {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                      </div>
                    </div>
                  <div className='flex justify-center gap-16 pl-10'>
                    <button  type='submit' className='w-full my-5 py-2 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Actualizar</button>
                    <ToastContainer />
                  </div>
                </div>
              </form>
          </div>
        </>
      )
    }



  return (
    <>
      <div className=' grid grid-cols-12'> 
        <div className='col-span-2 flex pl-16'>
          <Link to={`../`} className=' bg-white border-2 border-gray-300 rounded-full py-2 px-2 plex justify-center items-center' >
            <IoChevronBack className='w-10 h-10 text-gray-500 '/>
          </Link>
        </div>
      </div>
      {console.log(showQuit)}
      {showQuit? <h1>Esta cama ya no existe.</h1>:formActualizar()}
    </>
  )
}

export default CamaEditar