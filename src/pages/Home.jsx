import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modal, { ModalHeader } from "../components/ui/Modal";

const Home = () => {
  //   const [isAdmin, setIsAdmin] = useState(false);

  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  //   const [Login, isLogin] = useState("Login");
  const handleLogin = () => {
    // console.log("Login");
    setIsAdmin(true);
    setShowModal(false);
    // isLogin("Logout");
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  //   const [closeModal, setCloseModal] = useState(true);

  const navigatePrivate = () => navigate("/private");
  const navigatePublic = () => navigate("/public");
  const navigateHome = () => {
    console.log("Logo clicked, getHome function called");
    navigate("/");
  };

  const handleModalOpen = () => setShowModal(true);
  return (
    <>
      {/* <Drawer showDrawer={isDrawer} /> */}
      <Modal isShow={showModal} setShow={setShowModal}>
        <div className="bg-white w-full md:w-[500px] p-4 rounded flex flex-col justify-center items-center gap-4">
          <ModalHeader title={"Login"} subtitle={"Insert credentials here"} />
          <button
            onClick={handleLogin}
            className=" text-center bg-blue-400 text-white p-4 block w-full"
          >
            Login
          </button>
          <button
            onClick={handleLogin}
            className=" text-center bg-white text-blue-400 p-4 block w-full"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <div className=" bg-neutral-300 flex flex-col justify-center items-center h-screen w-screen gap-4 overflow-hidden">
        <Header getHome={navigateHome}></Header>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>Home</h1>
          {/* Condition rendering */}
          {isAdmin ? <h1>Admin </h1> : <h1>Not admin</h1>}
        </div>
        <div className="flex gap-4">
          <button
            className="border border-slate-900 p-2 "
            onClick={isAdmin ? handleLogout : handleModalOpen}
          >
            {isAdmin ? "Logout" : "Login"}
          </button>

          <button
            className="border border-slate-900 p-2 "
            onClick={navigatePrivate}
          >
            Go to private
          </button>
          <button
            className="border border-slate-900 p-2 "
            onClick={navigatePublic}
          >
            Go to public
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
