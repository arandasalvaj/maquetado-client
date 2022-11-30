import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCultivosUsuario } from '../../services/cultivo';
import { addCama } from '../../services/cama';
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'

const CamaCrear = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const [cultivos, setCultivos] = useState([])
  const [estadoSelect,setEstadoSelect]=useState(true)
  
  useEffect(()=>{
    getAllCultivosUsuario(id_usuario,token)
    .then((response)=>{
      setEstadoSelect(false)
      setCultivos(response.data) 
    }).catch((error)=>{
      console.log(error.response.status )
      if(error.response.status === 404){
        setEstadoSelect(true)
      }
    })
    
  },[])

    const onSubmit=(data)=>{
      addCama(data,data.id_cultivo,token)
      .then((response) =>{
        toast.success('CAMA CREADA', {
          position: toast.POSITION.TOP_CENTER,
          autoClose:2000,
          theme: "colored",
        })
        const interval = setInterval(() => {
          navigate('/cama')
          clearInterval(interval)
        }, 2000)
      })
      .catch((error)=>{
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
                      Cama
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
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-5xl font-semibold text-center pb-20'>Registrar Cama</h1>
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
                    <input  {...register("tamano_cama", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="number"  placeholder="Ingrese tamaño"/>
                    {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                </div>
                <div className='flex flex-col text-[#505568] col-span-1'>
                    <label className='py-2 text-gray-600 font-bold'>Cantidad de brotes</label>
                    <input  {...register("brotes_cama", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "  type="number"  placeholder="Ingrese brotes"/>
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
            <div className='flex justify-center gap-16 px-10'>
              <button  type='submit' className='w-[250px] my-5 py-2 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Registrar</button>
              <Link to={`../`} className='w-[250px] my-5 py-2 bg-red-600 shadow-lg text-white font-semibold rounded-lg text-center' >Cancelar</Link>
            </div>
              <ToastContainer />
          </div>
        </form>
    </div>
    </>
  )
}


export default CamaCrear