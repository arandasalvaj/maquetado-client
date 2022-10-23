import React,{ useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../assets/portada.jpg'
import axios from "axios"

const Register = () => {
    const [input, setInput] =useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleInput = (e) => {
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.post("https://www.tuinvernadero.xyz/api/auth/registro",input).then((response) =>{
            })
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-200 flex flex-col justify-center'>
          <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Registro</h2>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3 pt-3'>Nombre</label>
                    <input onChange={(e)=>{handleInput(e)}} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="nombre" placeholder="Nombre" />
                </div>
                <div className='flex flex-col text-[#505568] '>
                    <label className='pb-3'>Apellido</label>
                    <input onChange={(e)=>{handleInput(e)}} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="apellido" placeholder="Apellido" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Rut</label>
                    <input onChange={(e)=>{handleInput(e)}} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="rut" placeholder="Rut" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Correo</label>
                    <input onChange={(e)=>{handleInput(e)}} type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"name="email" placeholder="Correo" />
                </div>
                <div className='flex flex-col text-[#505568]'>
                    <label className='pb-3'>Contraseña</label>
                    <input onChange={(e)=>{handleInput(e)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="Contraseña"/>
                
                </div>
                <button className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg'>Registrarse</button>
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