import React, { useContext, useEffect, useState } from 'react'
import ErrorMessage from '../../components/messages/ErrorMessage';
import LoaderTableList from '../../components/table/LoaderTableList';
import { UserContext } from '../../context/UserContext';
import moment from 'moment'
import { BiTrash } from 'react-icons/bi';
import { deleteAlerta } from '../../services/alerta';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AlertaListado = () => {
    const {token,messageError,setMessageError,showError,setShowError,setNumeroAlertas,estadoAlerta,setEstadoAlerta,alertas,setAlertas} = useContext(UserContext)
    const loggedUser = window.localStorage.getItem('loggedUser')
    const {id_usuario} = JSON.parse(loggedUser)
    const [loader,setLoader] = useState(true)
    const [countItem,setCountItem] = useState(0)



    const [listaAlerta, setListaAlerta] = useState([]);
    
    
    const handleOnChange = (event) => {
        const {value,checked} = event.target
        if(checked){
            setListaAlerta(pre => [...pre,value])
        }else{
            setListaAlerta(pre=>{
                return [...pre.filter(skill=>skill!=value)]
            })
        }
    };
    

    useEffect(()=>{
        if(alertas.length === 0){
            setShowError(true)
            setLoader(false)
            setMessageError("NO HAY ALERTAS")
        }else{
            setMessageError("")
            setShowError(false)
            setNumeroAlertas(alertas[0].full_count)
            setLoader(false)
            setAlertas(alertas)
            setCountItem(alertas[0].full_count)
        }
    },[alertas])

    const eliminarAlertas=()=>{
        if(listaAlerta.length===0){
            console.log("SELECCIONE ALGUNA ALERTA")
        }else{

            listaAlerta.map((data)=>{
                deleteAlerta(data,token)
            })

            toast.success('ALERTAS ELIMINADAS', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
                theme: "colored",
            })
            const interval = setInterval(() => {
                clearInterval(interval)
            }, 2000)
        }
    }
    const eliminarAlerta = (data) =>{
        deleteAlerta(data,token).then((response)=>{
            if(response.status === 200){
                toast.success('ALERTA ELIMINADA', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:2000,
                    theme: "colored",
                })
                const interval = setInterval(() => {
                    clearInterval(interval)
                }, 2000)
            }
        })
    }
    const handleSelectPage = (e)=>{
        setSize(e.target.value)
    }
    return (
        <>
        <main className='  flex flex-col justify-between mx-[70px]'>
            <div className='flex items-center justify-between py-7 px-10'>
                <div >
                    <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Alertas</h1>
                    <p className='text-3sm font-semibold text-gray-500'>Aquí puedes revisar tus alertas</p>
                </div>
            </div>
            <div className='pl-12'>
                <button onClick={eliminarAlertas} className="border-green-700 bg-red-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-md px-5 py-2 text-center">Eliminar</button>
            </div>

        </main>
        <div className="flex justify-center">
        <div className="overflow-x-auto w-[90%] sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full text-center leading-normal">
                        <thead className="border bg-gray-800 ">
                            <tr className=''>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    #
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4 ">
                                    Tipo de Alerta
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    Descripción 
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    Invernadero
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    Fecha
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    Hora
                                </th>
                                <th scope="col" className="border-gray-200 bg-gray-200 text-center text-xs font-bold text-gray-600 uppercase tracking-wider px-6 py-4">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            alertas.map((data,index)=>{
                                return (
                                    <tr className="bg-white border-b" key={index}>
                                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold">
                                        <input type="checkbox" className='' value={data.id_alerta} onChange={handleOnChange}></input>
                                        {/* {index+1} */}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        {data.nombre_alerta}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        {data.descripcion_alerta} 
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        {data.nombre_invernadero}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        { moment(data.created_at).format("YYYY-MM-DD")}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        { moment(data.created_at).format("h:mm:ss")}
                                    </td>
                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                        <button onClick={()=>eliminarAlerta(data.id_alerta)} className="text-white"type="button">
                                            <div className='bg-red-200 rounded-full px-2 py-2'>
                                                <BiTrash className="text-xl text-red-600" />
                                            </div>
                                        </button>
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
                        Mostrando {alertas.length} de {countItem} Alertas
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
            <ToastContainer />
        </div>
    </div>
    </>
    )
}

export default AlertaListado