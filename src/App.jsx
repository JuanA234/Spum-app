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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FooterLayout />}>
            <Route index element={<Index />} />
            <Route element={<NavbarLayout />}>
              <Route path="solicitud" element={<Solicitud />} />
              <Route path="juegos" element={<Juegos />} />
              <Route path="prestamos" element={<MisPrestamos />} />
              <Route path="penalizaciones" element={<MisPenalizaciones />} />
              <Route path="detalle" element={<Detalle />} />
            </Route>
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
