import { BrowserRouter, Route, Routes } from "react-router";
import AdminDashboard from "./admin/AdminDashboard";
import SideBar from "./admin/plantilla/SideBar";
import GestionAdmin from "./admin/GestionAdmin";
import PenalizacinonesAdmin from "./admin/PenalizacinonesAdmin";
import AdminConfiguracion from "./admin/AdminConfiguracion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
