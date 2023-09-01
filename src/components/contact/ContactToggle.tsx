"use client";

import React, { useState } from "react";
import Socials from "./Socials";
import ContactEmbedded from "./Form";

export default function ContactToggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div>
        {isToggled ? <ContactEmbedded /> : <Socials />}
        <div className="flex flex-col mt-4 items-center">
          <button
            className="px-6 w-max font-semibold py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 transition-all duration-500"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? "View my socials" : "Visit the contact form"}
          </button>
        </div>
      </div>
    </>
  );
}
