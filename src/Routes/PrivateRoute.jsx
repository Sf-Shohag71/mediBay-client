import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
        <p>&nbsp;Loading...</p>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return (
    <Navigate to="/login" replace>
      {children}
    </Navigate>
  );
};

export default PrivateRoute;
