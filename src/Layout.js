import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="Grocery List" />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
