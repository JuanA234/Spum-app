import React from 'react'
import useAuth from '../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
 const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({}); // limpia el contexto
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <button className="btn btn-danger ms-2" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}
