import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Components/Auth/Signup";
import Home from "../Pages/Home";
import Login from "../Components/Auth/Login";
import AuthGraud from "../RouteGuard/AuthGuard";

function Auth() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>'
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AuthGraud />}>
          <Route path="/home" element={<Home />}></Route>'
        </Route>
      </Routes>
    </>
  );
}

export default Auth;
