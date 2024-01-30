import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { TChildren } from "@/types/TChildren";
import Topbar from "@/components/topbar/Topbar";
import { SideLinks } from "@/components/sidebar/Sidebar";

const MainLayout = ({ children }: TChildren) => {
  return (
    <div className="">
      {/* Sidebar
      <Sidebar />
      <div className="col-span-10 bg-gray-100">
        <Topbar />
        <div className="p-5">{children}</div>
      </div> */}
      <div className="drawer lg:drawer-open">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Topbar />
          {children}
        </div>
        <div className="drawer-side">
          {/* Sidebar */}
          <label
            htmlFor="sidebar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-primary text-secondary">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
