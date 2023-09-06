"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function NoteProcessing() {
  useEffect(() => {
    redirect("/note");
  }, []);

  return (
    <div className="h-container-svh flex flex-col gap-y-2 justify-center items-center">
      <p className="text-2xl md:text-4xl font-bold">
        Your note is currently being processed..
      </p>
      <p className="text-xl md:text-3xl font-semibold">
        Thank you for posting a note!
      </p>
    </div>
  );
}
