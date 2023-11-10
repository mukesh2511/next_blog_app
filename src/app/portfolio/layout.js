import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-5xl lg:text-[90px] font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
