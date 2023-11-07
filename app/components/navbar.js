"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/mitroplus_labs_logo.png";
import { links } from "./navigation_links";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl opacity-95  p-3">
      <div className={`flex justify-around items-center`}>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Mitroplus Labs Logo"
              height={30}
              quality={100}
              placeholder="blur"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className="md:hidden p-3 hover:bg-violet-800 rounded text-white hover:text-white outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Large and Medium Screens Navigation Links */}
        <div className={`hidden md:flex space-x-4`}>
          {links.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center p-3 text-white text-sm font-medium cursor-pointer group-hover:text-yellow-600">
                {link.name}
              </div>
              {activeMenu === index && (
                <div className="absolute top-full left-0 w-48 bg-black shadow-md z-50 py-2 space-y-2">
                  {link.sub_links.map((subLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm font-medium text-white hover:text-yellow-600"
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Small Screen Navigation Links (Hamburger Menu Open) */}
        {isHamburgerOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-black shadow-md p-4">
            {links.map((link, index) => (
              <div key={index} className="py-2">
                <p className="text-sm font-medium text-violet-400">
                  {link.name}
                </p>
                {link.sub_links.map((subLink, subIndex) => (
                  <a
                    key={subIndex}
                    href={subLink.href}
                    className="block py-1 text-sm font-medium text-white hover:text-yellow-600 pl-4"
                  >
                    {subLink.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
