import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdLightbulb } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import Button from "../Button/Button";
import Image from "next/image";
import Avatar from "@/assets/img/avatar.jpg";
import Flag from "@/assets/img/flag.png";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

const Topbar = () => {
  return (
    <nav className="w-full bg-white px-5 py-3 shadow-sm flex items-center justify-between sticky top-0">
      <div className="flex gap-4 items-center">
        {/* Hamburger Menu */}
        <label htmlFor="sidebar" className="drawer-button">
          <span className="text-2xl text-accent cursor-pointer">
            <RiMenu2Line />
          </span>
        </label>
        <div>
          <h3 className="font-semibold">Hello, Rakibuzzaman! 👋</h3>
          <p className="text-gray-500 text-xs">31 January 2024</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button className="hidden xl:flex" ghost icon={<MdLightbulb />}>
          Take a tour
        </Button>

        <Button className="hidden lg:flex" icon={<BsPlus />}>
          Add new cash book
        </Button>

        <div className="hidden md:flex px-8 cursor-pointer gap-2 text-accent text-sm font-semibold">
          <Image src={Flag} width="25" className="object-contain" alt="Lang" />{" "}
          EN
        </div>

        <div className="hidden md:block dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-3 bg-accent/10 rounded-full text-xl shadow-none text-accent"
          >
            <HiMiniBellAlert />
          </div>
          <ul tabIndex={0} className="dropdownUi relative z-20">
            <li>
              <a>Notification1</a>
            </li>
            <li>
              <a>Notification2</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 text-accent/60 text-sm"
          >
            <Image
              className="w-11 h-11 rounded-full border-2 border-accent/60"
              src={Avatar}
              alt="Avatar Image"
            />
            <FaChevronDown />
          </div>
          <ul tabIndex={0} className="dropdownUi">
            <li>
              <Link href="/profile">
                <CgProfile /> Profile
              </Link>
            </li>
            <li>
              <a>
                <IoMdSettings /> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
