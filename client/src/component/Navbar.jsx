import React, { useState, useEffect } from 'react';
import HamburgerIcon from './Hamburger';
import Drawer from './Drawer';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarTextColor, setNavbarTextColor] = useState('#000'); // default dark color

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

    // Remove previous ScrollTriggers to avoid duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const aboutSection = document.querySelector('[data-navbar-text-color="light"]');
    if (aboutSection) {
      ScrollTrigger.create({
        trigger: aboutSection,
        start: "top 5%",
        end: "bottom 5%",
        onEnter: () => setNavbarTextColor('#fff'), 
        onLeave: () => setNavbarTextColor('#000'), 
        onEnterBack: () => setNavbarTextColor('#fff'),
        onLeaveBack: () => setNavbarTextColor('#000'),
        scrub: true,
      });
    }
  });

  return (
    <>
      <div className="flex justify-center items-center p-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex title p-4 px-8">
          <h2
            className='text-xS font-semibold transition-colors duration-300 ease-in-out'
            style={{ color: navbarTextColor }}
          >
            SAVIOUR
          </h2>
        </div>
        <div className="p-4 px-8">
          <HamburgerIcon isOpen={open} onClick={toggle} color={navbarTextColor} />
        </div>
      </div>
      <Drawer isOpen={open} onClose={closeDrawer} />
    </>
  );
}

export default Navbar;
