import type { JSX } from "react";
import { Navigate } from "react-router-dom";
export function AuthGuard({ children }:{ children: JSX.Element }){
  const isAuth = Boolean(localStorage.getItem("token")); // or context / redux
  return isAuth ? children : <Navigate to="/signIn" replace />;
}
