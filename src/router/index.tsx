import React, { Suspense, lazy } from "react";
import Loading from "@/components/Loading";

const lazyLoad = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const MainLayout = lazy(() => import("@/layout/MainLayout"));
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Home = lazy(() => import("@/pages/Home"));
const Demo = lazy(() => import("@/pages/Demo"));
const NoPermission = lazy(() => import("@/pages/ErrorPage/403"));
const NoMatch = lazy(() => import("@/pages/ErrorPage/404"));

const routes = [
  {
    path: "/",
    name: "首页",
    key: "/",
    auth: true,
    element: lazyLoad(MainLayout),
    children: [
      {
        index: true,
        name: "首页",
        key: "/",
        auth: true,
        element: lazyLoad(Home),
      },
      {
        index: false,
        path: "demo",
        name: "Demo",
        key: "/demo",
        auth: true,
        element: lazyLoad(Demo),
      },
      {
        path: "*",
        name: "No Match",
        key: "*",
        element: lazyLoad(NoMatch),
      },
    ],
  },
  {
    index: false,
    path: "login",
    name: "登录",
    key: "/login",
    auth: false,
    element: lazyLoad(AuthLayout),
    children: [
      {
        index: true,
        name: "登录",
        key: "/login",
        auth: true,
        element: lazyLoad(Login),
      },
    ],
  },
  {
    index: false,
    path: "register",
    name: "注册",
    key: "/register",
    auth: false,
    element: lazyLoad(AuthLayout),
    children: [
      {
        index: true,
        name: "登录",
        key: "/login",
        auth: true,
        element: lazyLoad(Register),
      },
    ],
  },
  {
    index: false,
    path: "/403",
    name: "403",
    key: "/403",
    auth: false,
    element: lazyLoad(NoPermission),
  },
  {
    path: "*",
    name: "No Match",
    key: "*",
    element: lazyLoad(NoMatch),
  },
];
export default routes;
