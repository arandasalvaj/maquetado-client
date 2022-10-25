import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CultivoCrear from './CultivoCrear'

const ListadoCultvos = () => {
    useEffect(()=>{

    },[])
    const obtenerCultivos = () =>{
        
    }
  return (
    <>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div>
                <h1 className='text-2xl font-semibold leading-relaxed text-gray-800'>Cultivos</h1>
                <p className='text-sm font-semibold text-gray-500'>Crea cultivos y editalos aqui</p>
            </div>
            <Link to={'/dashboard/cultivos/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear cultivo</Link>
        </div>
    </main>


    </>
  )
}

export default ListadoCultvos