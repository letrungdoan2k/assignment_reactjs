import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../authenticate";

const PrivateAdmin = ({ children }) => {
  const auth = isAuthenticate();
  console.log("auth",auth)
  if (!auth.user || auth.user.role_id !== 1) {
    return <Navigate to="/signin" />;
  }
  return children;
};
export default PrivateAdmin;
