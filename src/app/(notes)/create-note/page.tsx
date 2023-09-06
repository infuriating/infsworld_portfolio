"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

export default async function page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formName = formData.get("name");
    const formNote = formData.get("note");

    if (!formName || !formNote) {
      return;
    }

    console.log(formName?.length, formNote?.length);

    if (formName?.length < 4) {
      return;
    }

    if (formNote?.length < 30) {
      return;
    }

    const { data, error } = await supabase
      .from("notes")
      .insert([{ name: formName, note: formNote }]);

    if (error) {
      console.log(error);
      return;
    }

    window.location.href = "/note-processing";
  }

  return (
    <>
      <div className="h-container-svh flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Name{" "}
              <span className="text-xs text-neutral-300">(4+ characters)</span>
            </label>
            <input
              className="mt-1 h-10 rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 py-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none w-[80vw] md:w-[700px]"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="note">
              Note{" "}
              <span className="text-xs text-neutral-300">(30+ characters)</span>
            </label>
            <textarea
              className="mt-1 rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 py-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none w-[80vw] md:w-[700px]"
              name="note"
              id="note"
              required
              cols={20}
              rows={4}
            ></textarea>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button
              className={`font-semibold text-black rounded-md px-6 py-2 bg-white hover:bg-neutral-300 transition-all duration-200`}
              type="submit"
            >
              Submit
            </button>

            <Link href={"/note"}>
              <p className="font-semibold text-white rounded-md px-6 py-2 bg-red-700 hover:bg-red-500 transition-all duration-200">
                Cancel
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
