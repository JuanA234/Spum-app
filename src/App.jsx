
import AdminDashboard from "./admin/AdminDashboard";
import SideBar from "./admin/plantilla/SideBar";
import GestionAdmin from "./admin/GestionAdmin";
import PenalizacionesAdmin from "./admin/PenalizacionesAdmin";
import AdminConfiguracion from "./admin/AdminConfiguracion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registrar from "./auth/Registrar";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registrar" element={<Registrar/>} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/admin" element={<SideBar />}>
            <Route index element={<AdminDashboard />} />
            <Route path="usuarios" element={<GestionAdmin />} />
            <Route path="penalizaciones" element={<PenalizacionesAdmin />} />
            <Route path="configuracion" element={<AdminConfiguracion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
