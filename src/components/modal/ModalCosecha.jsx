import React,{ useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getCosecha, updateCosecha } from '../../services/cosecha'
import { useEffect } from 'react'
import { useState } from 'react'

const ModalCosecha = ({idCama}) => {

    const {setShowModalCosecha,setCounterRender,token} = useContext(UserContext)
    const navigate = useNavigate()
    const { register, handleSubmit,setValue, formState: { errors }} = useForm();
    const [cosecha,setCosecha] = useState([])
    const [perdida,setPerdida] = useState(0)
    const [errorMessage,setErrorMessage] = useState("La perdida debe ser menor al total, ingrese un valor menor")
    const [showError,setShowError] = useState(false)
    useEffect(()=>{
        getCosecha(idCama,token)
        .then((response)=>{
            setCosecha(response.data)
            setPerdida(response.data.perdida_cosecha)
            setValue("perdida_cosecha",response.data.perdida_cosecha)
        })
        .catch((error)=>{console.log(error)})
    },[])

    const onSubmit = (data) =>{
        setShowModalCosecha(false)
        updateCosecha(cosecha.id_cosecha,data,token)
        .then(()=>{
            setCounterRender(1)
            toast.success('COSECHA ACTUALIZADA', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2000,
                theme: "colored",
            })
            const interval = setInterval(() => {
                clearInterval(interval)
            }, 2000)
        })
    }

const inputCapture = (e) =>{
    e.target.value > cosecha.cantidad_cosecha ? setShowError(true) : setShowError(false)
}

return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold"> Registrar Cosecha ({cosecha.nombre_cama})</h3>
                    <button onClick={() =>setShowModalCosecha(false)} className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <h1>x</h1>
                        </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col whitespace-normal">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='w-full px-8 py-4 flex flex-col items-center overflow-hidden gap-4 '>
                            <span className="py-2 text-gray-700 font-bold text-2xl ">
                                Total Cosecha
                            </span>
                            <span className="my-4 text-gray-800 text-3xl  font-semibold">
                                {cosecha.cantidad_cosecha}
                            </span>
                            <div className='flex flex-col text-[#505568] w-full'>
                                <label className='py-2 text-gray-700  font-bold text-[16px]'>Cosecha Perdida</label>
                                <input {...register("perdida_cosecha",{max:cosecha.cantidad_cosecha})} onChange={inputCapture} className="appearance-none rounded-lg border border-gray-400 pr-4 pl-2 py-2 w-full bg-[#DFEBE5] text-lg placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"  type="text" placeholder="Ingrese Perdida"/>
                                {errors?.perdida_cosecha?.type === "max" && <p className='text-red-500 text-sm italic pt-4'>{errorMessage}</p>}
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button type="button" onClick={() => setShowModalCosecha(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-green-500 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
                                Registrar
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-5 fixed inset-0 z-40 bg-gray-200  "></div>
        <ToastContainer />
    </>
  )
}

export default ModalCosecha