import React, { useState } from "react";

const Drawer = ({
  placement = "right",
  y = "top",
  slide,
  slideVertical,
  onClose,
  children,
}) => {
  const positionXStyle = {
    right: placement === "right" ? slide : "auto",
    left: placement === "left" ? slide : "auto",
  };
  const positionYStyle = {
    top: y === "top" ? slide : "auto",
    bottom: y === "bottom" ? slideVertical : "auto",
  };
  return (
    <div
      className="bg-gray-700 absolute w-[300px] h-screen z-50 flex flex-col justify-between align-center text-center text-white py-11 transition-all duration-300"
      style={{ ...positionXStyle, ...positionYStyle }}
    >
      <div className="w-9 h-9 absolute top-0 right-0">
        <button className="text-white py-2 px-4" onClick={onClose}>
          X
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;

export const DrawerHeader = ({ children }) => {
  return <div className=" font-bold text-center">{children}</div>;
};

export const DrawerBody = ({ children }) => {
  return (
    <div className=" bg-slate-400 text-justify p-6 flex flex-col justify-between items-center gap-5">
      {children}
    </div>
  );
};

export const DrawerFooter = ({ children }) => {
  return <div>{children}</div>;
};
