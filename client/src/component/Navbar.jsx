import React, { useState } from 'react';
import HamburgerIcon from './Hamburger';
import Drawer from './Drawer';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center p-4 relative">
        <div className="flex p-4 px-8">
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
