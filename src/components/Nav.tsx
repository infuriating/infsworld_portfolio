"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { MobileNavPages, NavPages } from "@/lib/LocalFetch";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);

    if (mobileMenu) setMobileMenu(false);
  }

  return (
    <>
      {mobileMenu && (
        <>
          <div className="animate-backdropOpacityIn forwards fixed top-0 left-0 w-screen h-screen bg-primary opacity-70 z-50"></div>
          <div className="animate-opacityIn fixed flex flex-col justify-center items-center w-full h-full z-[52]">
            <div className="bg-primary py-4 gap-1 px-4 flex flex-col justify-start w-[240px] rounded-xl drop-shadow-xl">
              {MobileNavPages.map((link) => (
                <Link href={link.href} key={link.href} passHref>
                  <div
                    className={`w-max tracking-wide group ml-[60px] flex text-xl items-center font-semibold transition-all duration-300 hover:font-semibold hover:text-white hover:opacity-80 ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent"
                        : "text-not-active"
                    }`}
                  >
                    <p>{link.text}</p>
                  </div>
                </Link>
              ))}
              <div className="flex w-full justify-center">
                <button
                  className="py-2 px-10 text-lg bg-red-400 font-bold rounded-lg mt-4"
                  onClick={handleMobileMenu}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="font-poppins flex h-20 bg-primary w-full">
        <Link href="/">
          <div className="absolute top-1 md:ml-8 items-center justify-center">
            <Image
              src="/images/infsworld.png"
              alt="infs.world"
              width={200}
              height={80}
            />
          </div>
        </Link>
        <div className="md:hidden flex items-center justify-end w-full px-8">
          <button
            className="text-black font-semibold bg-white w-[40px] aspect-square rounded-lg text-2xl"
            onClick={handleMobileMenu}
            aria-label="Open Mobile Menu"
          >
            x
          </button>
        </div>
        <div className="md:flex hidden w-full gap-4 text-md h-20 items-center justify-end px-8">
          {NavPages.map((link) => (
            <Link href={link.href} key={link.href} passHref>
              <div
                className={`group flex items-center font-semibold transition-all duration-300 hover:font-semibold hover:text-white hover:opacity-80 ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent"
                    : "text-not-active"
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
