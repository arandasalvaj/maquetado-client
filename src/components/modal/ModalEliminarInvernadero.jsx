import React,{ useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { deleteInvernadero } from '../../services/invernadero'

const ModalEliminarInvernadero = ({idInvernadero}) => {

    const {setShowModal,setCounterRender,token} = useContext(UserContext)
    const navigate = useNavigate()

    const eliminarInvernadero = () =>{
        setShowModal(false)
        deleteInvernadero(idInvernadero,token)
        .then((response)=>{
            setCounterRender(1)
            toast.success('INVERNADERO ELIMINADO', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
                theme: "colored",
            })
            const interval = setInterval(() => {
                navigate('/invernadero')
                clearInterval(interval)
            }, 2000)
        })
        .catch((error)=>{
        })

    }

  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold"> Eliminar Invernadero</h3>
                    <button onClick={() =>setShowModal(false)} className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <h1>x</h1>
                        </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col whitespace-normal">
                    <h1 className='my-4 text-black text-xl font-bold leading-relaxed text-center' >¿Estás seguro de que deseas eliminar el invernadero?</h1>
                    <span className="my-4 text-slate-500 text-lg leading-relaxed font-semibold">
                        Toda la información relacionada con el invernadero será eliminada.
                    </span>
                        <h1 className='my-4 text-red-500 text-xl font-bold leading-relaxed text-center uppercase' >Esta acción no se puede deshacer</h1>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button type="button" onClick={() => setShowModal(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Cancelar
                    </button>
                    <button onClick={()=>{eliminarInvernadero()}} type="button" className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
                        Eliminar
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div className="opacity-5 fixed inset-0 z-40 bg-gray-200  "></div>
        <ToastContainer />
    </>
  )
}

export default ModalEliminarInvernadero