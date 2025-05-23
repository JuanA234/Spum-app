import { BrowserRouter, Route, Routes } from "react-router";
import AdminDashboard from "./admin/AdminDashboard";
import SideBar from "./admin/plantilla/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SideBar />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
