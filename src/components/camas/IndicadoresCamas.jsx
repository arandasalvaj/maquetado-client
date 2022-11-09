import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const IndicadoresCamas = () => {
  return (
    <>
    <div className='flex items-center justify-between py-7 px-10'>
      <div className=" w-full">
          <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Cama-1</h1>
      </div>
    </div>

    <div className='shadow-lg'>
      <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
        <h1 className='text-xl font-semibold'>Indicadores Actuales</h1>
      </div>
      <div className='rounded-b-lg bg-white border border-gray-300 '>
        <div className='grid grid-cols-4 '>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1'>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=' '>
                <CircularProgressbar value={66} text={`${66}%`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Temperatura del Ambiente</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1'>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=' '>
                <CircularProgressbar value={66} text={`${66}%`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Temperatura del Agua</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1 '>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=''>
                <CircularProgressbar value={66} text={`${66}%`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Humedad del Ambiente</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1 '>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=''>
                <CircularProgressbar value={66} text={`${66}%`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Nivel de CO2</h1></center>
          </div>
          
        </div>
      </div>
    </div>

    </>
  )
}

export default IndicadoresCamas
