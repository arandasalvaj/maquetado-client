import React from 'react'
import GraficosIndicadores from "../../components/invernadero/GraficosIndicadores";
import IndicadoresPromedio from "../../components/invernadero/IndicadoresPromedio";
import InformacionRendimiento from "../../components/invernadero/InformacionRendimiento";

const InvernaderoDashboard = () => {
  return (
    <div>
        <IndicadoresPromedio/>
        <InformacionRendimiento/>
        <GraficosIndicadores/>
    </div>
  )
}

export default InvernaderoDashboard