"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/mitroplus_labs_logo.png";

const links = [
  // your links data
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-6 px-4 lex flex-col flex-grow">
      <div className="container mx-auto flex flex-wrap justify-around items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
          <Link href="/">
            <Image
              src={Logo}
              alt="Mitroplus Labs Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        {links.map((link, index) => (
          <div key={index} className="w-full md:w-auto mb-4 md:mb-0">
            <h6 className="font-semibold">{link.name}</h6>
            <ul>
              {link.sub_links.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <Link href={subLink.href} className="hover:text-yellow-600">{subLink.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-yellow-600 mt-6 pt-6 text-center text-sm text-gray-600">
        © {year} Mitroplus Labs
      </div>
    </footer>
  );
}
