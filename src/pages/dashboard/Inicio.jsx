import { TbBuildingWarehouse } from "react-icons/tb";
import { GiPlantWatering } from "react-icons/gi";
import { TbPlant2 } from "react-icons/tb";
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
            <div className='flex justify-center gap-12 items-center '>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Invernaderos</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>ACTIVOS</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>17</span>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl text-center'>Cultivos</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>ACTIVOS</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>83</span>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl text-center'>Camas</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>ACTIVOS</h1>
            </div>
        </div>

    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg px-20">
        <GraficosIndicadores/>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Inicio