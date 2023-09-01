"use client";

import React, { useState } from "react";
import { Tools } from "@/lib/LocalFetch";
import Image from "next/image";

export default function Tool() {
  const [carouselOpened, setCarouselOpened] = useState(false);

  return (
    <>
      <p className="text-2xl font-semibold mt-8 text-center">
        Here you can see some of some of the tools that I currently use, and/or
        are familiar with.
      </p>
      <button
        className="w-[80%] ml-[10%]  font-bold text-xl bg-primary py-2 rounded-t-xl mt-4"
        onClick={() => setCarouselOpened(!carouselOpened)}
      >
        {carouselOpened ? "^" : "v"}
      </button>
      {carouselOpened && (
        <div
          className={`grid p-4 w-[80%] ml-[10%] transition-all rounded-b-xl bg-primary gap-6 grid-cols-1 lg:grid-cols-2 place-items-center`}
        >
          <div className="flex flex-col">
            <p className="text-xl font-bold text-center mb-2">Technologies</p>
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {Tools.Technologies.map((technology) => (
                <Image
                  key={technology.name}
                  src={`/images/tools/${technology.name.toLowerCase()}.png`}
                  alt={technology.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-center mb-2">Frameworks</p>
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {Tools.Frameworks.map((framework) => (
                <Image
                  key={framework.name}
                  src={`/images/tools/${framework.name.toLowerCase()}.png`}
                  alt={framework.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-center mb-2">Libraries</p>
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {Tools.Libraries.map((library) => (
                <Image
                  key={library.name}
                  src={`/images/tools/${library.name.toLowerCase()}.png`}
                  alt={library.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-center mb-2">Databases</p>
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {Tools.Databases.map((database) => (
                <Image
                  key={database.name}
                  src={`/images/tools/${database.name.toLowerCase()}.png`}
                  alt={database.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
