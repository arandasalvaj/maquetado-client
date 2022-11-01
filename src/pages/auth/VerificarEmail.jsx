import React,{ useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyUser } from '../../services/user'

const VerificarEmail = () => {
  const {token} = useParams()
  const [showMessage,setShowMessage] = useState(false)
  const [mensaje,setMensaje] = useState('Presiona el boton para confirmar el correo')
  const handleSubmit = e =>{
    e.preventDefault()
    verifyUser(token).then(({response})=>{
      setMensaje(response.data.message)
      console.log(response.data.message)
      //setMessage(true)
    }).catch((error)=>{
      //setMensaje(response.data.message)
      console.log(error)
    })
  }
  return (
    <>
      <section className=" h-[900px] bg-gray-200">
          <div className="-mx-4 flex items-center justify-center">
            <div className="px-4 grid grid-rows-3">
              <form onSubmit={handleSubmit}>
                <div className='bg-white rounded-lg py-2 px-4 flex flex-col gap-4'>
                  <h1>{mensaje}</h1>
                  <button className='bg-blue-500 p-4 rounded-xl font-semibold text-white' type='submit'>Confirmar</button>
                </div>
              </form>
            </div>
          </div>
      </section>
    </>
  )
}

export default VerificarEmail