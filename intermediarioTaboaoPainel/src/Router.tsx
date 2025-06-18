import React, { Suspense } from 'react';
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const Reset = lazy(() => import("./pages/Login/includes/Reset"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Cadastro = lazy(() => import("./pages/Login/includes/Cadastro"));



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;


