import { RiSoundcloudLine } from "react-icons/ri";
import React, { useContext, useEffect, useState } from 'react';
import GraficosIndicadores from "../../components/invernadero/GraficosIndicadores";
import { UserContext } from "../../context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import CamaInicio from "./CamaInicio";
import IndicadoresCamas from "../../components/camas/IndicadoresCamas";

const CamaDetalle = () => {
  return (
    <>
  <IndicadoresCamas/>
  <GraficosIndicadores/>
  <GraficosIndicadores/>
  <ToastContainer/>
    </>
  )
}

export default CamaDetalle