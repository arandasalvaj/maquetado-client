import React, { createContext,useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [auth,setAuth]=useState(false)
    const [user,setUser]=useState(null)
    const [url,setUrl]=useState('https://testkinglioncalama.ga/')
    const [counter,setCounter]= useState(0)


    const isAuth= ()=>{
        const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
        const loggedUser = window.localStorage.getItem('loggedUser')
        if (loggedUser && token){
            setUser(JSON.parse(loggedUser))
            sesisonUser()
            return true
        }else{
            window.localStorage.removeItem('loggedUser')
            setAuth(false)
            return false
        }
    }

    const addCounter = () =>{
        setCounter(counter+1)
    }

    const sesisonUser = () =>{
        setAuth(true)
    }
    return (
        <UserContext.Provider value={{
            user,
            setUser,auth,setAuth,isAuth,addCounter,counter,setCounter,sesisonUser,url}}>
            {children}
        </UserContext.Provider>
    )
}

