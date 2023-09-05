"use client";

import React from "react";
import { createClient } from "@supabase/supabase-js";

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

    const { data, error } = await supabase
      .from("notes")
      .insert([{ name: formName, note: formNote }]);

    location.href = "/note";
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="px-4 text-black py-2 rounded-lg w-[800px]"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="note">Note</label>
            <textarea
              className="px-4 text-black py-2 rounded-lg w-[800px]"
              name="note"
              id="note"
              required
              cols={20}
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="font-semibold text-black rounded-md px-6 py-2 bg-white hover:bg-neutral-300 transition-all duration-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
