import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import "../App.css";

export default function FooterLayout() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
