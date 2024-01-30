import React from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import List from "../List/List";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BsBank2, BsPeopleFill } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa";
import { RiTakeawayFill } from "react-icons/ri";

export const SideLinks = [
  {
    id: 1,
    text: "Dashboard",
    icon: <BiSolidDashboard />,
    active: true,
    link: "/",
  },
  {
    id: 2,
    text: "Transactions",
    icon: <GrTransaction />,
    active: false,
    link: "/transaction",
  },
  {
    id: 3,
    text: "Banking",
    icon: <BsBank2 />,
    active: false,
    link: "/banking",
  },
  {
    id: 4,
    text: "Customers",
    icon: <BsPeopleFill />,
    active: false,
    link: "/customers",
  },
  {
    id: 5,
    text: "Sales",
    icon: <FaSellsy />,
    active: false,
    link: "/sales",
  },
  {
    id: 6,
    text: "Suppliers",
    icon: <RiTakeawayFill />,
    active: false,
    link: "/suppliers",
  },
];

const Sidebar = () => {
  return (
    <aside className="min-w-[280px] max-w-[300px] min-h-screen bg-primary py-3 px-4 overflow-y-auto">
      <h2 className="text-white flex gap-2 items-center py-2 px-2">
        <span className="text-4xl">
          <MdOutlineAutoGraph />
        </span>
        <span className="text-2xl font-bold">Financfy</span>
      </h2>
      <ul className="mt-4 text-secondary">
        {SideLinks.map((item) => (
          <React.Fragment key={item.id}>
            <List
              text={item.text}
              icon={item.icon}
              link={item.link}
              active={item.active}
            />
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
