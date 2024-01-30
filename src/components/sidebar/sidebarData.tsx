import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BsBank2, BsPeopleFill } from "react-icons/bs";
import { RiTakeawayFill } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";

export const sideLinks = [
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
    id: 6,
    text: "Suppliers",
    icon: <RiTakeawayFill />,
    active: false,
    link: "/suppliers",
  },
  {
    id: 5,
    text: "Not found",
    icon: <TbError404 />,
    active: false,
    link: "/not-found-page",
  },
];
