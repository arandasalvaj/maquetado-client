import { RiSoundcloudLine } from "react-icons/ri";
import React, { useContext, useEffect, useState } from 'react';
import GraficosIndicadores from "../../components/invernadero/GraficosIndicadores";
import { UserContext } from "../../context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndicadoresCamas from "../../components/camas/IndicadoresCamas";
const CamaDetalle = () => {
  return (
    <>
      <IndicadoresCamas/>
      <div className='flex items-center justify-between py-7 px-10'>
        <div className=" w-full">
            <h1 className='text-4xl font-semibold leading-relaxed text-gray-800 text-center '> Graficos Diario</h1>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
          <GraficosIndicadores titulo="Temperatura del Ambiente"/>
          <GraficosIndicadores titulo="Temperatura del Agua "/>
          <GraficosIndicadores titulo="Porcentaje de humedad"/>
          <GraficosIndicadores titulo="Nivel de CO2 "/>
        </div>
        <ToastContainer/>
    </>
  )
}

export default CamaDetalle