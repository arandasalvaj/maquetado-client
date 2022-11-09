import { HashRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Inicio from "./pages/dashboard/Inicio"
import HomePage from "./pages/HomePage"
import Invernadero from "./pages/invernadero/Invernadero"
import PublicRoute from './routes/PublicRoute'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Cultivos from "./pages/cultivo/Cultivos"
import Perfil from "./pages/perfil/Perfil"
import NotFoundPage from "./pages/NotFoundPage"
import { UserProvider } from "./context/UserContext"
import ListadoCultvos from "./pages/cultivo/ListadoCultvos"
import CultivoCrear from "./pages/cultivo/CultivoCrear"
import InvernaderoDashboard from './pages/invernadero/InvernaderoDashboard'
import Cama from "./pages/cama/Cama"
import InvernaderoCrear from "./pages/invernadero/InvernaderoCrear"
import InvernaderoEditar from "./pages/invernadero/InvernaderoEditar"
import InvernaderoListado from "./pages/invernadero/InvernaderoListado"
import CamaInicio from "./pages/cama/CamaInicio"
import VerificarEmail from "./pages/auth/VerificarEmail"
import RecoveryPassword from "./pages/auth/RecoveryPassword"
import ChangePassword from "./pages/auth/ChangePassword"
import CamaDetalle from "./pages/cama/CamaDetalle"
import Perfilindex from "./pages/perfil/Perfilindex"
import CultivoDetalle from "./pages/cultivo/CultivoDetalle"

function App() {
  return (
    <div className="bg-white">
      <UserProvider> 
        <HashRouter>
          <Routes>
            <Route index element={<HomePage />} />

            <Route path='/' element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Register />} />
              <Route path="verify/email/:token" element={<VerificarEmail />} />
              <Route path="recovery/password/:token" element={<ChangePassword/>} />
              <Route path="recovery/password" element={<RecoveryPassword/>} />
            </Route>

            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Inicio />} />
            </Route>
            
            <Route path="invernadero" element={<Invernadero/>} >
              <Route index element={<InvernaderoListado />} />
              <Route path="crear" element={<InvernaderoCrear />} />
              <Route path="editar" element={<InvernaderoEditar />} />
              <Route path=":invernaderoId" element={<InvernaderoDashboard />} />
            </Route>  

            <Route path="cultivo" element={<Cultivos />}>
              <Route index element={<ListadoCultvos />} />
              <Route path="crear" element={<CultivoCrear />} />
              <Route path="editar" element={<Inicio />} />
              <Route path=":idCultivo" element={<CultivoDetalle />} />
            </Route>
           
            <Route path="cama" element={<Cama />}>
              <Route index element={<CamaInicio />} />
              <Route path="crear" element={<CultivoCrear />} />
              <Route path="editar" element={<Inicio />} />
              <Route path="listado" element={<ListadoCultvos />} />
              <Route path="detalle" element={<CamaDetalle />} />
              <Route path="camas" element={<CamaDetalle />} />
            </Route>
            <Route path="perfil" element={<Perfilindex />}>
              <Route index element={<Perfil />} />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </UserProvider>
    </div>
  )
}

export default App
