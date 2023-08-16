import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import Drawer, { DrawerBody, DrawerFooter, DrawerHeader } from "./ui/Drawer";

// const Header = () => {
//   const { isAdmin, setIsAdmin } = useContext(AdminContext);
//   const [showDrawer, setShowDrawer] = useState(-300);
//   const handleLogin = () => {
//     setIsAdmin(true);
//   };
//   const handleLogout = () => {
//     setIsAdmin(false);
//   };

//   const handleDrawer = () => {
//     setShowDrawer(0);
//     console.log(showDrawer);
//   };
//   return (
//     <div>
//       <div className="w-screen h-10 bg-gray-400 flex flex-row justify-between p-7 items-center fixed top-0 left-0 ">
//         <Drawer slideLeft={showDrawer}>
//           <DrawerHeader></DrawerHeader>
//           <DrawerBody></DrawerBody>
//           <DrawerFooter></DrawerFooter>
//         </Drawer>
//         <h1>Logo</h1>
//         <div className="w-[100px] flex justify-between">
//           <button
//             className="border border-slate-900 p-2 "
//             onClick={isAdmin ? handleLogout : handleLogin}
//           >
//             {isAdmin ? "Logout" : "Login"}
//           </button>
//           <button className="rotate-90" onClick={handleDrawer}>
//             |||
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

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
    console.log(showDrawer);
  };

  return (
    <div>
      <div className="w-screen h-10 bg-blue-400 flex flex-row justify-between p-7 items-center fixed top-0 left-0 ">
        <Drawer
          slideLeft={showDrawer ? 0 : -300}
          onClose={() => setShowDrawer(false)}
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
    </div>
  );
};

export default Header;
