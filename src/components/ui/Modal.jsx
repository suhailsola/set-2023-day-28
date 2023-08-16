import React, { useState } from "react";

const Modal = ({ isShow = false, setShow, children }) => {
  // const [closeModal, setCloseModal] = useState(true);
  //   const cancelLoginHandler = () => {
  //     // console.log(closeModal);
  //     setShow(false);
  //   };
  return (
    isShow && (
      <div className="bg-blue-700/10 fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
        {children}
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
