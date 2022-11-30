import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiMenu3Fill, RiCloseLine,RiLogoutBoxRLine } from "react-icons/ri";
import { TbBuildingWarehouse } from "react-icons/tb";
import { AiOutlineAlert } from "react-icons/ai";
import { GiPlantWatering } from "react-icons/gi";
import { TbPlant2 } from "react-icons/tb";
import { UserContext } from '../../context/UserContext';
import { io } from "socket.io-client";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const {setAuth,user,setCounter,estadoSocket,setEstadoSocket,numeroAlertas,setNumeroAlertas,estadoAlerta,setEstadoAlerta,alertas,setAlertas} =useContext(UserContext)

    useEffect(()=>{
      if(estadoSocket){
        //const socket = io("https://www.tuinvernadero.xyz")
        const socket = io("http://localhost:8000")
        socket.emit('end')
        window.location.reload()
        setEstadoSocket(false)
      }
      if (estadoAlerta){
        setEstadoAlerta(false)
        const socket = io("http://localhost:8000")
        socket.emit("idUsuario",id_usuario)
        socket.on('alertas',(data)=>{
          console.log("ALERTAS:", data)
            if(data.length === 0){
              setNumeroAlertas(0)
              setAlertas([])
              //console.log("SIN ALERTAS:", data)
            }else{
              setNumeroAlertas(data[0]?.full_count)
              setAlertas(data)
              window.localStorage.setItem('numeroAlertas',JSON.stringify(data[0]?.full_count))
              const numAlertas = window.localStorage.getItem('numeroAlertas')

              // console.log('ALERTA REAL:',data[0]?.full_count)
              // console.log('ALERTA REAL:',numAlertas)

              // if(data[0]?.full_count > numAlertas){

              //   toast.warning('HAY NUEVAS ALERTAS', {
              //     position: toast.POSITION.TOP_CENTER,
              //     autoClose:2000,
              //     theme: "colored",
              //   })
              //   const interval = setInterval(() => {
              //       clearInterval(interval)
              //   }, 2000)
              // }

            }
        })
      }
    },[])

    const handleLogout = () =>{
      setAuth(false)
      window.localStorage.removeItem('loggedUser')
      document.cookie.split(";").forEach((c) => { 
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      setCounter(0) 
    }

    return (
        <div
          className={`fixed top-0 w-3/4 lg:left-0 md:w-72 h-full bg-green-700 flex flex-col justify-between z-50 transition-all ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <div className='grid items-center'>

            <div className='mx-auto pt-12'>
              <Link to={'/dashboard/inicio'} className='inline-flex text-white transition-colors  text-3xl font-bold tracking-wide uppercase'>
                    MH Global
              </Link>
            </div>

            <ul className='pt-20 grid items-center justify-center gap-4'>

              <li>
                <Link to={'../invernadero'} className='flex items-center gap-4 text-white hover:bg-[#436b46] transition-colors py-2 px-4 rounded-lg font-bold text-lg'>              
                  <TbBuildingWarehouse className='text-4xl' />
                    Invernadero
                </Link>
              </li>
              <li>
                <Link to={'../cultivo'} className='flex items-center gap-4 text-white hover:bg-[#436b46] transition-colors py-2 px-4 rounded-lg font-bold text-lg'>              
                  <GiPlantWatering className='text-4xl'  />
                    Cultivos
                </Link>
              </li>
              <li>
                <Link to={'../cama'} className='flex items-center gap-4 text-white hover:bg-[#436b46] transition-colors py-2 px-4 rounded-lg font-bold text-lg'>              
                  <TbPlant2 className='text-4xl'  />
                    Camas
                </Link>
              </li>
              <li>
                <Link to={'../perfil'} className='flex items-center gap-4 text-white hover:bg-[#436b46] transition-colors py-2 px-4 rounded-lg font-bold text-lg'>              
                  <CgProfile className='text-4xl' />
                    Perfil
                </Link>
              </li>
              <li>
                <Link to={'../alerta'} className='flex items-center gap-4 text-white hover:bg-[#436b46] transition-colors py-2 px-4 rounded-lg font-bold text-lg'>              
                  <div className='flex gap-3'>
                    <AiOutlineAlert className='text-4xl '  />
                      Alertas
                    <div className='text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-lg'>
                      {numeroAlertas?numeroAlertas:0}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <ToastContainer />
          <div className="flex items-center gap-4 mx-auto pb-12">
            <img className="w-10 h-10 object-cover rounded-full ring-4 ring-white"src="https://i.ibb.co/k5c1QjZ/png-clipart-paper-logo-customer-satisfaction-blue-face.png"alt=""/>
            <div>
              <h5 className="font-medium text-white ">{user.nombre_usuario} {user.apellido_usuario}</h5>
              {user.rol_usuario === 2 ? <p className='text-white font-bold'>Agricultor</p> : <p className='text-white font-bold'>Visitante</p>}
            </div>
            <Link to={'/'} onClick={handleLogout}><RiLogoutBoxRLine className="text-white h-8 w-8"/></Link>
          </div>
          <button onClick={toggleMenu}className="fixed bottom-6 right-6 bg-gray-100 rounded-full p-4 xl:hidden border-solid border-2 border-gray-300">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>

        </div>
      );
}

export default Sidebar