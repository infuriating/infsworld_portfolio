import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: notes } = await supabase.from("notes").select("*");

  notes?.sort((a, b) => a.id - b.id);
  notes?.reverse();

  return (
    <>
      <div className="flex justify-center items-center">
        <Link href={"/create-note"}>
          <p className="bg-primary px-6 py-2 rounded-lg w-max text-center font-medium mb-6 text-xl transition-all duration-300 hover:bg-neutral-800">
            Create a note
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center font-poppins">
        {notes?.map((note) => (
          <div
            key={note.id}
            className="bg-primary w-full h-full px-8 py-4 flex flex-col gap-2 justify-center max-w-3xl rounded-lg relative"
          >
            <div className="absolute bg-neutral-900 w-full h-full blur-2xl left-0 top-0 -z-10"></div>
            <p className="text-neutral-400 text-xs">
              {note.created_at.substring(0, 10)}
              <span className="font-bold">{" - "}</span>
              {note.created_at.substring(11, 19)}
            </p>
            <div className="flex items-center gap-x-1">
              <p className="text-neutral-500 text-xs">note from </p>

              <p className="font-bold text-xl text-white">{note.name}</p>
            </div>
            <p className="text-sm">{note.note}</p>
          </div>
        ))}
      </div>
    </>
  );
}
