import { Link } from "react-router-dom"
import Cama from "../cama/Cama"
import CultivoCrear from "./CultivoCrear"

const CultivoInicio = () => {
  return (
  <>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Cultivos</h1>
                <p className='text-3sm font-semibold text-gray-500'>Crea cultivos y editalos aqui</p>
            </div>
            <Link to={'/cultivo/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear Cultivo</Link>
        </div>
    </main>
    <div class="flex justify-center">
            <div class="overflow-x-auto w-[90%]  sm:-mx-6 lg:-mx-8">
                <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Invernadero
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Nombre
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        T.Ambiente Min
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        T.Ambiente Max
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        T.Agua Min
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        T.Agua Max
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Humedad Max
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Humedad Min
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Co2 Min
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Co2 Min
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                        Tomates
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        Cama 1
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        24
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        12
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        27
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        80%
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        50%
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        112
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        215
                                    </td>
                                    <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                    <center><Link to={'/cama/detalle'}> <svg class="h-6 w-6 text-green-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg></Link></center>
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