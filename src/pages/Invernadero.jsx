import GraficosIndicadores from "../components/invernadero/GraficosIndicadores";
import IndicadoresPromedio from "../components/invernadero/IndicadoresPromedio";
import InformacionRendimiento from "../components/invernadero/InformacionRendimiento";
const Invernadero = () => {
  return (
    <>
        <IndicadoresPromedio/>
        <InformacionRendimiento/>
        <GraficosIndicadores/>
    </>
  )
}

export default Invernadero