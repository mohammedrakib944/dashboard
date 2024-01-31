"use client";
import React from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import List from "../List/List";
import { usePathname } from "next/navigation";
import { sideLinks } from "../../data/sidebarData";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="drawer-side">
      <label
        htmlFor="sidebar"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="p-4 w-72 min-h-full bg-primary text-secondary">
        <h2 className="text-white flex gap-2 items-center py-2 px-2 mb-5">
          <span className="text-4xl">
            <MdOutlineAutoGraph />
          </span>
          <span className="text-2xl font-bold">Financfy</span>
        </h2>

        {sideLinks.map((item) => (
          <li key={item.id}>
            <List
              text={item.text}
              icon={item.icon}
              link={item.link}
              active={pathName === item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
