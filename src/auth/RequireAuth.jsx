import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth';

export default function RequireAuth({allowedRoles}) {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("Auth context actual:", auth);

return (
  auth?.role && allowedRoles.includes(auth.role)
    ? <Outlet />
    : auth?.accessToken
    ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    : <Navigate to="/login" state={{ from: location }} replace />

    
);



}
