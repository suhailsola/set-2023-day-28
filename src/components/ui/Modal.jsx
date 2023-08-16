import React from "react";

const Modal = ({ isShow = false, children }) => {
  return (
    isShow && (
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className=" flex flex-col justify-center items-center p-5 rounded-md gap-5">
          {children}
        </div>
      </div>
    )
  );
};

export const ModalHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export const ModalFooter = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

export const ModalBody = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

export default Modal;
