import React, { useState } from 'react'
import { RiMenu3Fill, RiCloseLine,RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GiPlantWatering } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return (
        <div
          className={`fixed top-0 w-3/4 xl:left-0 md:w-96 h-full bg-[#406343] p-8 flex flex-col justify-between z-50 transition-all ${
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
                <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <MdOutlineSpaceDashboard />
                  Inicio</Link>
              </li>
              <li>
              <Link to={'../dashboard/invernaderos'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <TbBuildingWarehouse />
                  Invernadero</Link>
              </li>
              <li>
              <Link to={'../dashboard/cultivos'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <GiPlantWatering />
                  Cultivos</Link>
              </li>
              <li>
              <Link to={'../dashboard/camas'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiPlantLine />
                  Camas</Link>
              </li>
              <li>
              <Link to={'../dashboard/perfil'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <CgProfile />
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
              <h5 className="font-medium text-[#ECE7B4]">Jean Aranda Salva</h5>
              <p className="text-sm text-white">Calama</p>
            </div>
    
            <Link to={'/'} onClick={""}><RiLogoutBoxRLine className="text-white h-10 w-10"/></Link>
          </div>
       
          <button onClick={toggleMenu}className="fixed bottom-6 right-6 bg-gray-100 rounded-full p-4 xl:hidden">{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      );
}

export default Sidebar