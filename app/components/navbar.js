'use client';

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
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
  
}
