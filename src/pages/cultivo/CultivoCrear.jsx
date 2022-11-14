import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addCultivo } from '../../services/cultivo';
import { getAllSelect } from '../../services/invernadero';

const CultivoCrear = () => {
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus } = useForm();
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const [invernaderos, setInvernaderos] = useState([])

  const [estadoSelect, setEstadoSelect] = useState(true)

  useEffect(()=>{
    getAllSelect(id_usuario,token)
    .then((response)=>{
      setEstadoSelect(false)
      setInvernaderos(response.data) 
    }).catch((error)=>{
      console.log(error.response.status )
      if(error.response.status === 404){
        
        setEstadoSelect(true)
      }
    })
    
  },[])

    const onSubmit=(data)=>{
      console.log(data)
      addCultivo(data,data?.id_invernadero,token)
      .then((response)=>{
        console.log(response)
        if(response.status===200){navigate(`../${response.data.id_cultivo}`)}
      })
      .catch((error)=>{
        console.log(error)
        const {status, data:{message}} = error.response
        mensaje(message,status)
      })
    }

    const vaciarInput = ()=>{
      setValue("nombre_cultivo",'')
      setValue('temperatura_ambiente_max','')
      setValue('temperatura_ambiente_min','')
      setValue("temperatura_agua_max",'')
      setValue('temperatura_agua_min','')
      setValue('humedad_ambiente_max','')
      setValue("humedad_ambiente_min",'')
      setValue('ppm_gas_max','')
      setValue('ppm_gas_min','')
      setFocus('nombre_cultivo')
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

    const alert = () =>{
      return (
        <div role="alert" className='mx-28'>
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">
            Importante
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>No tiene invernaderos disponibles para asignar un cultivo, registre un invernadero y vuelva a intentarlo.</p>
          </div>
        </div>
      )
    }

    const formCultivo = () =>{
      return (
        <>
        
          <h1 className='text-5xl font-semibold text-center py-10'>Registro de cultivo</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center grid-flow-cols-dense'>
            <div className='shadow-lg mt-5 mx-2 rounded-lg bg-white border-b border-gray-300'>
            <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
              <h1 className='text-xl font-semibold'>Información General</h1>
            </div>
                {/*Contenido*/}
                <div className='grid grid-cols-1 md:grid-cols-1 gap-4 p-4 grid-flow-row '>
                  <div className='flex flex-col text-[#505568] w-full '>
                    <label className='py-2 text-[#406343] font-bold'>Nombre</label>
                      <input  {...register("nombre_cultivo", {required:true})} className="shadow appearance-none border rounded w-[432px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nombre del cultivo"/>
                    {errors.aguaMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                  </div>
                  <div className='flex flex-col text-[#505568] w-full '>
                    <label className='py-2 text-[#406343] font-bold'>Invernadero</label>
                      <select {...register("id_invernadero", {required:true}, )} className="form-select w-full py-2 px-3 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                          focus:text-gray-700 focus:bg-white" >
                            {invernaderos ? invernaderos.map((data,index)=>{return <option key={index} value={data?.id_invernadero}>{data?.nombre_invernadero}</option>}) :<option selected>No tienes invernaderos disponibles</option>}
                      </select>
                    {errors.id_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El invernadero es requerido</p>}
                  </div>
                </div>
            </div>
    
            <div className='shadow-lg  mt-5  mx-2 rounded-lg bg-white border-b border-gray-300'>
              <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
                <h1 className='text-xl font-semibold'>Temperatura del Ambiente</h1>
              </div>
                {/*Contenido*/}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold '>Maxima</label>
                    <input  {...register("temperatura_ambiente_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ambiente maxima"/>
                    {errors.temperatura_ambiente_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ambiente maxima es requerida</p>}
                  </div>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold'>Minima</label>
                    <input  {...register("temperatura_ambiente_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ambiente maxima"/>
                    {errors.temperatura_ambiente_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ambiente minima es requerida</p>}
                  </div>
                </div>
            </div>
    
            <div className='shadow-lg  mt-5  mx-2 rounded-lg bg-white border-b border-gray-300'>
              <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
                <h1 className='text-xl font-semibold'>Temperatura de Agua</h1>
              </div>
                {/*Contenido*/}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                <div className='flex flex-col text-[#505568]  w-full'>
                  <label className='py-2 text-[#406343] font-bold'>Maxima</label>
                  <input  {...register("temperatura_agua_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Agua maxima"/>
                  {errors.temperatura_agua_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La agua maxima es requerida</p>}
                </div>
                <div className='flex flex-col text-[#505568] w-full'>
                  <label className='py-2 text-[#406343] font-bold'>Minima</label>
                  <input  {...register("temperatura_agua_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Agua minima"/>
                  {errors.temperatura_agua_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La agua minima es requerida</p>}
                </div>
              </div>
            </div>
    
            <div className='shadow-lg  mt-5  mx-2 rounded-lg bg-white border-b border-gray-300'>
              <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
                <h1 className='text-xl font-semibold'>Porcentaje de Humedad</h1>
              </div>
                {/*Contenido*/}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold'>Maxima</label>
                    <input  {...register("humedad_ambiente_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad maxima"/>
                    {errors.humedad_ambiente_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El humedad maximo es requerido</p>}
                  </div>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold'>Minima</label>
                    <input  {...register("humedad_ambiente_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad minima"/>
                    {errors.humedad_ambiente_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El humedad minimo es requerido</p>}
                  </div>
                </div>
            </div>
    
            <div className='shadow-lg  mt-5  mx-2 rounded-lg bg-white border-b border-gray-300'>
              <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
                <h1 className='text-xl font-semibold'>Nivel de Co2</h1>
              </div>
                {/*Contenido*/}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold '>Maximo</label>
                    <input  {...register("ppm_gas_max", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nivel de Co2 maximo"/>
                    {errors.ppm_gas_max?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Co2 maximo es requerido</p>}
                  </div>
                  <div className='flex flex-col text-[#505568]  w-full'>
                    <label className='py-2 text-[#406343] font-bold'>Minimo</label>
                    <input  {...register("ppm_gas_min", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nivel de Co2 minimo"/>
                    {errors.ppm_gas_min?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Co2 minimo es requerido</p>}
                  </div>
                </div>
            </div>
    
            <div className='flex justify-center items-center pt-5 gap-16'>
              <button  type='submit' className='w-[250px] my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
              <button  onClick={vaciarInput} className='w-[250px] my-5 py-2 bg-red-500 hover:bg-red-600 shadow-lg text-white font-semibold rounded-lg' >Vaciar</button>
            </div>
    
          </form>
        </>
      )
    }
//invernaderos.map((data,index)=>{return <option key={index} value={data.id_invernadero}>{data.nombre_invernadero}</option>})
  return (
    <>
    {estadoSelect? alert():formCultivo()}

    </>
  )
}

export default CultivoCrear