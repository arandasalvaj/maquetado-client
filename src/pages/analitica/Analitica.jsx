import React from 'react';
import { DatePicker } from 'antd';
const { RangePicker} = DatePicker;
import moment from 'moment/moment';
import KpiProduccion from '../../components/analitica/KpiProduccion';
import { AiFillFund, AiFillSignal } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { CgAsterisk } from "react-icons/cg";
import { BiWater } from "react-icons/bi";
import KpiSensorAmbiente from '../../components/analitica/KpiSensorAmbiente';
import KpiSensorHumedad from '../../components/analitica/KpiSensorHumedad';
import KpiSensorGas from '../../components/analitica/KpiSensorGas';
import KpiTemperaturaAgua from '../../components/analitica/KpiTemperaturaAgua';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import {getAllSensores, getAllCamas} from '../../services/cama';
import {getAllInvernaderosUsuario} from '../../services/invernadero';
import {getAllCultivos} from '../../services/cultivo';

const Analitica = () => {

  const [fech, setFech] = useState([])
  const [fecha_inicio, setFechaInicio] = useState('2022-11-24')
  const [fecha_fin, setFechaTerm] = useState('2022-11-25')
  const [sensores, setSensores] = useState([])
  const [invernaderos, setInvernaderos] = useState([])
  const [camas, setCamas] = useState([])
  const [estado, setEstado] = useState(true)
  const [camaId, setCamaId] = useState()
  // console.log(sensores)
  const fechaHoy = new Date();
  
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const [size,setSize]=useState(5)
  
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];

useEffect(() => {
  getAllInvernaderosUsuario(id_usuario,token, size)
  .then((response)=>{
    setInvernaderos(response.data)
  }).catch((error)=>{
    console.log(error.response.status )
    
  })
  
}, [])

   const mostarDatos = () =>{
    getAllSensores(token,fech[0],fech[1],camaId)
    .then((response)=>{
      setSensores(response.data)
    }).catch((error)=>{
      console.log(error)
      
    })
   }
 const handleInvernadero = (e)=>{
  const invernaderoId = e.target.value;

  getAllCultivos(invernaderoId, token)
  .then((response)=>{
    getAllCamas(response.data.id_cultivo, token)
    .then((response)=>{
      setCamas(response.data)
      setEstado(false)
    }).catch((error)=>{
      console.log(error.response.status)
      if(error.response.status===404){
        setEstado(true)
        setCamas([])
      }
      
      
    })
  }).catch((error)=>{
    console.log(error.response.status )
    
  })

 }
 const handleCama = (e) =>{
  setCamaId(e.target.value)
 }
  return (
    <>
      <div className="flex items-center justify-between lg:py-6 px-10 py-12 border-b-2">

        <div className="flex items-center space-x-1">
          <h1 className="text-xl font-medium text-slate-700  lg:text-2xl">
            Analisis
        </h1>

        </div>

        <div className="flex items-center space-x-2">

          <select className="inline-block leading-5 relative py-2 pl-3 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto appearance-none "
          onChange={(e)=>handleInvernadero(e)}
          >

          <option value={''}>--Invernadero--</option>
                                {invernaderos.map((inv, index)=>(
                                    <option key={index} value={inv.id_invernadero}> {inv.nombre_invernadero}</option>
                                ))}
          </select>
          <select className="inline-block leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto appearance-none "
          disabled={estado}
          onChange={(e)=>handleCama(e)}
          >

          <option value={''}>--Camas--</option>
                                {camas.map((cama, index)=>(
                                    <option key={index} value={cama.id_cama}> {cama.nombre_cama}</option>
                                ))}
          </select>
          <RangePicker className='p-2 w-full'
            //  defaultValue={[dayjs(moment(fechaHoy).format('Y-MM-DD')), dayjs(moment(fechaHoy).format('Y-MM-DD'))]}
            onChange={(values) => {
              setFech(values.map(item => {
                return moment(item.$d).format('YYYY-MM-DD');
              }));

            } } />
          <button type="button" className="text-white bg-gradient-to-br bg-green-700 font-medium rounded-lg text-sm p-2 mr-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            onClick={() => mostarDatos()}
          >Analizar
          </button>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-4 px-10 mt-8'>
        <div className='col-span-12 lg:col-span-8'>
          <div className=" min-w-0  bg-white mb-6 shadow-lg rounded-lg">
            <div className='p-4 border-b'>
              <h1 className='text-md font-semibold'>Produccion de lechuga</h1>
            </div>
            <div className="px-4 py-5">

              <KpiProduccion />
            </div>
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <div className='grid grid-rows-2 row border-l-2'>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-600 text-slate-200 rounded shadow-lg shadow-cyan-100/10   min-w-0  bg-white w-full mb-6 ">
              <div className="relative">
                <h4 className="mb-2 text-white text-md font-medium">Promedio Cosechas Producidas</h4>
                <div className='grid grid-cols-2 items-center'>
                  <div className='col-span-1'>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">98.000 <span>$</span></h3>
                  </div>
                  <div className='col-span-1 ml-20'>
                    <AiFillSignal className='text-7xl' />
                  </div>

                </div>

              </div>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 text-slate-200 rounded shadow-lg shadow-cyan-100/10   min-w-0  bg-white w-full mb-6 ">
              <div className="relative">
                <h4 className="mb-2 text-white text-md font-medium">Promedio de Merma</h4>
                <div className='grid grid-cols-2 items-center'>
                  <div className='col-span-1'>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">98.000 <span>$</span></h3>
                  </div>
                  <div className='col-span-1 ml-20'>
                    <AiFillFund className='text-7xl' />
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="flex items-center justify-between lg:py-6 px-10 py-12 border-b-2">

        <div className="flex items-center space-x-1">
          <h1 className="text-xl font-medium text-slate-700  lg:text-2xl">
            Comportamiento Ambiental
          </h1>

        </div>

      </div>

      <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4'>
        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center'>


              <WiHumidity className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">Promedio Humedad</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">53%</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <span className="text-green-500">+55%</span>than last week</p>
            </div>

        </div>
        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center'>

              <FaTemperatureHigh className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">Promedio Temp. Ambiente</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">53C</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-gray-600">
                <span className="text-green-500">+55%</span>than last week</p>
            </div>
        </div>

        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-violet-600 to-violet-400 text-white shadow-violet-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center'>

              <CgAsterisk className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">Promedio Nivel Co2</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">53PPM</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-gray-600">
                <span className="text-green-500">+55%</span>than last week
              </p>
            </div>
        </div>

        <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div className='bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center'>

              <BiWater className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">Promedio Temp. de Agua</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">53C</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-gray-600">
                <strong className="text-green-500">+55%</strong>than last week</p>
            </div>
        </div>


      </div>
     

      
      

    <div className='mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6'>
        <div className=" min-w-0  bg-white mb-6 shadow-lg rounded-lg">
          <div className='p-4 border-b'>
            <h1 className='text-md font-semibold'>Porcentaje de Humedad</h1>
          </div>
          <div className="px-4 py-5">

            <KpiSensorHumedad datos={sensores.dataAmbiente} />
          </div>
          <div className=''>

          </div>
        </div>



        <div className=" min-w-0  bg-white mb-6 shadow-lg rounded-lg">
          <div className='p-4 border-b'>
            <h1 className='text-md font-semibold'>Temperatura del Ambiente</h1>
          </div>
          <div className="px-4 py-5">

            <KpiSensorAmbiente datos={sensores.dataAmbiente} />
          </div>
        </div>
        <div className=" min-w-0  bg-white mb-6 shadow-lg rounded-lg">
          <div className='p-4 border-b'>
            <h1 className='text-md font-semibold'>Nivel de CO2</h1>
          </div>
          <div className="px-4 py-5">

            <KpiSensorGas datos={sensores.dataGas} />
          </div>
          <div className=''>

          </div>
        </div>

        <div className=" min-w-0  bg-white mb-6 shadow-lg rounded-lg">
          <div className='p-4 border-b'>
            <h1 className='text-md font-semibold'>Temperatura de Agua</h1>
          </div>
          <div className="px-4 py-5">

            <KpiTemperaturaAgua datos={sensores.dataAgua} />
          </div>
        </div>



      </div>
        </>
  )
}
export default Analitica;
