"use client";

import React, { useState } from "react";
import Image from "next/image";
import { slideshowImages } from "@/lib/LocalFetch";

export default function CurrentImage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage + 1 >= slideshowImages.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  setTimeout(nextImage, 3000);
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <Image
        className={`rounded-lg transition-all duration-1000 max-h-96 aspect-[9/16] object-cover`}
        src={slideshowImages[currentImage]}
        alt="Lucky"
        objectFit="cover"
        width={220}
        height={200}
      />
      <p className="text-neutral-700 mt-2 text-sm text-center">
        ^ ugly ahh dog{" "}
        <span className="text-neutral-600 font-medium">(Lucky)</span>
      </p>
    </div>
  );
}
