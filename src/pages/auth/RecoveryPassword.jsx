import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { recoveryPasword } from '../../services/user';

const RecoveryPassword = () => {
    const { register, handleSubmit, formState: { errors } ,setValue,watch,setFocus } = useForm();
    const [mensaje,setMensaje] = useState('')
    const navigate = useNavigate()

    const onSubmit = (data) => {
        setMensaje('')
        recoveryPasword(data)
        .then((response) =>{
            if(response.status === 200){
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                const interval = setInterval(() => {
                    navigate('/')
                    clearInterval(interval)
                }, 6000);
            }
        })
        .catch((error)=>{
            if(error.response.status === 401){
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                const interval = setInterval(() => {
                    navigate('/')
                    clearInterval(interval)
                }, 6000);
            }else{
                messageError(error.response.data.message)     
            }
        })
    }

    const messageError = (msj) =>{
        setMensaje(msj) 
        setValue("email_usuario", "")
        setFocus ('email_usuario')
    }
    useEffect(()=>{setFocus("email_usuario")},[])
  return (
    <div className='bg-gray-200 grid grid-cols-1 h-screen w-full justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] mx-auto rounded-lg bg-white p-8 px-8'>
            <h2 className='text-3xl text-[#505568] font-bold text-center pb-3'>Recuperar cuenta</h2>
            <h2 className='text-1xl font-semibold text-center'>Para proteger tu cuenta, ingresa tu correo asociado a tu cuenta para restablecer tu contraseña. </h2>
            <h2 className='text-sm text-center pt-2'>(Se enviará un link a tu correo para restablecer tu contraseña)</h2>
            <div className='flex flex-col text-[#505568] '>
                <label className='pb-2'>Correo</label>
                <input  {...register("email_usuario", {required:true})} onClick={()=> setMensaje('')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Correo"/>
            </div>
            {mensaje? <p className='text-red-500 text-sm italic pt-2 '>{mensaje}</p>:""}
            <button  type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Enviar</button>
            <ToastContainer />
            <div className='flex flex-col'>
                <Link to={'/'} className="font-medium  hover:underline text-[#406343] text-center">Ir al Inicio</Link>
            </div>
        </form>
    </div>
  )
}

export default RecoveryPassword