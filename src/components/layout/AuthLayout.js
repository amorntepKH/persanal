import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
