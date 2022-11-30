import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import IndicadoresOptimos from "../../components/invernadero/IndicadoresOptimos"
import { getAllCamas } from '../../services/cama'
import { AiTwotoneHome,AiOutlineCaretRight } from 'react-icons/ai'
import LoaderTableList from '../../components/table/LoaderTableList'
import ErrorMessage from '../../components/messages/ErrorMessage'
import { UserContext } from '../../context/UserContext'
import moment from 'moment'
const CultivoDetalle = () => {

  const {messageError,setMessageError,showError,setShowError,counterRender,setCounterRender} = useContext(UserContext)
    const {idCultivo} = useParams()
    const [loader,setLoader] = useState(true)
    const [cama,setCama] = useState([])
    const [size,setSize]=useState(5)
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
    const [countItem,setCountItem] = useState(0)

    useEffect(()=>{
        obtenerCamas()
    },[size,counterRender])

    const obtenerCamas = () =>{
      setCounterRender(0)
      getAllCamas(idCultivo,token)
      .then((response)=>{
        if(response.data.length === 0){
          setShowError(true)
          setLoader(false)
          setMessageError("NO HAY CAMAS")
        }else{
          setShowError(false)
          setMessageError("")
          setLoader(false)
          setCama(response.data)
          setCountItem(response?.data[0].full_count)
        }
      })
    }

    const handleSelectPage = (e)=>{
      setSize(e.target.value)
    }

  return (
    <>
      <div className=' grid grid-cols-12 '> 
        <div className='col-span-2 flex px-6 '>
          <nav>
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to={'../'} className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400">
                        <AiTwotoneHome className="mr-1 w-5 h-5"/>
                        Cultivo
                    </Link>
                </li>
                <li>
                <div className="flex items-center">
                    <AiOutlineCaretRight className="mr-1 w-3 h-3.5 text-gray-600"/>
                    <span className="text-lg font-medium text-gray-600 md:ml-2">Detalle</span>
                </div>
                </li>
            </ol>
          </nav>
        </div>
      </div>
    <main className='flex-1'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Detalle de Cultivo</h1>
                <p className='text-3sm font-semibold text-gray-500'>Puedes ver los detalles de tu cultivo aquí</p>
            </div>
        </div>
        <IndicadoresOptimos idCultivo={idCultivo}/>
    </main>
    <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Listado de Camas</h1>
        </div>
    </div>

    <div className="flex justify-center">
        <div className="overflow-x-auto w-[90%] sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full text-center leading-normal">
                        <thead className="border bg-gray-800 ">
                            <tr className=''>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  ID
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4 ">
                                  Nombre
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Tamaño
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Brotes
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                  Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            cama.map((data,index)=>{
                              return (
                                  <tr className="bg-white border-b" key={index}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                      {index+1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.nombre_cama}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.tamano_cama} m²  
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      {data.brotes_cama}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                      { moment(data.created_at).format("YYYY-MM-DD")}
                                    </td>

                                  </tr>
                              )
                            })
                          }
                        </tbody>
                  </table>
                  {loader ? <LoaderTableList/> : "" }
                  {showError ? <ErrorMessage message={messageError}/>:null}

                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-md xs:text-sm text-gray-900">
                        Mostrando {cama.length} de {countItem} Camas
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <select onChange={handleSelectPage} className=' border-gray-500 border-2 rounded'>
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={50}>50</option>
                        </select>
                    </div>
                    <h1 className=' text-gray-900' >Entradas por página</h1>
                  </div>
              </div>
          </div>
        </div>
      </div>

  </>
  )
}

export default CultivoDetalle