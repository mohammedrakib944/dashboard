import React from "react";
import { TbError404 } from "react-icons/tb";
import { IoSadOutline } from "react-icons/io5";

const Notfound = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-6xl flex gap-2">
          <TbError404 />
          <IoSadOutline />
        </p>
        <span className="font-bold text-primary">Page Notfound</span>
      </div>
    </div>
  );
};

export default Notfound;
