"use client";
import Link from "next/link";
import React, { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const NavigationBar = () => {
  // state for mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="max-w-3xl h-24 sticky top-0 shadow-md bg-background flex justify-between items-center px-4 z-10 mx-auto">
      <nav className="flex justify-between items-center w-full">
        <Link href="/" className="text-bold font-mono">
          <Image
            src="/images/naviconCoco.png"
            alt="Company logo for navigation bar"
            height={400}
            width={400}
          />
        </Link>
        <div className="hidden md:flex">
          <DesktopMenu />
        </div>
        <div className="flex md:hidden">
          <MobileMenu openMenu={openMenu} handleMenuClick={handleMenuClick} />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
