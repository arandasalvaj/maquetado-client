import React,{ useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { verifyUser } from '../../services/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerificarEmail = () => {
  const {token} = useParams()
  const navigate = useNavigate()
  const [showMessage,setShowMessage] = useState(false)
  const [mensaje,setMensaje] = useState('Presiona el boton "Confirmar" para confirmar el correo.')

  const handleSubmit = e =>{
    e.preventDefault()

    verifyUser(token).then((response)=>{
      setMensaje(response.data.message)
      setShowMessage(true)

      toast.success('Seras redireccionado al inicio.', {
        position: toast.POSITION.TOP_CENTER
      })

      const interval = setInterval(() => {
        navigate('/')
        clearInterval(interval)
      }, 4000);

    }).catch((error)=>{
      console.log(error)
    })
  }

  if(!showMessage){
    return(
      <>
        <section className=" h-[900px] bg-gray-200 grid ">
            <div className="-mx-4 flex items-center justify-center">
              <div className="px-4 grid grid-rows-3">
                <form onSubmit={handleSubmit}>
                  <div className='bg-white rounded-lg py-2 px-4 flex flex-col gap-4'>
                    <h1 className='text-lg'>{mensaje}</h1>
                    <button className='bg-blue-500 p-4 rounded-xl font-semibold text-white' type='submit'>Confirmar</button>
                  </div>
                </form>
              </div>
            </div>
            <ToastContainer />
        </section>
      </>
    )
  }else{
    //<Link className='bg-blue-500 p-4 rounded-xl font-semibold text-white text-center' to={"/"}>Ir al Inicio</Link>
    return(
      <>
        <section className=" h-[900px] bg-gray-200 grid">
          <div className="-mx-4 flex items-center justify-center">
            <div className="px-4 grid grid-rows-3">
                <div className='bg-white rounded-lg py-2 px-4 flex flex-col gap-4'>
                  <h1 className='text-lg'>{mensaje}</h1>
                </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </>
    )
  }

}

export default VerificarEmail