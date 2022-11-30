import React,{ useState } from 'react'
import { useForm } from 'react-hook-form';
import { editarPerfil } from '../../services/perfil';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {

    const { register, handleSubmit, formState: { errors },setValue,watch} = useForm();
    
    const loggedUser = window.localStorage.getItem('loggedUser')
    const {id_usuario} = JSON.parse(loggedUser)
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]
    const [currentUsuario, setCurrentUsuario]=useState(JSON.parse(loggedUser))
    const [nombre , setNombre] = useState(currentUsuario.nombre_usuario)
    const [apellido, setApellido]=useState(currentUsuario.apellido_usuario)
    const [rut,setRut]=useState(currentUsuario.rut_usuario)
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        
        if(currentUsuario.nombre_usuario === data.nombre_usuario){
            delete data.nombre_usuario
        }
        if(currentUsuario.apellido_usuario === data.apellido_usuario){
            delete data.apellido_usuario
        }
        if(currentUsuario.rut_usuario === data.rut_usuario){
            delete data.rut_usuario
        }
        if(currentUsuario.telefono_usuario === null ){
            if(watch("telefono_usuario")===""){
                delete data.telefono_usuario
            }
        }else{
            data["telefono_usuario"]=data.telefono_usuario
        }
        if(Object.keys(data).length > 0){
            editarPerfil(data,id_usuario,token)
            .then((response)=>{
                window.localStorage.setItem('loggedUser',JSON.stringify(response.data))
                setCurrentUsuario(response.data)
                toast.success('PERFIL ACTUALIZADO', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:2000,
                    theme: "colored",
                })
                const interval = setInterval(() => {
                    navigate('/perfil')
                    clearInterval(interval)
                }, 2000)
            })
            .catch((error)=>{
            })
        }
    }

return (
    <div className="container mx-auto my-28">
        <div className="bg-white relative shadow-lg border-2 rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div className="flex justify-center">
                <img src="https://i.ibb.co/k5c1QjZ/png-clipart-paper-logo-customer-satisfaction-blue-face.png" alt="" className=" rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110 object-cover" />
            </div>
            <div className="mt-16">
                <h1 className="font-bold text-center text-3xl text-gray-900">{currentUsuario.nombre_usuario} {currentUsuario.apellido_usuario}</h1>
                <div className="my-4 px-6">
                    <div href="#" className="text-white font-bold block rounded-lg text-center  leading-6 px-4 py-2 bg-green-700  "><span className="font-bold text-2xl">Agricultor</span></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    {<div className='w-full px-8 py-4 flex flex-col items-center overflow-hidden gap-4 '>
                        <div className='flex flex-col text-[#505568] w-full'>
                            <label className='py-2 text-gray-700  font-bold text-[16px]'>Nombre</label>
                            <input value={nombre} {...register("nombre_usuario", {required:true})} onChange={(e)=>setNombre(e.target.value)} className="appearance-none rounded-lg border border-gray-400 pr-4 pl-2 py-2 w-full bg-[#DFEBE5] text-lg placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"  type="text" placeholder="Ingrese Nombre"/>
                            {errors.nombre_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                        </div>
                        <div className='flex flex-col text-[#505568] w-full'>
                            <label className='py-2 text-gray-700  font-bold text-[16px]'>Apellido</label>
                            <input value={apellido} {...register("apellido_usuario", {required:true})} onChange={(e)=>setApellido(e.target.value)} className="appearance-none rounded-lg border border-gray-400 pr-4 pl-2 py-2 w-full bg-[#DFEBE5] text-lg placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"  type="text" placeholder="Ingrese Apellido"/>
                            {errors.apellido_usuario?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Apellido es requerido</p>}
                        </div>
                        <div className='flex flex-col text-[#505568] w-full '>
                            <label className='py-2 text-gray-700  font-bold text-[16px]'>Rut</label>
                            <input value={rut} {...register("rut_usuario", {required:true})} onChange={(e)=>setRut(e.target.value)} maxLength={10} className="appearance-none rounded-lg border border-gray-400 pr-4 pl-2 py-2 w-full bg-[#DFEBE5] text-lg placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"  type="text" placeholder="Ingrese Rut"/>
                            {errors.rut_usuario?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El Rut es requerido</p>}
                        </div>
                        <div className='flex flex-col text-[#505568] w-full'>
                            <label className='py-2 text-gray-700 font-bold text-[16px]'>Telefono</label>
                            <div className="relative">
                                <p className='text-lg text-black h-full absolute inset-y-0 left-0 flex items-center pl-2 font-semibold'>+56</p>
                                <input  {...register("telefono_usuario")}  maxLength={10}  className="appearance-none rounded-lg border border-gray-400 block pl-11 pr-8 py-2 w-full bg-[#DFEBE5] text-lg placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"  type="number" placeholder="Ingrese Telefono"/>
                            </div>
                        </div>
                    </div>}
                    <div className='flex justify-center gap-16 pl-10'>
                        <button type='submit' className=' w-[250px] my-5 py-2 border-green-700 bg-green-700 shadow-lg text-white font-semibold rounded-lg' >Actualizar</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Perfil