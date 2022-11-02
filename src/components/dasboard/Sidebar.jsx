import React, { useContext, useState } from 'react'
import { RiMenu3Fill, RiCloseLine,RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GiPlantWatering } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { UserContext } from '../../context/UserContext';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    const {setAuth,user,setCounter} =useContext(UserContext)
    
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
          className={`fixed top-0 w-3/4 xl:left-0 md:w-80 h-full bg-[#406343] p-8 flex flex-col justify-between z-50 transition-all ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <div className='grid items-center '>
            <div className=' mx-auto pt-10 sm:pt-0'>
            <Link to={'/dashboard/inicio'} className='inline-flex text-[#ECE7B4] transition-colors  text-3xl font-bold tracking-wide uppercase'>
                  MH Global</Link>
            </div>
            <ul className='py-20 sm:py-56 grid items-center justify-center gap-5'>
              <li>
                <Link to={'/dashboard'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <MdOutlineSpaceDashboard />
                  Inicio</Link>
              </li>
              <li>
              <Link to={'../invernadero'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <TbBuildingWarehouse />
                  Invernadero</Link>
              </li>
              <li>
              <Link to={'../cultivo'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <GiPlantWatering />
                  Cultivos</Link>
              </li>
              <li>
              <Link to={'../perfil'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <CgProfile />
                  Perfil</Link>
              </li>
            </ul>

    
          </div>
          <div className="flex items-center gap-4 mx-auto">
            <img
              className="w-10 h-10 object-cover rounded-full ring-4 ring-white"
              src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
              alt=""
            />
            <div>
              <h5 className="font-medium text-[#ECE7B4]">{user.nombre_usuario} {user.apellido_usuario}</h5>
              <p className="text-sm text-white">{user.rol_usuario === "1"}</p>
            </div>
    
            <Link to={'/'} onClick={handleLogout}><RiLogoutBoxRLine className="text-white h-10 w-10"/></Link>
          </div>
       
          <button onClick={toggleMenu}className="fixed bottom-6 right-6 bg-gray-100 rounded-full p-4 xl:hidden">{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      );
}

export default Sidebar