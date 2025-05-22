import React, { useState } from 'react';
import HamburgerIcon from './Hamburger';
import Drawer from './Drawer';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useGSAP(() => {
    gsap.from(".title", {
      duration: 1.5,
      opacity: 0,
      x: "100%",
      ease: "power2.out",
    });
    gsap.from(".hamburger-icon", {
      duration: 1.5,
      opacity: 0,
      x: "-100%",
      ease: "power2.out",
    });
  })

  return (
    <>
      <div className="flex justify-center items-center p-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex title p-4 px-8">
          <h2 className='text-xS font-semibold transition-transform duration-300 ease-in-out'>SAVIOUR</h2>
        </div>
        <div className="p-4 px-8">
          <HamburgerIcon isOpen={open} onClick={toggle} />
        </div>
      </div>
      <Drawer isOpen={open} onClose={closeDrawer} />
    </>
  );
}

export default Navbar;
