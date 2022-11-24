import React from 'react'
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MainTableList = ({nombre,pathname,busqueda,handleBuscar}) => {

  return (
    <main className='  flex flex-col justify-between mx-[70px]'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div >
                <h1 className='text-4xl font-semibold leading-relaxed text-gray-800'>Listado de {nombre}</h1>
                <p className='text-3sm font-semibold text-gray-500'>Visualiza y crea {nombre} aquí</p>
            </div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col items-center  justify-between ml-11">
            <div className='flex'>
                <div className="relative">
                    <select  className="rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-green-800">
                        <option value={0}>{nombre}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <RiArrowDownSLine />
                    </div>
                </div>
                <div className="relative ml-5">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <RiSearchLine  className="h-4 w-4 fill-current text-gray-500"/>
                    </span>
                    <input placeholder={"Buscar "+nombre} onChange={handleBuscar} value={busqueda} className="appearance-none rounded-xl  border border-gray-400 block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800" />
                </div>
            </div>
            <div className='pr-10'>
            <Link to={pathname} className="border-green-700 bg-green-700 text-white rounded-lg  font-semibold shadow-md shadow-gray-300 text-md px-5 py-2 text-center transition duration-300 transform hover:scale-110">Crear {nombre}</Link>
            </div>
        </div>
  </main>
  )
}

export default MainTableList