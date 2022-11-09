import Navbar from '../../components/dasboard/Navbar'
import Sidebar from '../../components/dasboard/Sidebar'
import React, { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const Invernadero = () => {
  const {auth,isAuth} =useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuth()){navigate('/login')}
  },[])  

  if (auth) {
    return (
      <>
      <div className="min-h-screen">
        <Sidebar />
        <main className="pl-[20px] pr-[20px] lg:pl-[340px] pt-[64px] h-full bg-[#F8FAFD] z-30">
          <Outlet/>
        </main>
      </div>
      </>
    )
  }
}

export default Invernadero