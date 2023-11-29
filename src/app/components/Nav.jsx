"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";
// import MenuOverLay from "./MenuOverLay";

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Nav = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 ">
        <Link href="/" className="text-xl md:text-5xl text-white font-semibold">
          <video
            width={50}
            height={50}
            src="/video/3d-react.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay="autoplay"
          />
        </Link>
        <div className="mobile-menublock md:hidden">
          {!navBarOpen ? (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon
                className="h-5 w-5"
                onClick={() => setNavBarOpen(true)}
              />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon
                className="h-5 w-5"
                onClick={() => setNavBarOpen(false)}
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 ">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverLay links={navLink} /> : null}
    </nav>
  );
};

export default Nav;
