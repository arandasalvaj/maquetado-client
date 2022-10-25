import Navbar from '../../components/dasboard/Navbar'
import Sidebar from '../../components/dasboard/Sidebar'
import React, { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const Dashboard = () => {

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
        <Navbar />
        <main className="lg:pl-[384px] pt-[64px] bg-gray-100 z-30">
          <Outlet/>
        </main>
      </div>
      </>
    )
  }
}

export default Dashboard