import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
const Indicadores = ({nombre,fecha}) => {

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
        <div className="bg-[url('https://www.lavanguardia.com/files/content_image_desktop_filter/uploads/2018/06/07/5e997e7983a77.jpeg')] rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 row-span-2 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                <h1 className='text-5xl text-white font-bold text-center'>{nombre}</h1>
                <p className='text-2xl text-white  text-center grid grid-rows-2'>Fecha de plantación
                    <span className="font-semibold">{fecha}</span>
                </p>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-gray-500 font-semibold text-center">Humedad Promedio</h1>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-gray-500 font-semibold text-center">Co2 Promedio</h1>
                        <CircularProgressbar value={ppm} maxValue={250} text={`${ppm}`} />
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-gray-500 font-semibold text-center">Temperatura Ambiente Promedio</h1>
                        <CircularProgressbar value={agua} text={`${agua}°`} />
                    </div>
                </div>
            </div> 
        </div>
        
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
        <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-gray-500 font-semibold text-center">Temperatura Agua Promedio</h1>
                        
                        <CircularProgressbar value={ambiente} text={`${ambiente}°`} />
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Indicadores