import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import Drawer, { DrawerBody, DrawerFooter, DrawerHeader } from "./ui/Drawer";

const Header = ({ getHome }) => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [showDrawer, setShowDrawer] = useState(false); // Use boolean for showing/hiding

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleDrawer = () => {
    setShowDrawer(!showDrawer); // Toggle the drawer state
  };

  const [drawerSide, setDrawerSide] = useState("right");
  const changeLeft = () => {
    setDrawerSide("left");
  };
  const changeRight = () => {
    setDrawerSide("right");
  };

  const [drawerVertical, setDrawerVertical] = useState("top"); // Add state for vertical placement
  const changeTop = () => {
    setDrawerVertical("top");
  };
  const changeBottom = () => {
    setDrawerVertical("bottom");
  };
  return (
    <div>
      <div className="w-screen h-10 bg-blue-400 flex flex-row justify-between p-7 items-center fixed top-0 left-0 ">
        <Drawer
          slide={showDrawer ? 0 : -300}
          onClose={() => setShowDrawer(false)}
          placement={drawerSide}
          slideVertical={showDrawer ? -684 : -984}
          y={drawerVertical} // Use the state for vertical placement
        >
          <DrawerHeader></DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </Drawer>

        <button onClick={getHome}>Logo</button>
        <div className="w-[100px] flex justify-between">
          <button
            className="border border-slate-900 p-2 "
            onClick={isAdmin ? handleLogout : handleLogin}
          >
            {isAdmin ? "Logout" : "Login"}
          </button>
          <button className="rotate-90" onClick={handleDrawer}>
            |||
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <button className="border border-slate-900 p-2 " onClick={changeLeft}>
            Left
          </button>
        </div>
        <div>
          <button
            className="border border-slate-900 p-2 "
            onClick={changeRight}
          >
            Right
          </button>
        </div>
        <div>
          <button className="border border-slate-900 p-2 " onClick={changeTop}>
            Top
          </button>
        </div>
        <div>
          <button
            className="border border-slate-900 p-2 "
            onClick={changeBottom}
          >
            Bottom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
