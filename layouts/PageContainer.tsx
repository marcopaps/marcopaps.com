import React from "react";

export const Narrow: React.FC = ({ children }) => {
  return (
    <div className="items-center px-6 lg:px-32 text-white text-9xl">
      {children}
    </div>
  );
};
