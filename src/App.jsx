import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Solicitud from "./pages/Solicitud";
import Juegos from "./pages/Juegos";
import MisPenalizaciones from "./pages/MisPenalizaciones";
import Detalle from "./pages/Detalle";
import AdminDashboard from "./admin/AdminDashboard";
import SideBar from "./admin/layout/SideBar";
import GestionAdmin from "./admin/GestionAdmin";
import PenalizacionesAdmin from "./admin/PenalizacionesAdmin";
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
import RequireAuth from "./auth/RequireAuth";
import UnauthorizedPage from "./components/UnauthorizedPage";
import NotFound from "./components/NotFound";
import RegisterUser from "./auth/admin/RegisterUser";

function App() {
  return (
    <Routes>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFound />} /> {/* Ruta comodín */}
      <Route path="/" element={<FooterLayout />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registrar />} />
        {/* Estas son las rutas que queremos proteger */}
        <Route element={<RequireAuth allowedRoles={["STUDENT"]} />}>
          <Route path="juegos" element={<Juegos />} />
          <Route path="solicitud" element={<Solicitud />} />
          <Route element={<NavbarLayout />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="prestamos" element={<MisPrestamos />} />
            <Route path="penalizaciones" element={<MisPenalizaciones />} />
            <Route path="detalle" element={<Detalle />} />
          </Route>
        </Route>
        {/* mas rutas a proteger */}
        <Route path="/auxiliar" allowedRoles={["ASSISTANT"]}>
          <Route index element={<Main />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="penalizar" element={<Penalizar />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="devolucion" element={<Devolucion />} />
          <Route path="historial" element={<Historial />} />
        </Route>
      </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/admin" element={<SideBar />}>
          <Route index element={<AdminDashboard />} />
          <Route path="usuarios" element={<GestionAdmin />} />
          <Route path="penalizaciones" element={<PenalizacionesAdmin />} />
          <Route path="configuracion" element={<AdminConfiguracion />} />
        </Route>
      </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/admin/usuarios">
          <Route path="crear" element={<RegisterUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
