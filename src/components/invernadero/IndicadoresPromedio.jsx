import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
const Indicadores = ({invernadero}) => {

    const [agua,setAgua] = useState(0)
    const [percentage,setPercentage] = useState(76)
    const [ambiente,setAmbiente] = useState(24)
    const [ppm,setPpm] = useState(115)
    
    useEffect(()=>{
        setInterval(() => {
        }, 5000);
    })


  return (
    <div className=" grid grid-cols-3 gap-4 px-4 py-4 grid-flow-cols-dense border-2 rounded-xl bg-gray-200">
        <div className="bg-[#154D80] rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 row-span-2 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                <h1 className='text-3xl text-white font-bold text-center'>{invernadero.nombre_invernadero}</h1>
                <p className='text-2xl text-white  text-center grid grid-rows-3 font-semibold'>Fecha de plantación
                    <span className="font-semibold">{invernadero.created_at?.split("T")[0]}</span>
                </p>
            </div>  
        </div>
        <div className=' flex flex-col gap-4'>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Fecha Inicio</h1>
                            
                            <center><svg className="h-10 w-10 text-green-800 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg></center>
                            {invernadero.inicio_temporada}
                        </div>
                    </div>
                </div>  
            </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Fecha Fin</h1>
                            <center><svg className="h-10 w-10 text-red-600 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg></center>
                            {invernadero.termino_temporada}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Fecha Fin</h1>
                            <center><svg className="h-10 w-10 text-red-600 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg></center>
                            {invernadero.termino_temporada}
                        </div>
                    </div>
                </div> 
            </div>

    </div>
  )
}

export default Indicadores