import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Solicitud from "./pages/Solicitud";
import Juegos from "./pages/Juegos";
import MisPenalizaciones from "./pages/MisPenalizaciones";
import Detalle from "./pages/Detalle";
import AdminDashboard from "./admin/AdminDashboard";
import SideBar from "./admin/layout/SideBar";
import GestionAdmin from "./admin/GestionAdmin";
import PenalizacionesAdmin from "./admin/PenalizacinonesAdmin";
import AdminConfiguracion from "./admin/AdminConfiguracion";
import FooterLayout from "./layout/FooterLayout";
import NavbarLayout from "./layout/NavbarLayout";
import MisPrestamos from "./pages/MisPrestamos";
import Inicio from "./pages/Inicio";
import Main from "./auxiliar/Main";
import Solicitudes from "./auxiliar/Solicitudes";
import Penalizar from "./auxiliar/Penalizar";
import Inventario from "./auxiliar/Inventario";
import Devolucion from "./auxiliar/Devolucion";
import Historial from "./auxiliar/Historial";
import Login from "./auth/Login";
import Registrar from "./auth/Registrar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FooterLayout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registrar />} />
               <Route path="juegos" element={<Juegos />} />
            <Route element={<NavbarLayout />}>
              <Route path="solicitud" element={<Solicitud />} />
              <Route path="inicio" element={<Inicio />} />
              <Route path="prestamos" element={<MisPrestamos />} />
              <Route path="penalizaciones" element={<MisPenalizaciones />} />
              <Route path="detalle" element={<Detalle />} />
            </Route>
          </Route>

          <Route path="/auxiliar">
            <Route index element={<Main />} />
            <Route path="solicitudes" element={<Solicitudes />} />
            <Route path="penalizar" element={<Penalizar />} />
            <Route path="inventario" element={<Inventario />} />
            <Route path="devolucion" element={<Devolucion />} />
            <Route path="historial" element={<Historial/>} />
          </Route>

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
