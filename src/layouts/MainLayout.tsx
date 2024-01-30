import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { TChildren } from "@/types/TChildren";
import Topbar from "@/components/topbar/Topbar";

const MainLayout = ({ children }: TChildren) => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Topbar />
          <div className="p-5">{children}</div>
        </div>
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
