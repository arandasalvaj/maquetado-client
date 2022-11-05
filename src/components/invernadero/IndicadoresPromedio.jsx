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
                <p className='text-2xl text-white  text-center grid grid-rows-3'>Fecha de plantación
                    <span className="font-semibold">{fecha}</span>
                </p>
            </div>  
        </div>



       



        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                    <h1 className="text-7sm text-black-500 font-bold text-center">Numero de Producción</h1>
                      <center><svg class="h-8 w-8 text-green-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />  <line x1="16" y1="8" x2="2" y2="22" />  <line x1="17.5" y1="15" x2="9" y2="15" /></svg> </center>
                    </div>
                </div>
            </div>  
        </div>






        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-5 p-4'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Numero de Perdidas</h1>
                        <center><svg class="h-8 w-8 text-red-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg></center>
                    </div>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-2 p-2'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Fecha Inicio</h1>
                        <center><svg class="h-10 w-10 text-green-800 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg></center>
                    </div>
                </div>
            </div>  
        </div>
        
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
        <div className="flex items-end gap-3 ">
        <div>
                    <div style={{ width: 200, height: 200 }} className='flex flex-col gap-2 p-2'>
                        <h1 className="text-7sm text-black-500 font-bold text-center">Fecha Fin</h1>
                        <center><svg class="h-10 w-10 text-red-600 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg></center>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Indicadores