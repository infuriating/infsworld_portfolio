import CurrentImage from "@/components/about/CurrentImage";
import Tool from "@/components/about/Tool";
import Link from "next/link";
import React from "react";

export default function page() {
  const secretMessage = "{ secret page }";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-about-md lg:grid-cols-about-lg">
        <div className="w-full text-center md:text-left">
          <p className="text-4xl font-bold">Hey!</p>
          <p className="text-xl mt-2 mb-3 font-medium">
            My name is <b>Luca Kuiper</b>, also known as infuriating
          </p>
          <div className="flex flex-col gap-y-1">
            <p>
              I&apos;m a 20 year old <b>full-stack developer</b> who currently
              resides in The Hague, The Netherlands.
            </p>
            <p>
              Other than being a developer, I also like to play games, make
              motion graphics using After Effects and make digital art using
              Photoshop.
            </p>
            <p>
              The reason why I decided to become a full-stack developer is
              because I like building new projects and providing{" "}
              <b>software as a service</b> to potential customers.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <CurrentImage />
        </div>
      </div>
      <Tool />
      <Link href="/note">
        <p className="text-center mt-8 opacity-10 hover:opacity-100 transition-all duration-300">
          {secretMessage}
        </p>
      </Link>
    </>
  );
}
