import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const PublicRoute = () => {

  const {auth,isAuth} =useContext(UserContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(isAuth()){navigate('/dashboard/inicio')}
  },[]) 

    if (!auth) {
      return (
        <>
          <main >
            <Outlet/>
          </main>
        </>
      )
    }else{
      navigate('/dashboard')
    }

}

export default PublicRoute