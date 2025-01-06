import React from "react";

const Parallax = ({ image, children }) => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${require('../assets/images/TJ.png')})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Parallax;
