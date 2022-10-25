import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CultivoCrear = () => {
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus } = useForm();
  const navigate = useNavigate()
  
    const onSubmit=()=>{
      axios.get("https://www.tuinvernadero.xyz/api/auth/login")
      .then((response) =>{
      //px-20 py-5   <ListadoCultvos/>  
          navigate('/dashboard/inicio')
      })
      .catch((error)=>{
          const {status, data:{message}} = error.response
          mensaje(message,status)
      })
    }

    const vaciarInput = ()=>{
      setValue("nombre",'')
      setValue('tamano','')
      setValue('ubicacion','')
      setValue("ambienteMaxima",'')
      setValue('ambienteMinima','')
      setValue('aguaMaxima','')
      setValue("aguaMinima",'')
      setValue('humedadMaxima','')
      setValue('humedadMinima','')
      setValue('coDosMinimo','')
      setValue('coDosMaximo','')
      setFocus('nombre')
    }


  return (
    <div className='grid'>
      <h1 className='text-5xl font-semibold text-center py-10'>Cultivos</h1>

    <div className='grid justify-center rounded-lg shadow-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='rounded-xl bg-white border border-gray-300 mb-5'>
        <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
          <h1 className='text-xl font-semibold'>Información general</h1>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4 grid-flow-row'>
            <div className='flex flex-col text-[#505568] col-span-2'>
                <label className='py-2 text-[#406343] font-bold'>Nombre</label>
                <input  {...register("nombre", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nombre"/>
                {errors.nombre?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
            </div>
            <div className='flex flex-col text-[#505568] col-span-2'>
                <label className='py-2 text-[#406343] font-bold'>Tamaño</label>
                <input  {...register("tamano", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Tamaño"/>
                {errors.tamano?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
            </div>
          </div>
          <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
            <label className='py-2 text-[#406343] font-bold'>Ubicacion</label>
            <input  {...register("ubicacion", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ubicación"/>
            {errors.ubicacion?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ubicación es requerida</p>}
          </div>
      </div>

      <div className='rounded-xl bg-white border border-gray-300 mb-5'>
        <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
          <h1 className='text-xl font-semibold '>Temperatura del Ambiente</h1>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
            <div className='flex flex-col text-[#505568] py-2 w-full '>
              <label className='py-2 text-[#406343] font-bold'>Maxima</label>
              <input  {...register("ambienteMaxima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura maxima"/>
              {errors.ambienteMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
            </div>
            <div className='flex flex-col text-[#505568] py-2 w-full'>
              <label className='py-2 text-[#406343] font-bold'>Minima</label>
              <input  {...register("ambienteMinima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura minima"/>
              {errors.ambienteMinima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
            </div>
          </div>
      </div>
      
      <div className='rounded-xl bg-white border border-gray-300 mb-5'>
        <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
          <h1 className='text-xl font-semibold '>Temperatura de Agua</h1>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
            <div className='flex flex-col text-[#505568] py-2 w-full'>
              <label className='py-2 text-[#406343] font-bold'>Maxima</label>
              <input  {...register("aguaMaxima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura maxima"/>
              {errors.aguaMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
            </div>
            <div className='flex flex-col text-[#505568] py-2 w-full'>
              <label className='py-2 text-[#406343] font-bold'>Minima</label>
              <input  {...register("aguaMinima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura minima"/>
              {errors.aguaMinima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
            </div>
          </div>
        </div>

        <div className='rounded-xl bg-white border border-gray-300 mb-5'>
          <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
            <h1 className='text-xl font-semibold '>Porcentaje de Humedad</h1>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
              <div className='flex flex-col text-[#505568] py-2 w-full'>
                <label className='py-2 text-[#406343] font-bold'>Maxima</label>
                <input  {...register("humedadMaxima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad maxima"/>
                {errors.humedadMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El porcentaje de humedad es requerido</p>}
              </div>
              <div className='flex flex-col text-[#505568] py-2 w-full'>
                <label className='py-2 text-[#406343] font-bold'>Minima</label>
                <input  {...register("humedadMinima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad minima"/>
                {errors.humedadMinima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El porcentaje de humedad es requerido</p>}
              </div>
            </div>
          </div>

          <div className='rounded-xl bg-white border border-gray-300'>
            <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
              <h1 className='text-xl font-semibold '>Niveles de Co2</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 grid-flow-row'>
              <div className='flex flex-col text-[#505568] py-2 w-full'>
                <label className='py-2 text-[#406343] font-bold '>Maxima</label>
                <input  {...register("coDosMaximo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Co2 maximo"/>
                {errors.coDosMaximo?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nivel de Co2 es requerido</p>}
              </div>
              <div className='flex flex-col text-[#505568] py-2 w-full'>
                <label className='py-2 text-[#406343] font-bold'>Minima</label>
                <input  {...register("coDosMinimo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Co2 minimo"/>
                {errors.coDosMinimo?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nivel de Co2 es requerido</p>}
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center pt-5 gap-16'>
            <button  type='submit' className='w-[250px] my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
            <button  onClick={vaciarInput} className='w-[250px] my-5 py-2 bg-red-500 hover:bg-red-600 shadow-lg text-white font-semibold rounded-lg' >Vaciar</button>
          </div>
        </form>
    </div>
  </div>
  )
}

export default CultivoCrear