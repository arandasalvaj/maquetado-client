import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../../assets/portada.jpg'
import axios from "axios"
import { useForm } from "react-hook-form";
import { addUser } from '../../services/user';

const Register = () => {
    const { register, handleSubmit, formState: { errors } ,setValue,setFocus } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        addUser(data).then((response) =>{
            console.log(response)
            navigate('/login')
        })
        .catch((error)=>{

            //const { data:{message}} = error.response
            //mensaje(message)
        })
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-200 flex flex-col justify-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Registro</h2>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3 pt-3'>Nombre</label>
                    <input {...register("nombre", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Nombre" />
                </div>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3'>Apellido</label>
                    <input {...register("apellido", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Apellido" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Rut</label>
                    <input {...register("rut", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rut" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Correo</label>
                    <input {...register("email", {required:true})} type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Contraseña</label>
                    <input {...register("password", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                
                </div>
                <button  type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Registrarse</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      ¿Ya tienes una cuenta?  
                      <Link to={'/login'} className="font-medium  hover:underline text-[#406343]"> Inicia aqui</Link>
                      
                    </p>
            </form>
            
        </div>
    </div>
  )
}

export default Register