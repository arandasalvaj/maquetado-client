import { Link } from "react-router-dom"
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
            <Link to={'/invernadero/crear'} element={<CultivoCrear/>} className='py-2.5 px-6 text-white font-semibold bg-[#406343] hover:bg-[#32502E] rounded-xl'>Crear invernadero</Link>
        </div>
    </main>
    <div className="flex justify-center">
            <div className="overflow-x-auto w-[90%]  sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Invernadero
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Nombre
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        T.Ambiente Min
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        T.Ambiente Max
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        T.Agua Min
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        T.Agua Max
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Humedad Max
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Humedad Min
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Co2 Min
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Co2 Min
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                        Tomates
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        Cama 1
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        24
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        12
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        27
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        80%
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        50%
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        112
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        215
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        @mdo @mdo @mdo
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