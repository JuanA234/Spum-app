import useAuth from '../auth/hooks/useAuth';


export default function LogoutButton() {
 const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({}); // limpia el contexto
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
  };

  return (
    <button className="btn btn-danger ms-2" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}
