import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const userInfo = useSelector((state) => state.auth.userInfo);

    return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
