import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (accessToken && role) {
      setAuth({ accessToken, role });
    }

    setLoading(false); // Marca como cargado
  }, []);

  if (loading) return null; // también puedes mostrar un spinner si prefieres

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
