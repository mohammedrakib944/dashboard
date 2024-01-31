import React from "react";

const Loader = ({ title }: { title?: string }) => {
  return (
    <div className="py-6 flex items-center justify-center gap-2">
      <span className="loading loading-spinner loading-sm"></span>
      <span className="text-primary/70 text-sm">{title}</span>
    </div>
  );
};

export default Loader;
