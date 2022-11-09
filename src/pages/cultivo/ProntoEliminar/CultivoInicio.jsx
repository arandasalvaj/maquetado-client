import { Link } from "react-router-dom"
import IndicadoresOptimos from "../../../components/invernadero/IndicadoresOptimos"
import CultivoCrear from "../CultivoCrear"

const CultivoInicio = () => {
  return (
  <>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Cultivos</h1>
                <p className='text-3sm font-semibold text-gray-500'>Detalle de cultivos</p>
            </div>
            <Link to={'/cultivo/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear cultvo</Link>
        </div>

        <IndicadoresOptimos ambienteMax="27" ambienteMin="3"/>
        
    </main>
    <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Listado de Camas</h1>
        </div>
    </div>
    <div className="flex justify-center">
        
            <div className="overflow-x-auto w-[90%]  sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        ID
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Nombre
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Tamaño
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Brotes
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                        1
                                    </td>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                        Cama-1
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        2 m
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        50
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                    <center><Link to={'/cama/detalle'}> <svg className="h-6 w-6 text-green-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg></Link></center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default CultivoInicio