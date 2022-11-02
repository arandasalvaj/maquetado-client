
import { RiSoundcloudLine } from "react-icons/ri";
import React, { useContext, useEffect, useState } from 'react';
import GraficosIndicadores from "../../components/invernadero/GraficosIndicadores";
import { UserContext } from "../../context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inicio = () => {
    const {user,addCounter,counter} =useContext(UserContext)
    useEffect(()=>{
        addCounter()
        if(counter === 1){
            toast.success(`Bienvenido ${user.nombre_usuario} ${user.apellido_usuario}`, {
            position: toast.POSITION.TOP_CENTER
        })
    }
    },[])
  return (
    <>

    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 w-full px-20 py-5'>



        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Nivel de Co2</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>Co2 del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>17</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>83%</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Humedad</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Humedad del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del agua</h1>
            </div>
        </div>
    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg">
        <GraficosIndicadores/>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Inicio