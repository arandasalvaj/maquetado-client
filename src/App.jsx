import { HashRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserContext"

// AUTH

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import VerificarEmail from "./pages/auth/VerificarEmail"
import RecoveryPassword from "./pages/auth/RecoveryPassword"
import ChangePassword from "./pages/auth/ChangePassword"

// DASHBOARD

import Dashboard from "./pages/dashboard/Dashboard"
import Inicio from "./pages/dashboard/Inicio"

// INVERNADERO

import InvernaderoDetalle from './pages/invernadero/InvernaderoDetalle'
import Invernadero from "./pages/invernadero/Invernadero"
import InvernaderoCrear from "./pages/invernadero/InvernaderoCrear"
import InvernaderoEditar from "./pages/invernadero/InvernaderoEditar"
import InvernaderoListado from "./pages/invernadero/InvernaderoListado"

// CULTIVO

import Cultivos from "./pages/cultivo/Cultivos"
import CultivoEditar from "./pages/cultivo/CultivoEditar"
import CultivoListado from "./pages/cultivo/CultivoListado"
import CultivoCrear from "./pages/cultivo/CultivoCrear"
import CultivoDetalle from "./pages/cultivo/CultivoDetalle"

// CAMA

import Cama from "./pages/cama/Cama"
import CamaEditar from "./pages/cama/CamaEditar"
import CamaDetalle from "./pages/cama/CamaDetalle"
import CamaListado from "./pages/cama/CamaListado"
import CamaCrear from "./pages/cama/CamaCrear"

// PULBIC 

import HomePage from "./pages/HomePage"
import PublicRoute from './routes/PublicRoute'
import NotFoundPage from "./pages/NotFoundPage"

//PERFIL

import Perfil from "./pages/perfil/Perfil"
import Perfilindex from "./pages/perfil/Perfilindex"

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
              <Route path="editar/:idInvernadero" element={<InvernaderoEditar />} />
              <Route path="detalle/:idInvernadero" element={<InvernaderoDetalle />} />
            </Route>  

            <Route path="cultivo" element={<Cultivos />}>
              <Route index element={<CultivoListado />} />
              <Route path="crear" element={<CultivoCrear />} />
              <Route path="editar/:idCultivo" element={<CultivoEditar />} />
              <Route path="detalle/:idCultivo" element={<CultivoDetalle />} />
            </Route>
           
            <Route path="cama" element={<Cama />}>
              <Route index element={<CamaListado />} />
              <Route path="crear" element={<CamaCrear />} />
              <Route path="editar/:idCama" element={<CamaEditar />} />
              <Route path="detalle/:idCama" element={<CamaDetalle />} />
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
