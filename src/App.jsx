import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Invernadero from "./pages/Invernadero";

function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="invernaderos" element={<Invernadero/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
