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

    if (mobileMenu) {
      setMobileMenu(false);
    }
  }

  return (
    <>
      {mobileMenu && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-primary opacity-50 z-50"></div>
          <div className="fixed flex flex-col justify-center items-center w-full h-full z-[52]">
            <div className="bg-primary py-4 pr-16 pl-4 flex flex-col justify-start w-max rounded-md drop-shadow-xl">
              {MobileNavPages.map((link) => (
                <Link href={link.href} key={link.href} passHref>
                  <div
                    className={`group flex text-xl items-center font-semibold transition-all duration-300 hover:font-semibold hover:text-white hover:opacity-80 ${
                      pathname === link.href ? "" : "text-not-active"
                    }`}
                  >
                    <p>{link.text}</p>
                  </div>
                </Link>
              ))}
              <button
                className="py-2 px-6 bg-red-400 font-bold rounded-lg mt-4"
                onClick={handleMobileMenu}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
      <div className="font-poppins flex h-20 bg-primary w-full">
        <Link href="/">
          <div className="absolute md:ml-8 items-center justify-center">
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
            className="text-black bg-white w-[40px] aspect-square rounded-lg text-2xl"
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
