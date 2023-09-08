import Image from "next/image";
import Link from "next/link";
import React from "react";

const time = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="absolute h-screen">
      <div className="fixed z-[2] text-sm font-semibold text-white items-center bottom-0 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-2xl flex justify-between h-16"></div>
      <div className="fixed z-[3] text-sm font-semibold text-white items-center bottom-0 w-full bg-primary flex justify-between h-16">
        <p className="ml-6 md:ml-16">
          &copy; {time}{" "}
          <Link
            className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent"
            href={"https://infs.world"}
          >
            infs.world
          </Link>
        </p>
        <div className="flex">
          <Link href={"https://github.com/infuriating"} target="_blank">
            <Image
              src={"images/socials/github.svg"}
              alt="Github"
              height={36}
              width={36}
            ></Image>
          </Link>
        </div>
        <Link href={"https://linktr.ee/infuriating"} target="_blank">
          <p className="mr-6 md:mr-16">linktree</p>
        </Link>
      </div>
    </div>
  );
}
