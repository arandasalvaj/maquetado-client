import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const IndicadoresCamas = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 w-full px-20 py-5'>
            <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
                <div className='grid items-center justify-center'>
                <div className='flex justify-center gap-12'>
                <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                  <CircularProgressbar value={66} text={`${66}%`} />
                </div>
                </div>
                <center><h1 className=' text-black font-bold text-3xl'>Temperatura del Ambiente</h1></center>
                
                </div>
            </div>
            
           
            <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
                <div className='grid items-center justify-center'>
                <div className='flex justify-center gap-12'>
                <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                  <CircularProgressbar value={66} text={`${66}%`} />
                </div>
                </div>
                <center><h1 className=' text-black font-bold text-3xl'>Humedad del Ambiente</h1></center>
                
                </div>
            </div>

             <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
                <div className='grid items-center justify-center'>
                <div className='flex justify-center gap-12'>
                <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                  <CircularProgressbar value={66} text={`${66}%`} />
                </div>
                </div>
                <center><h1 className=' text-black font-bold text-3xl'>CO2 del Ambiente </h1></center>
               
                </div>
            </div>


           
            <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
                <div className='grid items-center justify-center'>
                <div className='flex justify-center gap-12'>
                <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                  <CircularProgressbar value={10} text={`${10}%`} />
                </div>
                </div>
                <center><h1 className=' text-black font-bold text-3xl'>Temperatura del Agua </h1></center>
                
                </div>
                
            </div>
        </div>
  )
}

export default IndicadoresCamas
