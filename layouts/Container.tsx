import React from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto py-8 px-4 md:py-16 md:px-8">
      {children}
    </div>
  );
};
