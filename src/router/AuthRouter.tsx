import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "@/utils";
import { useLocation } from "react-router-dom";

const AuthRouter = (props: { children: React.ReactNode }) => {
  const location = useLocation();
  const token = getLocalStorage(import.meta.env.VITE_TOKEN_KEY);
  console.log(token, location.pathname, import.meta.env.VITE_TOKEN_KEY);
  // 判断当前不是登录页且没有 token 时，跳转到登录页
  if (!token && location.pathname !== "/login")
    return <Navigate to="/login" replace />;

  return props.children;
};

export default AuthRouter;
