import { BrowserRouter, Route, Routes } from "react-router";
import Index from './pages/Index';
import Solicitud from './pages/Solicitud';
import Juegos from './pages/Juegos';
import MisPrestamos from './pages/MisPrestamos';
import MisPenalizaciones from './pages/MisPenalizaciones';
import Detalle from './pages/Detalle';
import AdminDashboard from "./admin/AdminDashboard";
import Footer from "./components/Footer";
import SideBar from "./admin/plantilla/SideBar";
import GestionAdmin from "./admin/GestionAdmin";
import PenalizacinonesAdmin from "./admin/PenalizacinonesAdmin";
import AdminConfiguracion from "./admin/AdminConfiguracion";
import Inicio from "./pages/Inicio";
import Devolucion from "./auxiliar/Devolucion";
import Main from "./auxiliar/Main";
import Devolucion from "./auxiliar/Devolucion";
import Historial from "./auxiliar/Historial";
import Inventario from "./auxiliar/Inventario";
import Penalizar from "./auxiliar/Penalizar";
import Solicitudes from "./auxiliar/Solicitudes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Footer />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/" element={<Index />} />
            <Route path="/solicitud" element={<Solicitud />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/mis-prestamos" element={<MisPrestamos />} />
            <Route path="/mis-penalizaciones" element={<MisPenalizaciones />} />
            <Route path="/detalle" element={<Detalle />} />
          </Route>

            <Route path="/mainAuxiliar" element={<Main/>} />
            <Route path="/devolucion" element={<Devolucion />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/penalizar" element={<Penalizar />} />
            <Route path="/solicitudes" element={<Solicitudes />} />

          <Route element={<SideBar />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/usuarios" element={<GestionAdmin />} />
            <Route path="/admin/penalizaciones" element={<PenalizacinonesAdmin />} />
            <Route path="/admin/configuracion" element={<AdminConfiguracion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
