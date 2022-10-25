import { HashRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Inicio from "./pages/dashboard/Inicio"
import HomePage from "./pages/HomePage"
import Invernadero from "./pages/invernadero/Invernadero"
import PublicRoute from './routes/PublicRoute'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Cultivos from "./pages/cultivo/Cultivos"
import Perfil from "./pages/Perfil"
import NotFoundPage from "./pages/NotFoundPage"
import { UserProvider } from "./context/UserContext"
import ListadoCultvos from "./pages/cultivo/ListadoCultvos"
import CultivoCrear from "./pages/cultivo/CultivoCrear"
import InvernaderoInicio from './pages/invernadero/InvernaderoInicio'
import CultivoInicio from './pages/cultivo/CultivoInicio'
import Cama from "./pages/cama/Cama"
import InvernaderoCrear from "./pages/invernadero/InvernaderoCrear"

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
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Inicio />} />
            </Route>
            
            <Route path="invernadero" element={<Invernadero/>} >
              <Route index element={<InvernaderoInicio />} />
              <Route path="crear" element={<InvernaderoCrear />} />
              <Route path="editar" element={<Inicio />} />
              <Route path="listado" element={<Inicio />} />
            </Route>  
            
            <Route path="cultivo" element={<Cultivos />}>
              <Route index element={<CultivoInicio />} />
              <Route path="crear" element={<CultivoCrear />} />
              <Route path="editar" element={<Inicio />} />
              <Route path="listado" element={<ListadoCultvos />} />
            </Route>

            <Route path="cama" element={<Cama />}>
              <Route index element={<CultivoInicio />} />
              <Route path="crear" element={<CultivoCrear />} />
              <Route path="editar" element={<Inicio />} />
              <Route path="listado" element={<ListadoCultvos />} />
            </Route>
            <Route path="perfil" element={<Perfil />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </UserProvider>
    </div>
  )
}

export default App
