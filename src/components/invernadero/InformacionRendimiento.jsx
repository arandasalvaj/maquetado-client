import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureLow,FaWater } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";
const Informacion = ({ubicacion}) => {
  return (
    <div className=" grid grid-cols-3 gap-4 px-8 py-4 grid-flow-cols-dense">
        <div className="bg-green-400 rounded-lg shadow-sm h-100 col-span-3 sm:col-span-2 row-span-3 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                <h1 className='text-5xl text-white font-bold text-center'>{ubicacion}</h1>  
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <IoWaterOutline className="text-6xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-2xl text-gray-500 font-semibold">Cantidad de Camas</h1>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <BsCloud className="text-6xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-2xl text-gray-500 font-semibold">Cantidad de Cultivos</h1>
                </div>
            </div>  
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-3 sm:col-span-1 flex items-center justify-center"> 
            <div className="flex items-end gap-3 ">
                <BsCloud className="text-6xl text-purple-400"/>
                <div>
                    <h1 className="flex gap-3 items-end text-2xl text-gray-500 font-semibold">Perdidas Totales</h1>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Informacion