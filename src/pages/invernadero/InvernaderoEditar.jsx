import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getInvernadero, updateInvernadero } from '../../services/invernadero';
import { UserContext } from '../../context/UserContext'
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import moment from 'moment'

const InvernaderoEditar = () => {
  const {idInvernadero}= useParams()
  const {token} = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus,watch } = useForm();
  const navigate = useNavigate()

  useEffect(()=>{
    obtenerInvernadero()

  },[])

  const obtenerInvernadero = () =>{
    getInvernadero(idInvernadero,token)
    .then((response) =>{
      setValue("nombre_invernadero",response.data.nombre_invernadero)
      setValue("tamano_invernadero",response.data.tamano_invernadero)
      setValue("ubicacion_invernadero",response.data.ubicacion_invernadero)
      setValue("inicio_temporada",moment(response.data.inicio_temporada).format("YYYY-MM-DD"))
      setValue("termino_temporada",moment(response.data.termino_temporada).format("YYYY-MM-DD"))
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

    const onSubmit=(data)=>{
      updateInvernadero(data,idInvernadero,token)
      .then((response) =>{
        toast.success('INVERNADERO ACTUALIZADO', {
          position: toast.POSITION.TOP_CENTER,
          autoClose:2000,
          theme: "colored",
        })
        const interval = setInterval(() => {
          navigate('/invernadero')
          clearInterval(interval)
        }, 2000)
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
                    <span className="text-lg font-medium text-gray-600 md:ml-2">Editar</span>
                </div>
                </li>
            </ol>
          </nav>
        </div>
      </div>

    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-semibold text-center py-10'>Editar Invernadero</h1>
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
                    <input  {...register("tamano_invernadero", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="number" placeholder="Ingrese tamaño"/>
                    {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                </div>
              </div>
              <div className='flex flex-col text-[#505568] col-span-2 px-4'>
              <label className='py-2 text-[#406343] font-bold'>Dirección</label>
                  <input {...register("ubicacion_invernadero")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese dirección"/>
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La dirección es requerida</p>}
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
              <button  type='submit' className='w-[250px] my-5 py-2 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Editar</button>
              <Link to={`../`} className='w-[250px] my-5 py-2 bg-red-600 shadow-lg text-white font-semibold rounded-lg text-center' >Cancelar</Link>
              <ToastContainer />
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default InvernaderoEditar