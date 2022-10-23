import React, { createContext,useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [auth,setAuth]=useState(null)
    const [user,setUser]=useState(null)

    const isAuth= ()=>{
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
        const loggedUser = window.localStorage.getItem('loggedUser')
        if (loggedUser && token){
            setUser(JSON.parse(loggedUser))
            setAuth(true)
            return true
        }else{
            window.localStorage.removeItem('loggedUser')
            setAuth(false)
            return false
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,auth,setAuth,isAuth}}>
            {children}
        </UserContext.Provider>
    )
}

