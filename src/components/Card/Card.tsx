import React from "react";
import { IoIosMore } from "react-icons/io";

type TCardData = {
  data: {
    id: number;
    title: string;
    value: string;
    icon: React.ReactNode;
  };
};

const Card: React.FC<TCardData> = ({ data }) => {
  return (
    <div className="max-w-[400px] bg-white p-10 shadow-sm rounded-lg">
      <p className="top-3 float-right -mt-6 -mr-4 text-2xl text-primary/80 cursor-pointer">
        <IoIosMore />
      </p>
      <div className="flex gap-5 items-center">
        <div className="bg-accent/10 text-accent rounded-full p-5 text-3xl">
          {data.icon}
        </div>
        <div>
          <h1 className="text-primary text-xl xl:text-xl font-bold">
            {data.value}
          </h1>
          <p className="text-accent font-semibold pt-1">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
