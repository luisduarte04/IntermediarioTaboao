import React, { Suspense } from 'react';
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
