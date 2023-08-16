import React, { useState } from "react";

// const Drawer = ({ slideLeft, children }) => {
//   return (
//     <div
//       className="bg-gray-700 absolute top-0 h-screen w-[300px] z-50 flex flex-col justify-between align-center text-center text-white py-11 transition-all duration-300"
//       style={{ right: slideLeft }}
//     >
//       <div className=" w-9 h-9 absolute top-0 right-0">
//         <button className="text-white py-2 px-4">X</button>
//       </div>
//       {children}
//     </div>
//   );
// };

const Drawer = ({ slideLeft, onClose, children }) => {
  return (
    <div
      className="bg-gray-700 absolute top-0 h-screen w-[300px] z-50 flex flex-col justify-between align-center text-center text-white py-11 transition-all duration-300"
      style={{ right: slideLeft }}
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
  return (
    <div>
      {children}
      <h1>Drawer Header</h1>
    </div>
  );
};

export const DrawerBody = ({ children }) => {
  return (
    <div>
      {children}
      <h1>Drawer Body</h1>
    </div>
  );
};

export const DrawerFooter = ({ children }) => {
  return (
    <div>
      {children}
      <h1>Drawer Footer</h1>
    </div>
  );
};
