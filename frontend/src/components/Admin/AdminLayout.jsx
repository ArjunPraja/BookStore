 import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar"; 

const AdminLayout = () => {
  return (
    <div className="flex max-w-screen-2xl md:h-screen space-x-0">
      <SideNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;