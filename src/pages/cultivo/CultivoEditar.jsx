import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addCultivo, getCultivoFind, updateCultivo } from '../../services/cultivo';
import { getAllSelect } from '../../services/invernadero';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'

const CultivoEditar = () => {
  const {idCultivo} = useParams()
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus,watch } = useForm();
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const [nuevoSelect, setNuevoSelect] = useState([])
  //const [estadoSelect, setEstadoSelect] = useState(true)
  const [cultivo,setCultivo] = useState([])

  useEffect(()=>{
    obtenerCultivo()

    //obtenerSelectInvernaderos()
    
  },[])

  // const obtenerSelectInvernaderos=()=>{
  //   getAllSelect(id_usuario,token)
  //   .then((response)=>{
  //     setEstadoSelect(false)
  //   }).catch((error)=>{
  //     if(error.response.status === 404){
  //       setEstadoSelect(true)
  //     }
  //   })
  // }

  const obtenerCultivo=()=>{
    getCultivoFind(idCultivo,token)
    .then((response)=>{
      setCultivo(response.data)
      setValue("nombre_cultivo",response.data.nombre_cultivo)
      setValue("temperatura_ambiente_max",response.data.temperatura_ambiente_max)
      setValue("temperatura_ambiente_min",response.data.temperatura_ambiente_min)
      setValue("temperatura_agua_max",response.data.temperatura_agua_max)
      setValue("temperatura_agua_min",response.data.temperatura_agua_min)
      setValue("humedad_ambiente_max",response.data.humedad_ambiente_max)
      setValue("humedad_ambiente_min",response.data.humedad_ambiente_min)
      setValue("ppm_gas_max",response.data.ppm_gas_max)
      setValue("ppm_gas_min",response.data.ppm_gas_min)
    })
    .catch((error)=>{
      if(error.response.status === 404){
        //setEstadoSelect(true)
      }
    })
  }


    const onSubmit=(data)=>{
      updateCultivo(data,idCultivo,token)
      .then((response)=>{
        toast.success('CULTIVO ACTUALIZADO', {
          position: toast.POSITION.TOP_CENTER,
          autoClose:2000,
          theme: "colored",
        })
        const interval = setInterval(() => {
          navigate('/cultivo')
          clearInterval(interval)
        }, 2000)
      })
      .catch((error)=>{
        const {status, data:{message}} = error.response
        mensaje(message,status)
      })
    }

    const select = () =>{
      return (
        <div className='flex flex-col text-[#505568] w-full '>
        <label className='py-2 text-[#406343] font-bold'>Invernadero</label>
        <select {...register("id_invernadero", {required:true}, )} className="form-select w-full py-2 px-3 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white" >
              {invernaderos ? invernaderos.map((data,index)=>{return <option key={index} value={data?.id_invernadero}>{data?.nombre_invernadero}</option>}) :<option selected>No tienes invernaderos disponibles</option>}
        </select>
        {errors.id_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El invernadero es requerido</p>}
      </div>
      )
    }

    const formCultivo = () =>{
      return (
        <>
          <h1 className='text-5xl font-semibold text-center py-10'>Editar cultivo</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center grid-flow-cols-dense pb-20'>
            <div className='shadow-lg mt-5 mx-2 rounded-lg bg-white border-b border-gray-300'>
              <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
                <h1 className='text-xl font-semibold text-center'>Información General</h1>
              </div>
                  <div className='grid grid-cols-1 md:grid-cols-1 gap-4 p-4 grid-flow-row '>
                    <div className='flex flex-col text-[#505568] w-full '>
                      <label className='py-2 text-gray-600 font-bold'>Nombre</label>
                        <input  {...register("nombre_cultivo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nombre del cultivo"/>
                      {errors.aguaMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                    </div>
                  </div>
                  <div className='mx-36 border-b-4 '>
                    <h1 className='text-xl font-semibold pt-4 pb-2 text-center'>Temperatura del Ambiente</h1>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold '>Máxima</label>
                      <input  {...register("temperatura_ambiente_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ambiente maxima"/>
                      {errors.temperatura_ambiente_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ambiente maxima es requerida</p>}
                    </div>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold'>Mínima</label>
                      <input  {...register("temperatura_ambiente_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ambiente maxima"/>
                      {errors.temperatura_ambiente_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ambiente minima es requerida</p>}
                    </div>
                  </div>
                  <div className='mx-36 border-b-4 '>
                    <h1 className='text-xl font-semibold pt-4 pb-2 text-center'>Temperatura de Agua</h1>
                  </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-gray-600 font-bold'>Máxima</label>
                    <input  {...register("temperatura_agua_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Agua maxima"/>
                    {errors.temperatura_agua_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La agua maxima es requerida</p>}
                  </div>
                  <div className='flex flex-col text-[#505568] w-full'>
                    <label className='py-2 text-gray-600 font-bold'>Mínima</label>
                    <input  {...register("temperatura_agua_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Agua minima"/>
                    {errors.temperatura_agua_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La agua minima es requerida</p>}
                  </div>
                </div>
                  <div className='mx-36 border-b-4 '>
                    <h1 className='text-xl font-semibold pt-4 pb-2 text-center'>Porcentaje de Humedad</h1>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold'>Máxima</label>
                      <input  {...register("humedad_ambiente_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad maxima"/>
                      {errors.humedad_ambiente_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El humedad maximo es requerido</p>}
                    </div>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold'>Mínima</label>
                      <input  {...register("humedad_ambiente_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad minima"/>
                      {errors.humedad_ambiente_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El humedad minimo es requerido</p>}
                    </div>
                  </div>
                  
                  <div className='mx-48 border-b-4 '>
                    <h1 className='text-xl font-semibold  pt-4 pb-2 text-center'>Nivel de Co2</h1>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold '>Máximo</label>
                      <input  {...register("ppm_gas_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nivel de Co2 maximo"/>
                      {errors.ppm_gas_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Co2 maximo es requerido</p>}
                    </div>
                    <div className='flex flex-col text-[#505568]  w-full'>
                      <label className='py-2 text-gray-600 font-bold'>Mínimo</label>
                      <input  {...register("ppm_gas_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nivel de Co2 minimo"/>
                      {errors.ppm_gas_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Co2 minimo es requerido</p>}
                    </div>
                  </div>
              <div className='flex justify-center items-center px-6 gap-6'>
                <button  type='submit' className='w-[250px] my-5 py-2 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Editar</button>
                <Link to={`../`} className='w-[250px] my-5 py-2 bg-red-600 shadow-lg text-white font-semibold rounded-lg text-center' >Cancelar</Link>
              </div>
                <ToastContainer />
            </div>
          </form>
        </>
      )
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
                        Cultivo
                    </Link>
                </li>
                <li>
                <div className="flex items-center">
                    <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                    <span className="text-lg font-medium text-gray-600 md:ml-2">Editar</span>
                </div>
                </li>
            </ol>
          </nav>
        </div>
      </div>
    {formCultivo()}
    </>
  )
}

export default CultivoEditar