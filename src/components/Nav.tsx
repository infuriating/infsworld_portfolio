"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { NavPages } from "@/lib/LocalFetch";

export default function Nav() {
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = React.useState(true);

  function handleMobileMenu() {}

  return (
    <>
      {mobileMenu && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-primary opacity-20 z-50"></div>
          <div className="fixed top-0 left-0 w-max h-max bg-primary z-52"></div>
        </>
      )}
      <div className="font-poppins flex h-20 bg-primary w-full ">
        <Link href="/">
          <div className="absolute ml-8 items-center justify-center">
            <Image
              src="/images/infsworld.png"
              alt="infs.world"
              width={200}
              height={80}
            />
          </div>
        </Link>
        <div className="flex w-full gap-4 text-md h-20 items-center justify-end px-8">
          {NavPages.map((link) => (
            <Link href={link.href} key={link.href} passHref>
              <div
                className={`group flex items-center font-semibold transition-all duration-300 hover:font-semibold hover:text-white hover:opacity-80 ${
                  pathname === link.href ? "" : "text-not-active"
                }`}
              >
                <p>{link.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[2px] shadow-lg bg-border mb-8"></div>
    </>
  );
}
