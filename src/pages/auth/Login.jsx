import React,{useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../../assets/portada.jpg'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const {addCounter,setUser,sesisonUser,url} =useContext(UserContext)
    const { register, handleSubmit, formState: { errors } ,setValue,setFocus } = useForm();
    const navigate = useNavigate()
    const [message, setMesagge] = useState('hola')
    
    const onSubmit = (data) => {
        axios.post(`${url}api/auth/login`,data)
        .then((response) =>{
            document.cookie = `token=${response.data.tokenSession}; max-age=${3600*3};path=/;samesite=stric`
            setUser(response.data.data[0])
            window.localStorage.setItem('loggedUser',JSON.stringify(response.data.data[0]))
            sesisonUser()
            addCounter()
            navigate('/dashboard')
        })
        .catch((error)=>{
            const {status, data:{message}} = error.response
            mensaje(message,status)
        })
    }
    
    useEffect(()=>{
        mensaje()
    },[message])

    const mensaje = (msj,status) =>{
        setMesagge(msj) 
        toast.error(msj, {
            position: toast.POSITION.TOP_CENTER
        })
        msjError(status)
          
    }

    const msjError =(status)=>{
        //404-email || 401-password
        if(status === 401){
            setValue("password", "")
            setFocus ('password')
        }else if (status === 404){
            setValue("password", "")
            setValue("email", "")
            setFocus ('email')
        }
    }
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-200 flex flex-col justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Iniciar sesión</h2>
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Correo</label>
                    <input  {...register("email", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Correo"/>
                    {errors.email?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El correo es requerido</p>}
                </div>
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Contraseña</label>
                    <input  {...register("password", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="Contraseña"/>
                    {errors.password?.type==='required'&& <p className='text-red-500 text-sm italic'>La contraseña es requerida</p> }
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Recuerdame</p>
                    <Link to={'/registro'} className="font-medium  hover:underline text-[#406343]"> Registrate</Link>
                </div>
                <button  type='submit' className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
                <ToastContainer />
            </form>
        </div>
    </div>
  );
}

export default Login;
