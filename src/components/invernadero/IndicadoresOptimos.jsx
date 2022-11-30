import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useEffect } from 'react';
import {  getCultivoFind } from '../../services/cultivo';
import { useState } from 'react';
import moment from 'moment'

const IndicadoresOptimos = ({idCultivo}) => {
    const [cultivo,setCultivo] = useState([])
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
    useEffect(()=>{
        obttenerCultivo()
    },[])

const obttenerCultivo= () =>{
    setCultivo([])
    getCultivoFind(idCultivo,token)
    .then((response)=>{
        setCultivo(response.data)
    })
    .catch((error)=>{
    })
}
return (
    <div className=" grid grid-cols-3 gap-4 px-8 py-4 grid-flow-cols-dense">
        <div className='col-span-3 sm:col-span-1 text-white row-span-2 bg-red-500 shadow-lg rounded-lg flex flex-col items-center justify-center py-8'>
            <h1 className='text-4xl font-bold mb-6'>{cultivo.nombre_cultivo}</h1>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-semibold'>Invernadero: {cultivo.nombre_invernadero}</h1>
                <h1 className='text-2xl font-semibold'>Brotes totales: {cultivo.cantidad_brotes ? cultivo.cantidad_brotes : 0}</h1>
                <h1 className='text-2xl font-semibold'>Cantidad de camas: {cultivo.cantidad_camas ? cultivo.cantidad_camas : 0}</h1>
                <h1 className='text-2xl font-semibold'>Fecha: { moment(cultivo.created_at).format("YYYY-MM-DD")}</h1>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center col-span-3 sm:col-span-1 bg-white rounded-lg shadow-lg '>
            <h1 className="text-xl text-black-500 font-bold text-center mt-4">Temperatura Ambiente</h1>
            <div className='flex pb-9 gap-10'>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4 py-4'>
                    <CircularProgressbarWithChildren maxValue={125} value={cultivo.temperatura_ambiente_max}>
                            <h1 className='font-bold text-xl'>MAX</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.temperatura_ambiente_max}°</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 120 }}  className='flex flex-col gap-3 px-4  py-4'>
                    <CircularProgressbarWithChildren maxValue={125} value={cultivo.temperatura_ambiente_min}>
                            <h1 className='font-bold text-xl'>MIN</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.temperatura_ambiente_min}°</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-3 sm:col-span-1 bg-white rounded-lg shadow-lg '>
            <h1 className="text-xl text-black-500 font-bold text-center mt-4">Temperatura Humedad</h1>
            <div className='flex pb-9 gap-10'>
                <div style={{ width: 150, height: 120 }}  className='flex flex-col gap-3 px-4 py-4'>
                    <CircularProgressbarWithChildren maxValue={125} value={cultivo.temperatura_agua_max}>
                            <h1 className='font-bold text-xl'>MAX</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.temperatura_agua_max}°</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4  py-4'>
                    <CircularProgressbarWithChildren  maxValue={125} value={cultivo.temperatura_agua_min}>
                            <h1 className='font-bold text-xl'>MIN</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.temperatura_agua_min}°</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-3 sm:col-span-1 bg-white rounded-lg shadow-lg '>
            <h1 className="text-xl text-black-500 font-bold text-center mt-4">Humedad</h1>
            <div className='flex pb-9 gap-10'>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4 py-4'>
                    <CircularProgressbarWithChildren maxValue={100} value={cultivo.humedad_ambiente_max}>
                            <h1 className='font-bold text-xl'>MAX</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.humedad_ambiente_max}%</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4  py-4'>
                    <CircularProgressbarWithChildren  maxValue={100} value={cultivo.humedad_ambiente_min}>
                            <h1 className='font-bold text-xl'>MIN</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.humedad_ambiente_min}%</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-3 sm:col-span-1 bg-white rounded-lg shadow-lg '>
            <h1 className="text-xl text-black-500 font-bold text-center mt-4">CO2</h1>
            <div className='flex pb-9 gap-10'>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4 py-4'>
                    <CircularProgressbarWithChildren maxValue={1000} value={cultivo.ppm_gas_max}>
                            <h1 className='font-bold text-xl'>MAX</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.ppm_gas_max}</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 120 }} className='flex flex-col gap-3 px-4  py-4'>
                    <CircularProgressbarWithChildren maxValue={1000} value={cultivo.ppm_gas_min}>
                            <h1 className='font-bold text-xl'>MIN</h1>
                        <div style={{ fontSize: 20, marginTop: -5 }}>
                            <strong> {cultivo.ppm_gas_min}</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default IndicadoresOptimos
