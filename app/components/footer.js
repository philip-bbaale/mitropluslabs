"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/mitroplus_labs_logo.png";
import { links } from "./navigation_links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-yellow-600 py-6 px-4 lex flex-col flex-grow">
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
          <p>
            <span className="text-yellow-600">Mitroplus Labs: </span>Shaping
            Africa's tech future through education, innovation, and values.
          </p>
        </div>
        {links.map((link, index) => (
          <div key={index} className="w-full md:w-auto mb-4 md:mb-0">
            <h6 className="font-semibold text-violet-400">{link.name}</h6>
            <ul>
              {link.sub_links.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <Link href={subLink.href} className="hover:text-yellow-600">
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-around items-center border-t border-yellow-600 mt-6 pt-6 text-center text-sm text-gray-600">
        <p>© {year} Mitroplus Labs</p>
        <p>
          <a
            href="mailto:info.mitropluslabs@gmail.com"
            className="hover:text-yellow-600"
          >
            info.mitropluslabs@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
