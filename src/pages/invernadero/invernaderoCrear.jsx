import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInvernadero } from '../../services/invernadero';
import InvernaderoListado from './InvernaderoListado';
import { IoChevronBack } from 'react-icons/io5'
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'

const InvernaderoCrear = () => {
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus,watch } = useForm();
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];


  const [value, setValues] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [coordenadas,setCoordenadas] = useState({lat:-22.441183,long:-68.90638})


  const handleChange = async (event) => {
    setValues(event.target.value);

  }
    const onSubmit=(data)=>{
      delete data.ubicacion_invernadero
      const nuevaDireccion = watch("ubicacion_invernadero")
      
      data.ubicacion_invernadero = nuevaDireccion
      addInvernadero(data,id_usuario,token)
      .then((response) =>{
        toast.success('Invernadero creado', {
          position: toast.POSITION.TOP_CENTER
        })
        const interval = setInterval(() => {
          navigate('/invernadero')
          clearInterval(interval)
        }, 4000)
      })
      .catch((error)=>{
        setShowError(true)
        setLoader(false)
        if(error.response.status === 404 ){
          setMessageError(error.response.data.message)
          throw error.response.data.message
        }
        if(error.response.status === 409 ){
          setMessageError(error.response.data.error)
          throw error.response.data.message
        }
      })
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
                    <span className="text-lg font-medium text-gray-600 md:ml-2">Registrar</span>
                </div>
                </li>
            </ol>
          </nav>
        </div>
      </div>

    <div className='flex flex-col justify-center items-center'>

      <h1 className='text-5xl font-semibold text-center py-10'>Registrar Invernadero</h1>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-xl bg-white border border-gray-300 mb-5'>
            <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
              <h1 className='text-xl font-semibold text-center'>Información general</h1>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4 grid-flow-row'>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Nombre</label>
                    <input  {...register("nombre_invernadero", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "  type="text" placeholder="Ingrese nombre"/>
                    {errors.nombre_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                </div>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Tamaño (m²)</label>
                    <input  {...register("tamano_invernadero", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese tamaño"/>
                    {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                </div>
              </div>
              <div className='flex flex-col text-[#505568] col-span-2 px-4'>
              <label className='py-2 text-[#406343] font-bold'>Dirección</label>
                  <input {...register("ubicacion_invernadero")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese dirección" value={value} onChange={handleChange} autoComplete="off"/>
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ubicación es requerida</p>}
                  {suggestions?.length > 0 && (
                      <div className='bg-white w-[400px] py-2 px-4 z-50'>
                          {suggestions.map((suggestion, index) => {
                              return (
                              <div className=' hover:text-gray-900 hover:bg-gray-100  w-max-[400px] cursor-pointer py-2 shadow-orange-300' key={index} onClick={() => { setValues(suggestion.place_name); setSuggestions([]);}}>
                                  {suggestion.place_name}
                              </div>
                              )
                          })}
                      </div>
                  )}
              </div>
              <div className='flex gap-4'>
                <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
                  <label className='py-2 text-[#406343] font-bold'>Inicio de Temporada</label>
                  <input  {...register("inicio_temporada", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" />
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La fecha de Inicio de Temporada es requerida</p>}
                </div>
                <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
                  <label className='py-2 text-[#406343] font-bold'>Término de Temporada</label>
                  <input  {...register("termino_temporada", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" />
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La fecha de Termino de Temporada es requerida</p>}
                </div>
              </div>
            <div className='flex justify-center gap-16 pl-10'>
              <button  type='submit' className='w-[250px] my-5 py-2 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Registrar</button>
              <Link to={`../`} className='w-[250px] my-5 py-2 bg-red-600 shadow-lg text-white font-semibold rounded-lg text-center' >Cancelar</Link>
              <ToastContainer />
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default InvernaderoCrear;
