import React, { createContext,useState } from 'react'
export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [showModalCosecha,setShowModalCosecha] = useState(false)
    const [invernaderoContext,setInvernaderoContext]=useState([])
    const [auth,setAuth]=useState(false)
    const [user,setUser]=useState(null)
    const [counter,setCounter]= useState(0)
    const [showModal,setShowModal] = useState(false)
    const [messageError , setMessageError]= useState([])
    const [showError , setShowError]= useState(false)
    const [counterRender,setCounterRender]= useState(0)
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]
    const [estadoSocket,setEstadoSocket] = useState(false)

    const isAuth= ()=>{
        const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]
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
            estadoSocket,
            setEstadoSocket,
            showModalCosecha,
            setShowModalCosecha,
            setCounterRender,
            counterRender,
            setShowError,
            showError,
            messageError,
            setMessageError,
            token,
            showModal,
            setShowModal,
            user,
            setUser,
            auth,
            setAuth,
            isAuth,
            addCounter,
            counter,
            setCounter,
            sesisonUser,
            invernaderoContext,
            setInvernaderoContext
        }}>
            {children}
        </UserContext.Provider>
    )
}

