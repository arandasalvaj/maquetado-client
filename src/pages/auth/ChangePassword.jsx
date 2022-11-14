import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { changePassword } from '../../services/user';

const ChangePassword = () => {
    const { register, handleSubmit, formState: { errors } ,setValue,watch,setFocus } = useForm();
    const [mensaje,setMensaje] = useState('')
    const navigate = useNavigate()
    const password = watch("password_usuario")
    const newPassword = watch("confirmPassword")
    const {token} = useParams()
    const onSubmit = (data) => {
        if(password === newPassword){
            setMensaje('')
            delete data.confirmPassword
            changePassword(data,token)
            .then((response) =>{
                console.log(response)
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                const interval = setInterval(() => {
                    navigate('/')
                    clearInterval(interval)
                }, 6000);
            })
            .catch((error)=>{
                console.log(error.response.data.message)
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                const interval = setInterval(() => {
                    navigate('/')
                    clearInterval(interval)
                }, 6000);
            })
        }else{
            messageError("Las contraseñas no coinciden.")
        }
    }

    const messageError = (msj) =>{
        setMensaje(msj) 
        setValue("password_usuario", "")
        setValue("confirmPassword", "")
        setFocus ('password_usuario')
    }
    useEffect(()=>{setFocus("password_usuario")},[])
  return (
        <div className='bg-gray-200 grid grid-cols-1 h-screen w-full justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                <h2 className='text-3xl text-[#505568] font-bold text-center'>Restablece tu contraseña</h2>
                <div className='flex flex-col text-[#505568] py-6'>
                    <label className='pb-2'>Contraseña</label>
                    <input  {...register("password_usuario", {required:true})} onClick={()=>setMensaje('')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-2'>Confirmar Contraseña</label>
                    <input  {...register("confirmPassword", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Confirmar Contraseña"/>
                </div>
                {mensaje? <p className='text-red-500 text-sm italic text-center'>{mensaje}</p>:""}
                <button  type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Restablecer</button>
                <ToastContainer />
                <div className='flex flex-col'>
                    <Link to={'/'} className="font-medium  hover:underline text-[#406343] text-center">Ir al Inicio</Link>
                </div>
            </form>
        </div>
  )
}

export default ChangePassword