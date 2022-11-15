import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInvernadero } from '../../services/invernadero';
import 'mapbox-gl/dist/mapbox-gl.css';
import InvernaderoListado from './InvernaderoListado';
import { IoChevronBack } from 'react-icons/io5'

const InvernaderoEditar = () => {
  const { register, handleSubmit, formState: { errors } ,setValue,setFocus,watch } = useForm();
  const navigate = useNavigate()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];


  const [value, setValues] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [coordenadas,setCoordenadas] = useState({lat:-22.441183,long:-68.90638})

  // const [viewState, setViewState] = useState({
  //     longitude: coordenadas.long,
  //     latitude: coordenadas.lat,
  //     zoom: 15
  // })

  const handleChange = async (event) => {
    setValues(event.target.value);

    // try {
    //   const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiYXJhbmRhc2FsdmFqIiwiYSI6ImNsYWVkc2FoYjB0ZzEzcnBlNGZ3ajlucDEifQ.yTtMDd1mUFZDUtiV8txuRw&autocomplete=true`;
    //   const response = await fetch(endpoint);
    //   const results = await response.json();
    //   setSuggestions(results?.features);
    //   setCoordenadas({lat:results.features[0].center[1],long:results.features[0].center[0]})
    //   setViewState({longitude: results.features[0].center[0], latitude: results.features[0].center[1], zoom: 15})
    // } catch (error) {
    //   console.log("Error en peticion Https, ", error);
    // }


    // <div className='flex flex-col z-20 justify-center items-center pt-4'>
    //   <Map  mapboxAccessToken='pk.eyJ1IjoiYXJhbmRhc2FsdmFqIiwiYSI6ImNsYWVkc2FoYjB0ZzEzcnBlNGZ3ajlucDEifQ.yTtMDd1mUFZDUtiV8txuRw' {...viewState} style={{width: 400, height: 400}} onMove={evt => setViewState(evt.viewState)} mapStyle="mapbox://styles/mapbox/streets-v9">
    //       <Marker longitude={coordenadas.long} latitude={coordenadas.lat}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg></Marker>
    //   </Map>
    // </div>


  }
    const onSubmit=(data)=>{
      delete data.ubicacion_invernadero
      const nuevaDireccion = watch("ubicacion_invernadero")
      
      data.ubicacion_invernadero = nuevaDireccion
      addInvernadero(data,id_usuario,token)
      .then((response) =>{
        toast.success('Invernadero creado', {
          position: toast.POSITION.TOP_CENTER
        })
        const interval = setInterval(() => {
          navigate('/invernadero')
          clearInterval(interval)
        }, 4000)
      })
      .catch((error)=>{
        setShowError(true)
        setLoader(false)
        if(error.response.status === 404 ){
          setMessageError(error.response.data.message)
          throw error.response.data.message
        }
        if(error.response.status === 409 ){
          setMessageError(error.response.data.error)
          throw error.response.data.message
        }
      })
    }

    const vaciarInput = ()=>{
      setValue("nombre_invernadero",'')
      setValue('tamano_invernadero','')
      setValue('ubicacion_invernadero','')
      setFocus('nombre_invernadero')
    }

  return (
    <>
      <div className=' grid grid-cols-12'> 
        <div className='col-span-2 flex pl-16'>
          <Link to={`../`} element={<InvernaderoListado />} className=' bg-white border-2 border-gray-300 rounded-full py-2 px-2 plex justify-center items-center' >
            <IoChevronBack className='w-10 h-10 text-gray-500 '/>
          </Link>
        </div>
      </div>

    <div className='flex flex-col justify-center items-center'>

      <h1 className='text-5xl font-semibold text-center py-10'>Registrar Invernadero</h1>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-xl bg-white border border-gray-300 mb-5'>
            <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
              <h1 className='text-xl font-semibold'>Información general</h1>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4 grid-flow-row'>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Nombre</label>
                    <input  {...register("nombre_invernadero", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "  type="text" placeholder="Ingrese nombre"/>
                    {errors.nombre_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                </div>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Tamaño (m²)</label>
                    <input  {...register("tamano_invernadero", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese tamaño"/>
                    {errors.tamano_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                </div>
              </div>
              <div className='flex flex-col text-[#505568] col-span-2 px-4'>
              <label className='py-2 text-[#406343] font-bold'>Dirección</label>
                  <input {...register("ubicacion_invernadero")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingrese dirección" value={value} onChange={handleChange} autoComplete="off"/>
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ubicación es requerida</p>}
                  {suggestions?.length > 0 && (
                      <div className='bg-white w-[400px] py-2 px-4 z-50'>
                          {suggestions.map((suggestion, index) => {
                              return (
                              <div className=' hover:text-gray-900 hover:bg-gray-100  w-max-[400px] cursor-pointer py-2 shadow-orange-300' key={index} onClick={() => { setValues(suggestion.place_name); setSuggestions([]);}}>
                                  {suggestion.place_name}
                              </div>
                              )
                          })}
                      </div>
                  )}
              </div>
              <div className='flex gap-4'>
                <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
                  <label className='py-2 text-[#406343] font-bold'>Inicio de Temporada</label>
                  <input  {...register("inicio_temporada", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" />
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La fecha de Inicio de Temporada es requerida</p>}
                </div>
                <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
                  <label className='py-2 text-[#406343] font-bold'>Termino de Temporada</label>
                  <input  {...register("termino_temporada", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" />
                  {errors.ubicacion_invernadero?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La fecha de Termino de Temporada es requerida</p>}
                </div>
              </div>
            <div className='flex justify-center gap-16 pl-10'>
              <button  type='submit' className='w-[250px] my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
              <button  onClick={vaciarInput} className='w-[250px] my-5 py-2 bg-red-500 hover:bg-red-600 shadow-lg text-white font-semibold rounded-lg' >Vaciar</button>
              <ToastContainer />
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default InvernaderoEditar