import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const IndicadoresOptimos = ({nombre,fecha}) => {

    const [agua,setAgua] = useState(0)
    const [percentage,setPercentage] = useState(76)
    const [ambiente,setAmbiente] = useState(24)
    const [ppm,setPpm] = useState(115)
    
    useEffect(()=>{
        setInterval(() => {
            setAgua(Math.floor(Math.random() * (19 - 16 + 1)) + 16)
            setPercentage(Math.floor(Math.random() * (78 - 76 + 1)) + 76)
            setAmbiente(Math.floor(Math.random() * (30 - 24 + 1)) + 24)
            setPpm(Math.floor(Math.random() * (120 - 110 + 1)) + 110)
        }, 5000);
    })


  return (

    <div className=" grid grid-cols-3 gap-4 px-8 py-4 grid-flow-cols-dense">

           <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-2 row-span-1 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                
                <p className='text-xl text-black  font-bold text-center grid grid-rows-4'>Cantidad Total de Camas de Agua    
                <center><svg className="h-8 w-8 text-green-800 rows-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="12" width="6" height="8" rx="1" />  <rect x="9" y="8" width="6" height="12" rx="1" />  <rect x="15" y="4" width="6" height="16" rx="1" />  <line x1="4" y1="20" x2="18" y2="20" /></svg></center>
                </p>
            </div>  

            </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap- ">
                <div>
                    <div style={{ width: 200, height: 230 }} className='flex flex-col gap-5 p-4'>
                    <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura Ambiente Optimo Maximo</h1>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 row-span-1 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                
                <p className='text-xl text-black  font-bold text-center grid grid-rows-5'>Cantidad Total de Brotes 
                <center><svg className="h-8 w-8 text-green-800 rows-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="12" width="6" height="8" rx="1" />  <rect x="9" y="8" width="6" height="12" rx="1" />  <rect x="15" y="4" width="6" height="16" rx="1" />  <line x1="4" y1="20" x2="18" y2="20" /></svg></center>
                </p>
            </div>  

            </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 row-span-1 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
            
            
            
            <p className='text-xl text-black  font-bold text-center grid grid-rows-6'>Cantidad Total de Cultivos
            <center><svg className="h-8 w-8 text-green-800 rows-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="12" width="6" height="8" rx="1" />  <rect x="9" y="8" width="6" height="12" rx="1" />  <rect x="15" y="4" width="6" height="16" rx="1" />  <line x1="4" y1="20" x2="18" y2="20" /></svg></center>
          </p>
           
            </div>  
            </div>

        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap- ">
                <div>
                    <div style={{ width: 200, height: 230 }} className='flex flex-col gap-5 p-4'>
                    <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura Ambiente Optimo Maximo</h1>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap- ">
                <div>
                    <div style={{ width: 200, height: 230 }} className='flex flex-col gap-5 p-4'>
                    <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura Ambiente Optimo Minimo</h1>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap- ">
                <div>
                    <div style={{ width: 200, height: 230 }} className='flex flex-col gap-5 p-4'>
                    <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura Humedad Optimo Minimo</h1>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Humedad Optimo Maximo</h1>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 150 }} className='flex flex-col gap-2 p-2'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">CO2 Optimo Minimo</h1>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
        <div className="flex items-end gap-3 ">
        <div>
                    <div style={{ width: 200, height: 180 }} className='flex flex-col gap-2 p-2'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura del Agua Optimo Minimo</h1>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div> 
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
        <div className="flex items-end gap-3 ">
        <div>
                    <div style={{ width: 200, height: 180 }} className='flex flex-col gap-2 p-2'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Temperatura del Agua Optimo Maximo</h1>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div> 
        </div>



    </div>
    
  )
}

export default IndicadoresOptimos
