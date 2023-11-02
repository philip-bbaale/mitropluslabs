"use client";

const links = [
  {
    name: "Projects",
    href: "",
    icon: "",
    sub_links: [
      {
        name: "Literacy Centers",
        href: "",
        icon: "",
      },
      {
        name: "Academy",
        href: "",
        icon: "",
      },
      {
        name: "Market-mania",
        href: "",
        icon: "",
      },
      {
        name: "Gorilla Hunt",
        href: "",
        icon: "",
      },
      {
        name: "Gorilla Hub",
        href: "",
        icon: "",
      },
    ],
  },
  {
    name: "Company",
    href: "",
    icon: "",
    sub_links: [
      {
        name: "Founders",
        href: "",
        icon: "",
      },
      {
        name: "The team",
        href: "",
        icon: "",
      },
      {
        name: "Careers",
        href: "",
        icon: "",
      },
      {
        name: "Publication",
        href: "",
        icon: "",
      },
    ],
  },
  {
    name: "Safety",
    href: "",
    icon: "",
    sub_links: [
      {
        name: "Charter",
        href: "",
        icon: "",
      },
      {
        name: "Regulatory Aid",
        href: "",
        icon: "",
      },
    ],
  },
];

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/mitroplus_labs_logo.png"
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className="flex justify-around flex-wrap items-center sticky top-0 backdrop-blur-xl bg-black opacity-90 p-3 z-50">
      <div>
        <Link href="/">
        <Image src={Logo} alt="Mitroplus Labs Logo" height={30} quality={100} placeholder="blur" className="shadow-white"/>
        </Link>
      </div>
      <div className="lg:flex space-x-4 md:hidden">
        {links.map((link) => {
          return (
            <div
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-between gap-2 p-3 text-white text-sm font-medium cursor-context-menu hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <p className="hidden md:block">{link.name}</p>
            </div>
          );
        })}
      </div>
      <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
    </nav>
  );
}
