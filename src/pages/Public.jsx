import React from "react";
import Header from "../components/Header";
import { Navigate, useNavigate } from "react-router-dom";

const Public = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    console.log("Logo clicked, getHome function called");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <Header getHome={navigateHome} />
      <h1>Public</h1>
    </div>
  );
};

export default Public;
