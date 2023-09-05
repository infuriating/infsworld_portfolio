import PageContainer from "@/components/PageContainer";
import Tool from "@/components/about/Tool";
import Link from "next/link";
import React from "react";

export default function page() {
  const secretMessage = "{ secret page }";
  return (
    <>
      <div className="w-full md:w-1/2">
        <p className="text-4xl font-bold">Hey!</p>
        <p className="text-lg mt-2 mb-1 font-medium">
          My name is <b>Luca Kuiper</b>, also known as inf, or infuriating, or
          whatever you want to call me.
        </p>
        <p>
          I&apos;m a 20 year old <b>full-stack developer</b> from the
          Netherlands who also loves to design stuff in his free time.
        </p>
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
