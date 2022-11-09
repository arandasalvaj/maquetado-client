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
      setValue("nombreCultivo",'')
      setValue('cantidadCamas','')
      setValue('idInvernadero','')
      setValue("ambienteMaxima",'')
      setValue('ambienteMinima','')
      setValue('aguaMaxima','')
      setValue("aguaMinima",'')
      setValue('humedadMaxima','')
      setValue('humedadMinima','')
      setValue('coDosMinimo','')
      setValue('coDosMaximo','')
      setFocus('nombreCultivo')
    }


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
                <input  {...register("aguaMaxima", {required:true})} className="shadow appearance-none border rounded w-[432px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura maxima"/>
                {errors.aguaMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
              </div>
              <div className='flex flex-col text-[#505568] w-full '>
                <label className='py-2 text-[#406343] font-bold'>Invernadero</label>
                <select {...register("idInvernadero", {required:true}, )} class="form-select w-full py-2 px-3 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white" aria-label="Default select example">
                      <option selected>Selecciona el invernadero</option>
                      <option value="1">One</option>
                </select>
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
                <input  {...register("coDosMaximo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Co2 maximo"/>
                {errors.coDosMaximo?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nivel de Co2 es requerido</p>}
              </div>
              <div className='flex flex-col text-[#505568]  w-full'>
                <label className='py-2 text-[#406343] font-bold'>Minima</label>
                <input  {...register("coDosMinimo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Co2 minimo"/>
                {errors.coDosMinimo?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nivel de Co2 es requerido</p>}
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
              <input  {...register("aguaMaxima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura maxima"/>
              {errors.aguaMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
            </div>
            <div className='flex flex-col text-[#505568] w-full'>
              <label className='py-2 text-[#406343] font-bold'>Minima</label>
              <input  {...register("aguaMinima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Temperatura minima"/>
              {errors.aguaMinima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El temperatura es requerida</p>}
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
                <input  {...register("humedadMaxima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad maxima"/>
                {errors.humedadMaxima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El porcentaje de humedad es requerido</p>}
              </div>
              <div className='flex flex-col text-[#505568]  w-full'>
                <label className='py-2 text-[#406343] font-bold'>Minima</label>
                <input  {...register("humedadMinima", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Humedad minima"/>
                {errors.humedadMinima?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El porcentaje de humedad es requerido</p>}
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
                <label className='py-2 text-[#406343] font-bold '>Maxima</label>
                <input  {...register("coDosMaximo", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Co2 maximo"/>
                {errors.coDosMaximo?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nivel de Co2 es requerido</p>}
              </div>
              <div className='flex flex-col text-[#505568]  w-full'>
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
    </>
  )
}

export default CultivoCrear