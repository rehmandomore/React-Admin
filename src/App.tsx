import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "@/routes/HomeRoutes";
import Header from "@/components/Header";
import Aside from "./components/Aside";

export default function App() {
  let [showSideMenu, setSideMenu] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSideMenu((showSideMenu = !showSideMenu));
  };

  return (
    <BrowserRouter>
      <Header onMenuClick={toggleSidebar} />
      <div className="flex">
        <Aside isVisible={showSideMenu} />
        <HomeRoutes />
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
