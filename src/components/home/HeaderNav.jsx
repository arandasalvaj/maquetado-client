import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import Inicio from '../../pages/dashboard/Inicio'

const HeaderNav = () => {
  const {isAuth,auth,setAuth} = useContext(UserContext)
  
    useEffect(()=>{
      isAuth()
    },[])

  const sessionActive=()=>{
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
        <>
          <div className="relative flex items-center justify-between ">
            <div className="flex items-center">
              <a href="/"aria-label="Go home" title="Company" className="inline-flex items-center">
                <img className="w-[160px] h-[85px]  object-contain " src='https://i.postimg.cc/pTVKL5pW/LOGOMHGLOBAL.png'></img>
              </a>
            </div>
              <ul className="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <Link to={'/invernadero'} element=''><h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Dashboard</h1></Link> 
                  </li>
                  <li>
                    <a href='/' onClick={handleLogout} ><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400  focus:shadow-outline focus:outline-none'>Salir</h1></a>
                  </li>
              </ul>
            <div className="lg:hidden">
              <ul className="flex items-center  space-x-8 lg:flex">
                  <li>
                    <Link to={'/invernadero'} element={<Inicio/>}> <h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Dashboard</h1></Link> 
                  </li>
                  <li>
                    <a href='/'  onClick={handleLogout} ><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400 focus:shadow-outline focus:outline-none'>Salir</h1></a>
                  </li>
              </ul>
            </div>
          </div>
        </>
      )
  }
  const sessionDesactive=()=>{
      return (
        <>
          <div className="relative flex items-center justify-between ">
            <div className="flex items-center">
            <a href="/"aria-label="Go home" title="Company" className="inline-flex items-center">
              <img className="w-[160px] h-[85px]  object-contain " src='https://i.postimg.cc/pTVKL5pW/LOGOMHGLOBAL.png'></img>
            </a>
            </div>
              <ul className="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <Link to={'/registro'} element=''><h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Registrarse</h1></Link> 
                  </li>
                  <li>
                    <Link to={'/login'} element=''><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400  focus:shadow-outline focus:outline-none'>Iniciar sesi??n</h1></Link>
                  </li>
              </ul>
            <div className="lg:hidden">
              <ul className="flex items-center  space-x-8 lg:flex">
                  <li>
                    <Link to={'/registro'} element=''><h1 className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#406343]'>Registrarse</h1></Link> 
                  </li>
                  <li>
                    <Link to={'/login'} element=''><h1 className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#406343] -accent-400 focus:shadow-outline focus:outline-none'>Iniciar sesi??n</h1></Link>
                  </li>
              </ul>
            </div>
          </div>
        </>
      )
  }
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      {auth?sessionActive():sessionDesactive()}
    </div>
  );
}

export default HeaderNav