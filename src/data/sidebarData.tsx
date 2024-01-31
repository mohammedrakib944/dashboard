import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BsBank2, BsPeopleFill } from "react-icons/bs";
import { MdWebStories } from "react-icons/md";
import { IoServerSharp } from "react-icons/io5";
import { BiSolidWidget } from "react-icons/bi";
import { SiOctanerender } from "react-icons/si";
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
    text: "Products (CSR)",
    icon: <MdWebStories />,
    active: false,
    link: "/products",
  },
  {
    id: 4,
    text: "Users (SSR)",
    icon: <BsPeopleFill />,
    active: false,
    link: "/users",
  },
  {
    id: 3,
    text: "Articles (ISR)",
    icon: <IoServerSharp />,
    active: false,
    link: "/articles",
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
