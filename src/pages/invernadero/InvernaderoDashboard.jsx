import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GraficosIndicadores from "../../components/invernadero/GraficosIndicadores";
import IndicadoresPromedio from "../../components/invernadero/IndicadoresPromedio";
import InformacionRendimiento from "../../components/invernadero/InformacionRendimiento";
import { UserContext } from '../../context/UserContext';

const InvernaderoDashboard = () => {
  const{idInvernadero} = useParams()
  const loggedUser = window.localStorage.getItem('loggedUser')
  const {id_usuario} = JSON.parse(loggedUser)
  const {url} =useContext(UserContext)
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const [invernadero,setInvernadero] = useState([])

  useEffect(()=>{
    axios.get(`${url}api/usuarios/${id_usuario}/invernaderos/${idInvernadero}`, {
      headers: {
        'Authorization': token
      }
    }).then((response)=>{
      setInvernadero(response.data)
    })
  },[])


  const fecha = invernadero.created_at
  return (
    <div>
        <IndicadoresPromedio nombre={invernadero.nombre_invernadero} fecha={fecha}/>
        <InformacionRendimiento ubicacion={invernadero.ubicacion_invernadero} />
        <GraficosIndicadores/>
    </div>
  )
}

export default InvernaderoDashboard