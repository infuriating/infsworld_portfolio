import React, { useState } from "react";
import Link from "next/link";

export default function Socials() {
  let [copied, setCopied] = useState("");
  function copyDiscord() {
    navigator.clipboard.writeText("infuriating");
    setCopied("My discord username has been copied to your clipboard!");
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4 flex flex-col items-center justify-center">
        <p className="mb-4 text-5xl text-center font-bold md:text-6xl">
          Contact me!
        </p>
        <p className="text-md w-[85%] text-center md:w-[52%]">
          I&apos;m always open to new opportunities, so if you&apos;re
          interested in working with me, feel free to send me a message!
          I&apos;ll try to get back to you as soon as possible.
        </p>
      </div>
      <div className="mx-[12.5%] mb-8 mt-4 h-[2px] w-1/4 rounded-lg bg-white opacity-30"></div>
      <div className="flex gap-4">
        <button
          onClick={copyDiscord}
          className="rounded-lg bg-purple-900 px-8 py-2 font-bold transition-all duration-500 ease-in-out hover:bg-purple-800"
        >
          Discord
        </button>
        <Link
          href="https://t.me/subbotter"
          className="rounded-lg bg-blue-500 px-8 py-2 font-bold transition-all duration-500 ease-in-out hover:bg-blue-400"
          target="_blank"
        >
          Telegram
        </Link>
      </div>
      <p
        className={`mt-4 text-lg font-semibold transition-all duration-300 ${
          copied === "" ? "opacity-0" : "opacity-100"
        } `}
      >
        {copied}
      </p>
    </div>
  );
}
