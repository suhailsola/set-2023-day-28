import React, { useState } from "react";
import Header from "../components/Header";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Drawer, {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "../components/ui/Drawer";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const [showDrawer, setShowDrawer] = useState(false);
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
    <>
      <Modal isShow={showModal}>
        <div className="bg-white w-[600px] h-[400px] rounded-md border-black border flex flex-col justify-center items-center p-5 gap-5">
          <ModalHeader
            title={"Modal is Open"}
            subtitle={"Keep it up"}
          ></ModalHeader>
          <ModalBody>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quo eligendi laborum. Quos, eius reiciendis! Minus, quisquam
              repellat tempora deleniti architecto voluptatum voluptas cum sunt
              officiis nam! Voluptatem, exercitationem nobis?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
      <div className="w-screen h-screen overflow-hidden">
        <div className="bg-white w-screen h-screen flex flex-col justify-center items-center gap-4">
          {/* <Header></Header> */}
          <Drawer
            slide={showDrawer ? 0 : -300}
            onClose={() => setShowDrawer(false)}
            placement={drawerSide}
            slideVertical={showDrawer ? 0 : -300}
            y={drawerVertical} // Use the state for vertical placement
          >
            <DrawerHeader>
              <h1>Top of the drawer</h1>
            </DrawerHeader>
            <DrawerBody>
              <p>It is very hard to make it go to bottom</p>
              <h1>Home</h1>
              <h1>About Me</h1>
              <h1>Skills</h1>
              <h1>Projects</h1>
              <h1>Contacts</h1>
            </DrawerBody>
            <DrawerFooter>
              <p>End of drawer</p>
            </DrawerFooter>
          </Drawer>
          <div className="w-[400px] bg-blue-600 flex flex-col justify-center items-center rounded-md gap-5 p-10">
            <button
              className="text-center w-[80%] h-[70px] bg-slate-300 rounded"
              onClick={handleModalOpen}
            >
              Modal
            </button>
            <button
              className="text-center w-[80%] h-[70px] bg-slate-300 rounded"
              onClick={handleDrawer}
            >
              Drawer
            </button>
            <div className="flex justify-between items-center gap-3">
              <Button variant="outline" onClick={changeLeft}>
                Left
              </Button>
              <Button variant="outline" onClick={changeBottom}>
                Bottom
              </Button>
              <Button variant="outline" onClick={changeRight}>
                Right
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
