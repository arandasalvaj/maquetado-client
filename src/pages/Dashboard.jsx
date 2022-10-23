import Navbar from '../components/dasboard/Navbar'
import Sidebar from '../components/dasboard/Sidebar'
import React, { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

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
        <main className="lg:pl-[390px] pt-[89px] bg-[#F3EFCC] z-30">
          <Outlet/>
        </main>
      </div>
      </>
    )
  }
}

export default Dashboard