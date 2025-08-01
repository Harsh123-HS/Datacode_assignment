import React from "react";
import Header from "./Component/Header";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const noHeaderPaths = ["/login","/signin"];

  const hideHeader = noHeaderPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {!hideHeader && <Header />}
      <Outlet />
    </div>
  );
}

export default Layout;
