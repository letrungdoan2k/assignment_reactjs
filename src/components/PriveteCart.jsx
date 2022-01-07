import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../authenticate";

const PrivateCart = ({ children }) => {
  const auth = isAuthenticate();  
  if (auth.user) {
    return children
  } else {
    return <Navigate to="/signin" />
  }
};
export default PrivateCart;