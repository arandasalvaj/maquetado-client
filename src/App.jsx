import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import Invernadero from "./pages/Invernadero"
import PublicRoute from './routes/PublicRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Inicio from "./pages/Inicio"
import Cultivos from "./pages/Cultivos"
import Perfil from "./pages/Perfil"
import NotFoundPage from "./pages/NotFoundPage"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <div className="bg-white">
      <UserProvider> 
        <BrowserRouter>
          <Routes>
          <Route index element={<HomePage />} />
            <Route path='/' element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Register />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="invernaderos" element={<Invernadero/>} />
              <Route path="inicio" element={<Inicio />} />
              <Route path="cultivos" element={<Cultivos />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
