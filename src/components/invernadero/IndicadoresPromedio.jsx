import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureLow,FaWater } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";

const Indicadores = () => {
  return (
    <div className=" grid grid-cols-3 gap-4 px-8 py-4 grid-flow-cols-dense">
        <div className="bg-[url('https://www.lavanguardia.com/files/content_image_desktop_filter/uploads/2018/06/07/5e997e7983a77.jpeg')] rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 row-span-2 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                <h1 className='text-5xl text-white font-bold text-center'>Tomates</h1>
                <p className='text-2xl text-white  text-center grid grid-rows-2'>Fecha de plantación
                    <span>17/05/2022</span>
                </p>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <IoWaterOutline className="text-4xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-sm text-gray-500 font-semibold">Humedad Promedio</h1>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <BsCloud className="text-4xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-sm text-gray-500 font-semibold">CO2 Promedio</h1>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <FaTemperatureLow className="text-4xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-sm text-gray-500 font-semibold">Temperatura del ambiente Promedio</h1>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <FaWater className="text-4xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-sm text-gray-500 font-semibold">Temperatura del agua Promedio  </h1>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Indicadores