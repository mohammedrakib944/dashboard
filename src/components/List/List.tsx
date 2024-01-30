import Link from "next/link";
import React from "react";

type ListProps = {
  text: string;
  icon: React.ReactNode;
  link: string;
  active?: boolean;
};

const List = ({ text, icon, active, link }: ListProps) => {
  return (
    <Link href={link}>
      <div
        className={`${
          active ? "bg-secondary/40 text-white" : ""
        } hover:bg-secondary/30 cursor-pointer duration-150 p-3 rounded-md flex items-center gap-4 mb-2`}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
};

export default List;
