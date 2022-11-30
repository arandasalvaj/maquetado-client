import 'react-circular-progressbar/dist/styles.css';
import moment from 'moment'

const Indicadores = ({invernadero}) => {

    const estadoInvernadero = (estado) =>{
        switch (estado) {
        case 0:
            return <h1 className='bg-red-600 px-4 rounded-xl text-white font-semibold'>Desactivado</h1>
        case 1:
            return <h1 className='bg-yellow-500 px-4 rounded-xl text-white font-semibold'>Proceso</h1>
        case 2:
            return <h1 className="bg-green-600 px-4 rounded-xl text-white font-semibold">Activado</h1>
        default:
            break;
        }
    }

return (
    <div className=" grid grid-cols-3 py-4 px-4 gap-x-4 grid-flow-cols-dense border-2 rounded-xl bg-gray-200">
        {/* <div className="bg-[#154D80] rounded-lg shadow-sm h-[240px] col-span-3 sm:col-span-1 row-span-2 flex items-center justify-center"> 
            <div className="py-16 sm:py-0">
                <h1 className='text-4xl text-white font-bold text-center'>{invernadero.nombre_invernadero}</h1>
                <p className='text-2xl text-white  text-center grid grid-rows-3 font-semibold'>Fecha de creación
                    <span className="font-semibold">{moment(invernadero.created_at).format('DD-MM-YYYY')}</span>
                </p>
            </div>  
        </div> */}
        <div className=' flex flex-col gap-4'>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Fecha Inicio</h1>
                            <h1 className='text-center text-[40px] font-semibold'>
                                {moment(invernadero.inicio_temporada).format('DD-MM-YYYY')}
                            </h1>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Fecha Fin</h1>
                            <h1 className='text-center  text-[40px] font-semibold'>
                                {moment(invernadero.termino_temporada).format('DD-MM-YYYY')}
                            </h1>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className=' flex flex-col gap-4'>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-1 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Tamaño</h1>
                                <h1 className='text-center text-[40px] font-semibold'>
                                    {invernadero.tamano_invernadero} m²
                                </h1>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="bg-white rounded-lg shadow-sm min-h-[100px] col-span-5 sm:col-span-1 flex items-center justify-center"> 
                <div className="flex items-end gap-3 ">
                    <div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className="text-xl text-black-500 font-bold text-center">Estado</h1>
                            <h1 className='text-center text-[25px] font-semibold p-3'>
                                {estadoInvernadero(invernadero.estado_invernadero )}
                            </h1>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
)
}

export default Indicadores