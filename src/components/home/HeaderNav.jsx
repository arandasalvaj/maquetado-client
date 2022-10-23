import React from 'react'
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between ">
        <div className="flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              MH Global
            </span>
        </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                  <Link to={'/registro'} element=''><h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Registrarse</h1></Link> 
              </li>
              <li>
                  <Link to={'/login'} element=''><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400  focus:shadow-outline focus:outline-none'>Iniciar sesión</h1></Link>
              </li>
          </ul>
        <div className="lg:hidden">
          <ul className="flex items-center  space-x-8 lg:flex">
              <li>
              <Link to={'/registro'} element=''><h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Registrarse</h1></Link> 
              </li>
              <li>
                  <Link to={'/login'} element=''><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400 focus:shadow-outline focus:outline-none'>Iniciar sesión</h1></Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav