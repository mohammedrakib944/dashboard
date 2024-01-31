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
          <Topbar />
          {/* Page content here */}
          <div className="pb-5 pt-2 px-5 md:px-8 lg:px-10 xl:px-20">
            {children}
          </div>
        </div>
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
