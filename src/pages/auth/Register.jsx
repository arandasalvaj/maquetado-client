import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../../assets/portada.jpg'
import { useForm } from "react-hook-form";
import { addUser } from '../../services/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';

const Register = () => {
    const { register, handleSubmit, formState: { errors } ,setValue,watch,setFocus } = useForm();
    const navigate = useNavigate()
    const [mensaje,setMensaje] = useState('')
    const password = watch("password_usuario")
    const newPassword = watch("newPassword")
    const captcha = useRef(null)
    const [captchaEstado,setCaptchaEstado] = useState(false)
    const [showLoader,setShowLoader] = useState(true)

    const onSubmit = (data) => {
        if(password === newPassword){
            setMensaje('')
            delete data.newPassword
            addUser(data)
            .then((response) =>{
                if(response.status===200){
                    setShowLoader(true)
                    toast.success("Link de confirmación enviado a tu correo", {
                        position: toast.POSITION.TOP_CENTER
                    })
                    const interval = setInterval(() => {
                        navigate('/')
                        clearInterval(interval)
                    }, 4000)
                }
            })
            .catch((error)=>{
                //const { data:{message}} = error.response
                mensaje(error.response.data)
            })
        }else{
            message("Las contraseñas no son iguales")
        }
    }
    const onChange = () =>{
        if(captcha.current.getValue()){
         setCaptchaEstado(true)   

        }
    }

    const handleErrorSubmit = (e)=>{
        e.preventDefault()
        toast.error("Resuelve el captcha", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const message = (msj) =>{
        setMensaje(msj) 
        setValue("password_usuario", "")
        setValue("newPassword", "")
        setFocus ('password_usuario')
    }

    const loader = () =>{
        return (
                <form onSubmit={ captchaEstado ? handleSubmit(onSubmit):handleErrorSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 '>
                    <div className='py-[350px] flex justify-center'>
                        <div className=" animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-green-700 rounded-full" role="status" aria-label="loading">
                            <span className="sr-only px-6 py-4 whitespace-nowrap text-center">Loading...</span>
                        </div>
                    </div>
                </form>
        )
    }

    const cardRegister = () =>{
        return (
            <form onSubmit={ captchaEstado ? handleSubmit(onSubmit):handleErrorSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 '>
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Registro</h2>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3 pt-3'>Nombre</label>
                    <input {...register("nombre_usuario", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Nombre" />
                </div>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3'>Apellido</label>
                    <input {...register("apellido_usuario", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Apellido" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Rut</label>
                    <input {...register("rut_usuario", {required:true})} type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rut" maxLength={10}/>
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Correo</label>
                    <input {...register("email_usuario", {required:true})} type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Contraseña</label>
                    <input {...register("password_usuario", {required:true})} onClick={()=>setMensaje("")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Confirmar Contraseña</label>
                    <input {...register("newPassword", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                </div>
                {mensaje? <p className='text-red-500 text-sm italic'>{mensaje}</p>:""}
                <div className='flex items-center justify-center'>
                    <ReCAPTCHA sitekey="6LeRYvkiAAAAAITzNI9tdWN_O29RUVAgcX1RRKSU" ref={captcha} onChange={onChange} />
                </div>
                <ToastContainer />
                <button onClick={()=>setShowLoader(false)} type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Registrarse</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    ¿Ya tienes una cuenta?  
                    <Link to={'/login'} className="font-medium  hover:underline text-[#406343]"> Inicia aqui</Link>
                </p>
            </form>
        )
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-200 flex flex-col justify-center '>
            
            <form onSubmit={ captchaEstado ? handleSubmit(onSubmit):handleErrorSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8 '>
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Registro</h2>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3 pt-3'>Nombre</label>
                    <input {...register("nombre_usuario", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Nombre" />
                </div>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3'>Apellido</label>
                    <input {...register("apellido_usuario", {required:true})} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Apellido" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Rut</label>
                    <input {...register("rut_usuario", {required:true})} type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rut" maxLength={10}/>
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Correo</label>
                    <input {...register("email_usuario", {required:true})} type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Contraseña</label>
                    <input {...register("password_usuario", {required:true})} onClick={()=>setMensaje("")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Confirmar Contraseña</label>
                    <input {...register("newPassword", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                </div>
                {mensaje? <p className='text-red-500 text-sm italic'>{mensaje}</p>:""}
                <div className='flex items-center justify-center'>
                    <ReCAPTCHA sitekey="6LeRYvkiAAAAAITzNI9tdWN_O29RUVAgcX1RRKSU" ref={captcha} onChange={onChange} />
                </div>
                <ToastContainer />
                <button onClick={()=>setShowLoader(false)} type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Registrarse</button>
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