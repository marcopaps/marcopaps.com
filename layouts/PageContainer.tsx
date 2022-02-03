import React from "react";

export const PageContainer: React.FC = ({ children }) => {
  return (
    <div className="md:container md:mx-auto py-8 px-8 md:py-16 md:px-16">
      {children}
    </div>
  );
};
