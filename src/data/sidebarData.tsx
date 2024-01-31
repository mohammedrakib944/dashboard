import { BiSolidDashboard } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdWebStories } from "react-icons/md";
import { IoServerSharp } from "react-icons/io5";
import { TbError404 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export const sideLinks = [
  {
    id: 1,
    text: "Dashboard",
    icon: <BiSolidDashboard />,
    link: "/",
  },
  {
    id: 2,
    text: "Products (CSR)",
    icon: <MdWebStories />,
    link: "/products",
  },
  {
    id: 4,
    text: "Users (SSR)",
    icon: <BsPeopleFill />,
    link: "/users",
  },
  {
    id: 3,
    text: "Articles (ISR)",
    icon: <IoServerSharp />,
    link: "/articles",
  },
  {
    id: 6,
    text: "Profile",
    icon: <CgProfile />,
    link: "/profile",
  },
  {
    id: 5,
    text: "Not found",
    icon: <TbError404 />,
    link: "/not-found-page",
  },
];
