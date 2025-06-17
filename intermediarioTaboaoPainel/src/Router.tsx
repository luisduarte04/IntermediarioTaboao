import React, { Suspense } from 'react';
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const Reset = lazy(() => import("./pages/Login/includes/Reset"));
const Menu = lazy(() => import("./pages/Login/includes/Menu"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Menu" element={<Menu />} />
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
