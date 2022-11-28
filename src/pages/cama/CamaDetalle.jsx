import React, { useContext, useEffect, useState } from 'react';
import IndicadorHumedad from "../../components/camas/IndicadorHumedad";
import IndicadorGas from "../../components/camas/IndicadorGas";
import IndicadorTemperatura from "../../components/camas/IndicadorTemperatura";
import IndicadorTemperaturaAgua from "../../components/camas/IndicadorTemperaturaAgua";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import { io } from "socket.io-client";
import moment from 'moment/moment';


const CamaDetalle = () => {
  const {idCama} = useParams();
  const socket = io("https://www.tuinvernadero.xyz");
  //const socket = io("http://localhost:8000/");
  const [agua,setAgua]= useState(0)
  const [ppm,setPpm]= useState(0)
  const [ambiente,setAmbiente]= useState(0)
  const [humedad,setHumedad]= useState(0)

  useEffect(()=>{
    socket.emit("idCama",idCama)
    socket.on('data',(data)=>{
      setPpm(data.dataGas[0].ppm_gas)
      setAmbiente(data.dataAmbiente[0].temperatura_ambiente)
      setHumedad(data.dataAmbiente[0].humedad_ambiente)
      setAgua(data.dataAgua[0].temperatura_agua)
    })
  },[])

  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  return (
    <>
    <div className=' grid grid-cols-12 '> 
      <div className='col-span-2 flex px-6 '>
        <nav>
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                  <Link to={'../'} className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                      <AiTwotoneHome className="mr-1 w-5 h-5"/>
                      Cultivo
                  </Link>
              </li>
              <li>
              <div className="flex items-center">
                  <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                  <span className="text-lg font-medium text-gray-600 md:ml-2">Detalle</span>
              </div>
              </li>
          </ol>
        </nav>
        </div>
      </div>

    <div className='px-12 pt-8'>
      <div className=' bg-gray-100 rounded-t-lg p-4 border border-gray-300 text-center'>
        <h1 className='text-xl font-semibold'>Indicadores Actuales</h1>
      </div>
      <div className='rounded-b-lg bg-white border border-gray-300 '>
        <div className='grid grid-cols-4 '>
          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1'>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=' '>
                <CircularProgressbar value={ambiente} text={`${ambiente}°`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Temperatura del Ambiente</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1'>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=' '>
                <CircularProgressbar value={agua} text={`${agua}°`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Temperatura del Agua</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1 '>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=''>
                <CircularProgressbar value={humedad} text={`${humedad}%`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Humedad del Ambiente</h1></center>
          </div>

          <div className='py-4 gap-4 flex flex-col col-span-4 md:col-span-1 '>
            <div className='flex justify-center '>
              <div style={{ width: 150, height: 150 }} className=''>
                <CircularProgressbar maxValue={1000} value={ppm} text={`${ppm} PPM`} />
              </div>
            </div>
            <center><h1 className=' text-black font-semibold text-xl md:text-2xl'>Nivel de CO2</h1></center>
          </div>
        </div>  
      </div>
    </div>
      <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Graficos Diario</h1>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10">
          <IndicadorHumedad titulo="Porcentaje de humedad"/>
          <IndicadorGas titulo="Nivel de CO2"/>
          <IndicadorTemperatura titulo="Temperatura del Ambiente"/>
          <IndicadorTemperaturaAgua titulo="Temperatura del Agua"/>
        </div>
        <ToastContainer/>
    </>
  )
}

export default CamaDetalle